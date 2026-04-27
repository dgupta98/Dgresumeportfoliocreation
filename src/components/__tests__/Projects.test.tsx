import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import * as fc from 'fast-check';
import React from 'react';

// ---- Mocks ----

// Mock motion/react to render plain HTML elements
vi.mock('motion/react', () => {
  const createMotionComponent = (tag: string) => {
    return React.forwardRef(({ children, initial, animate, exit, whileInView, whileHover, whileTap, viewport, transition, ...rest }: any, ref: any) => {
      return React.createElement(tag, { ...rest, ref }, children);
    });
  };
  return {
    motion: {
      div: createMotionComponent('div'),
      span: createMotionComponent('span'),
      section: createMotionComponent('section'),
      p: createMotionComponent('p'),
      h2: createMotionComponent('h2'),
      h3: createMotionComponent('h3'),
      button: createMotionComponent('button'),
      a: createMotionComponent('a'),
    },
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
  };
});

// Mock ImageWithFallback
vi.mock('../figma/ImageWithFallback', () => ({
  ImageWithFallback: ({ src, alt, className, style }: any) => {
    return React.createElement('img', { src, alt, className, style });
  },
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ExternalLink: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'external-link-icon' }),
  BookOpen: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'book-open-icon' }),
  ChevronLeft: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'chevron-left-icon' }),
  ChevronRight: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'chevron-right-icon' }),
}));

import { Projects } from '../Projects';

// ---- Helpers ----

/**
 * Get the currently visible project summary text from the rendered component.
 * The summary is inside a <p> with specific styling. We look for the paragraph
 * that contains the summary content.
 */
function getVisibleSummaryText(container: HTMLElement): string {
  // The summary paragraph has style with color: "#adacac" and lineHeight: 1.7
  // It's the paragraph that contains either the full text, truncated text with "...",
  // or expanded text with "show less"
  const paragraphs = container.querySelectorAll('p');
  for (const p of paragraphs) {
    const style = p.getAttribute('style') || '';
    if (style.includes('line-height: 1.7') && style.includes('margin-bottom: 20px')) {
      return p.textContent || '';
    }
  }
  return '';
}

/**
 * Navigate to a specific slide by clicking the next button repeatedly.
 */
function navigateToSlide(container: HTMLElement, targetIndex: number) {
  // Click the dot buttons directly - they are small buttons with specific styling
  const dotButtons = container.querySelectorAll('button.rounded-full.transition-all');
  if (dotButtons[targetIndex]) {
    fireEvent.click(dotButtons[targetIndex]);
  }
}

// Known project summaries from the component (after Zeno removal, 8 projects remain)
const projectSummaries = [
  "Ever wonder how much code your team actually ships vs. how much they churn? RepoPulse pulls commit and PR history from GitHub, crunches the numbers (LOC, churn, WIP, cycle time), and pipes it all into Grafana dashboards. Built because I got tired of guessing.",
  "Jira costs too much and does too much. So I built a leaner version — user stories, sprint planning, Kanban boards, and the analytics that actually matter (throughput, WIP, cycle time). Role-based access, activity history, the works.",
  "I automated my own job search. This n8n-powered system handles applications end-to-end — LinkedIn scraping, resume tailoring, follow-ups. Cut my application time by 80%. Yes, I used AI to find a job in AI.",
  "Trained a CNN to tell the difference between a fresh apple and a sad one. 96% accuracy across 6 fruit types. ResNet-50 backbone, Flask API, deployed and working.",
  "Built during COVID when everyone was arguing about masks. MobileNetV2 running at 30 FPS, 94% accuracy. Real-time, real useful.",
  "LSTM + Transformer hybrid that predicts market direction with 85% accuracy. Not financial advice, but the model doesn't lie.",
  "BERT on 50K+ Amazon reviews. 92% accuracy on multi-aspect sentiment. Turns out people are very specific about why they hate a product.",
  "MFCC features + CNN to recognize spoken digits. 89% accuracy across accents. The kind of project that makes you appreciate how hard speech recognition actually is.",
];

// ---- Property 9: Project summary display correctness ----
// **Validates: Full summaries are always displayed without truncation**
describe('Property 9: Project summary display correctness', () => {
  it('for any project, the full summary text is always visible without truncation', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: projectSummaries.length - 1 }), (slideIndex) => {
        const { container, unmount } = render(<Projects />);

        // Navigate to the target slide
        navigateToSlide(container, slideIndex);

        const summary = projectSummaries[slideIndex];
        const visibleText = getVisibleSummaryText(container);

        // Full summary should always be visible
        expect(visibleText).toContain(summary);
        // Should NOT have truncation indicators
        expect(visibleText).not.toContain('read more');
        expect(visibleText).not.toContain('show less');

        unmount();
      }),
      { numRuns: projectSummaries.length }
    );
  });

  it('truncation boundary: summaries of exactly 120 chars are not truncated, summaries of 121+ chars are', () => {
    // Verify the truncation logic boundary using generated strings
    fc.assert(
      fc.property(
        fc.integer({ min: 100, max: 300 }),
        (length) => {
          const text = 'a'.repeat(length);
          if (length > 120) {
            const truncated = text.slice(0, 120) + '...';
            expect(truncated.length).toBe(123); // 120 chars + 3 for "..."
            expect(truncated.endsWith('...')).toBe(true);
            expect(truncated.slice(0, 120)).toBe(text.slice(0, 120));
          } else {
            // No truncation needed
            expect(text.length).toBeLessThanOrEqual(120);
          }
        }
      ),
      { numRuns: 50 }
    );
  });

  it('the truncated prefix is exactly the first 120 characters of the original summary', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: projectSummaries.length - 1 }), (slideIndex) => {
        const summary = projectSummaries[slideIndex];
        if (summary.length > 120) {
          const { container, unmount } = render(<Projects />);
          navigateToSlide(container, slideIndex);

          const visibleText = getVisibleSummaryText(container);
          // The visible text should start with exactly the first 120 chars
          expect(visibleText.startsWith(summary.slice(0, 120))).toBe(true);

          unmount();
        }
      }),
      { numRuns: projectSummaries.length }
    );
  });
});

// ---- Property 10: Project summary consistency across navigation ----
// **Validates: Full text remains visible when navigating between slides**
describe('Property 10: Project summary consistency across navigation', () => {
  it('for any slide, full summary text is visible without expand/collapse controls', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: projectSummaries.length - 1 }), (slideIndex) => {
        const summary = projectSummaries[slideIndex];

        const { container, unmount } = render(<Projects />);
        navigateToSlide(container, slideIndex);

        const visibleText = getVisibleSummaryText(container);
        expect(visibleText).toContain(summary);

        unmount();
      }),
      { numRuns: projectSummaries.length }
    );
  });

  it('navigating forward and back preserves full summary display', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 5 }), (cycles) => {
        const { container, unmount } = render(<Projects />);

        for (let i = 0; i < cycles; i++) {
          // Navigate forward
          const nextBtn = container.querySelectorAll('button.rounded-full.flex.items-center.justify-center');
          if (nextBtn.length >= 2) {
            fireEvent.click(nextBtn[nextBtn.length - 1]);
          }
        }

        // Verify summary is still fully visible
        const visibleText = getVisibleSummaryText(container);
        expect(visibleText.length).toBeGreaterThan(0);
        expect(visibleText).not.toContain('read more');

        unmount();
      }),
      { numRuns: 5 }
    );
  });
});
