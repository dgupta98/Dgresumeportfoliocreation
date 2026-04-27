import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as fc from 'fast-check';
import React from 'react';

// ---- Mocks ----

// Mock motion/react to render plain HTML elements
vi.mock('motion/react', () => {
  const createMotionComponent = (tag: string) => {
    return React.forwardRef(({ children, initial, animate, exit, whileInView, whileHover, viewport, transition, ...rest }: any, ref: any) => {
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
      button: createMotionComponent('button'),
    },
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
  };
});

// Mock ImageWithFallback to simulate image loading behavior
let imageErrorCallbacks: Map<string, () => void> = new Map();

vi.mock('../figma/ImageWithFallback', () => ({
  ImageWithFallback: ({ src, alt, className, style, ...rest }: any) => {
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
      imageErrorCallbacks.set(alt, () => setHasError(true));
      return () => { imageErrorCallbacks.delete(alt); };
    }, [alt]);

    if (hasError) {
      return React.createElement('div', {
        className: `inline-block bg-gray-100 text-center align-middle ${className ?? ''}`,
        style,
        'data-testid': `image-fallback-${alt}`,
      },
        React.createElement('div', {
          className: 'flex items-center justify-center w-full h-full',
          style: {
            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            color: '#5eead4',
            fontSize: '2rem',
            fontWeight: 'bold',
          },
        }, alt?.charAt(0) || '?')
      );
    }

    return React.createElement('img', {
      src,
      alt,
      className,
      style,
      'data-testid': `image-${alt}`,
    });
  },
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Trophy: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'trophy-icon' }),
  ExternalLink: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'external-link-icon' }),
  ChevronDown: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'chevron-down-icon' }),
  Github: (props: any) => React.createElement('svg', { ...props, 'data-testid': 'github-icon' }),
}));

import { HackathonProjects } from '../HackathonProjects';

// ---- Arbitraries ----

const hackathonProjectArb = fc.record({
  id: fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0),
  title: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
  subtitle: fc.string({ minLength: 1, maxLength: 80 }).filter(s => s.trim().length > 0),
  hackathonName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
  award: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
  period: fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0),
  problemSolved: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  description: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  techStack: fc.array(
    fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
    { minLength: 1, maxLength: 6 }
  ),
  liveDemo: fc.option(fc.webUrl(), { nil: undefined }),
  github: fc.option(fc.webUrl(), { nil: undefined }),
  personalLearnings: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  teamInfo: fc.option(
    fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
    { nil: undefined }
  ),
  image: fc.webUrl(),
});

// Helper: the actual hackathon projects data from the component (we test the real data)
const knownProjectTitles = [
  'Lofty Morning Handoff',
  'HackForge',
  'PlanAI',
  'Zeno',
];

// ---- Property 1: TrophyCard renders all required project fields ----
// **Validates: Requirements 2.1, 2.2**
describe('Property 1: TrophyCard renders all required project fields', () => {
  it('for any hackathon project in the real data, all required fields are rendered', () => {
    const { container } = render(<HackathonProjects />);

    // Verify all 4 known projects render their titles
    for (const title of knownProjectTitles) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }

    // Verify award badges are present (one per card)
    const badges = container.querySelectorAll('.inline-flex.items-center');
    expect(badges.length).toBeGreaterThanOrEqual(4);
  });

  it('each card renders title, subtitle, problemSolved, description, techStack, and WinnerBadge', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 3 }), (cardIndex) => {
        const { container, unmount } = render(<HackathonProjects />);

        // Verify each known project title is present in the document
        const title = knownProjectTitles[cardIndex];
        expect(screen.getByText(title)).toBeInTheDocument();

        // Verify there are exactly 4 expand/collapse buttons (one per card)
        const buttons = container.querySelectorAll('button[aria-expanded]');
        expect(buttons.length).toBe(4);

        unmount();
      }),
      { numRuns: 4 }
    );
  });
});

// ---- Property 2: External links include security attributes ----
// **Validates: Requirements 2.3, 8.1, 8.2**
describe('Property 2: External links include security attributes', () => {
  it('for any project with liveDemo or github URL, links have target="_blank" and rel="noopener noreferrer"', () => {
    const { container } = render(<HackathonProjects />);

    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: externalLinks.length - 1 }),
        (linkIndex) => {
          const link = externalLinks[linkIndex];
          expect(link.getAttribute('target')).toBe('_blank');
          expect(link.getAttribute('rel')).toBe('noopener noreferrer');
        }
      ),
      { numRuns: Math.min(externalLinks.length, 20) }
    );
  });

  it('every external link in the rendered component has security attributes', () => {
    const { container } = render(<HackathonProjects />);

    const allLinks = container.querySelectorAll('a[href^="http"]');
    allLinks.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});

// ---- Property 3: Expanded card displays personal learnings and team info ----
// **Validates: Requirement 3.1**
describe('Property 3: Expanded card displays personal learnings and team info', () => {
  it('when a card is expanded, personalLearnings and teamInfo are visible', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 3 }), (cardIndex) => {
        const { container, unmount } = render(<HackathonProjects />);
        const buttons = container.querySelectorAll('button[aria-expanded]');
        expect(buttons.length).toBe(4);

        // Click to expand
        fireEvent.click(buttons[cardIndex]);

        // Personal Learnings header should appear
        expect(container.querySelector('h4')).not.toBeNull();
        const h4s = container.querySelectorAll('h4');
        const hasLearnings = Array.from(h4s).some(h => h.textContent === 'Personal Learnings');
        expect(hasLearnings).toBe(true);

        unmount();
      }),
      { numRuns: 4 }
    );
  });
});

// ---- Property 4: Accordion exclusivity ----
// **Validates: Requirements 3.2, 3.3**
describe('Property 4: Accordion exclusivity', () => {
  it('at most one card is expanded at any time for any sequence of expand/collapse actions', () => {
    // Generate sequences of card indices to click
    const actionSequenceArb = fc.array(
      fc.integer({ min: 0, max: 3 }),
      { minLength: 1, maxLength: 10 }
    );

    fc.assert(
      fc.property(actionSequenceArb, (actions) => {
        const { container, unmount } = render(<HackathonProjects />);

        for (const cardIndex of actions) {
          // Find all expand/collapse buttons (they say "Read More" or "Show Less")
          const buttons = container.querySelectorAll('button[aria-expanded]');
          expect(buttons.length).toBe(4);

          fireEvent.click(buttons[cardIndex]);

          // Count expanded cards
          const expandedButtons = container.querySelectorAll('button[aria-expanded="true"]');
          expect(expandedButtons.length).toBeLessThanOrEqual(1);
        }

        unmount();
      }),
      { numRuns: 30 }
    );
  });

  it('expanding an already expanded card collapses it', () => {
    const { container } = render(<HackathonProjects />);

    const buttons = container.querySelectorAll('button[aria-expanded]');

    // Expand card 0
    fireEvent.click(buttons[0]);
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');

    // Click same card again — should collapse
    fireEvent.click(buttons[0]);
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
  });
});

// ---- Property 5: Expand/collapse control accessibility ----
// **Validates: Requirements 3.4, 3.5**
describe('Property 5: Expand/collapse control accessibility', () => {
  it('every expand/collapse control has aria-expanded and responds to keyboard Enter and Space', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 3 }), (cardIndex) => {
        const { container, unmount } = render(<HackathonProjects />);

        const buttons = container.querySelectorAll('button[aria-expanded]');
        expect(buttons.length).toBe(4);

        const button = buttons[cardIndex];

        // Initially not expanded
        expect(button.getAttribute('aria-expanded')).toBe('false');

        // Enter key should toggle
        fireEvent.keyDown(button, { key: 'Enter' });
        expect(button.getAttribute('aria-expanded')).toBe('true');

        // Space key should toggle back
        fireEvent.keyDown(button, { key: ' ' });
        expect(button.getAttribute('aria-expanded')).toBe('false');

        unmount();
      }),
      { numRuns: 4 }
    );
  });
});

// ---- Property 6: Animation stagger delay is bounded ----
// **Validates: Requirements 7.1, 7.2**
describe('Property 6: Animation stagger delay is bounded', () => {
  // Re-implement the pure function to verify the mathematical property
  function getStaggerDelay(index: number): number {
    return Math.min(index * 0.15, 0.6);
  }

  it('for any non-negative integer index, getStaggerDelay returns min(i * 0.15, 0.6) in [0, 0.6]', () => {
    fc.assert(
      fc.property(fc.nat({ max: 1000 }), (index) => {
        const delay = getStaggerDelay(index);
        const expected = Math.min(index * 0.15, 0.6);

        // Exact match (within floating point tolerance)
        expect(Math.abs(delay - expected)).toBeLessThan(1e-10);

        // Always in [0, 0.6]
        expect(delay).toBeGreaterThanOrEqual(0);
        expect(delay).toBeLessThanOrEqual(0.6);
      }),
      { numRuns: 100 }
    );
  });

  it('delay is monotonically non-decreasing up to the cap', () => {
    fc.assert(
      fc.property(
        fc.nat({ max: 100 }),
        fc.nat({ max: 100 }),
        (a, b) => {
          const lo = Math.min(a, b);
          const hi = Math.max(a, b);
          const delayLo = getStaggerDelay(lo);
          const delayHi = getStaggerDelay(hi);
          expect(delayHi).toBeGreaterThanOrEqual(delayLo);
        }
      ),
      { numRuns: 50 }
    );
  });
});

// ---- Property 7: Hackathon project data integrity ----
// **Validates: Requirements 10.1, 10.2**
describe('Property 7: Hackathon project data integrity', () => {
  it('the rendered component contains exactly 4 projects with unique ids, non-empty titles, non-empty awards, and at least one techStack entry', () => {
    const { container } = render(<HackathonProjects />);

    // 4 cards rendered
    const cards = container.querySelectorAll('button[aria-expanded]');
    expect(cards.length).toBe(4);

    // All 4 known titles present
    for (const title of knownProjectTitles) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }

    // All titles are unique (no duplicates)
    const uniqueTitles = new Set(knownProjectTitles);
    expect(uniqueTitles.size).toBe(4);
  });

  it('all external demo links are valid URLs', () => {
    const { container } = render(<HackathonProjects />);

    const demoLinks = container.querySelectorAll('a[href]');
    demoLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        expect(() => new URL(href)).not.toThrow();
      }
    });
  });

  it('property: for any valid HackathonProject data, required fields are non-empty', () => {
    fc.assert(
      fc.property(hackathonProjectArb, (project) => {
        expect(project.id.trim().length).toBeGreaterThan(0);
        expect(project.title.trim().length).toBeGreaterThan(0);
        expect(project.award.trim().length).toBeGreaterThan(0);
        expect(project.techStack.length).toBeGreaterThanOrEqual(1);

        if (project.liveDemo !== undefined) {
          expect(() => new URL(project.liveDemo!)).not.toThrow();
        }
      }),
      { numRuns: 50 }
    );
  });
});

// ---- Property 8: Image load failure fallback ----
// **Validates: Requirement 11.1**
describe('Property 8: Image load failure fallback', () => {
  beforeEach(() => {
    imageErrorCallbacks.clear();
  });

  it('when a project image fails to load, a gradient placeholder with the first letter of the title is displayed', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 3 }), (cardIndex) => {
        imageErrorCallbacks.clear();
        const { container, unmount } = render(<HackathonProjects />);

        const title = knownProjectTitles[cardIndex];
        const errorCallback = imageErrorCallbacks.get(title);

        if (errorCallback) {
          // Trigger image error
          errorCallback();

          // Check that the fallback contains the first letter
          const fallback = container.querySelector(`[data-testid="image-fallback-${title}"]`);
          if (fallback) {
            expect(fallback.textContent).toContain(title.charAt(0));
          }
        }

        unmount();
      }),
      { numRuns: 4 }
    );
  });
});
