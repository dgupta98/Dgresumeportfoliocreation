# Figma Design Prompt — Dipesh Gupta Portfolio Redesign

Redesign Dipesh Gupta's portfolio using the premium dark aesthetic from raxx21/rajesh-portfolio while preserving all of Dipesh's existing content (experience, projects, education, skills, publications, certifications, recommendations, and contact info).

---

## CURRENT vs. TARGET: What's Changing

| Aspect | Your Current Portfolio | Target (Rajesh-Style) |
|--------|----------------------|----------------------|
| **Theme** | Slate-900 gradients, white cards, blue/purple accents | Deep navy-black `#0a0e17`, teal accent `#5eead4` |
| **Cards** | White bg, slate borders, rounded-2xl | Dark bg, dashed SVG borders, corner brackets |
| **Typography** | System/Tailwind defaults, gradient clip-text | Geist font, large bold headings, weight 300–600 |
| **Hero** | Centered text, typing effect, blue gradient badge | Three-column split layout, 3D avatar, ambient glowing orbs |
| **Layout** | Container + cards grid | Full-viewport sections, minimal containers, cinematic spacing |
| **Animations** | Framer Motion (fade/slide) | GSAP ScrollSmoother, text split reveals, magnetic hovers |
| **Sections** | 11 sections (Hero → Footer) | 8 immersive sections + fixed social sidebar |
| **Unique features to KEEP** | Metrics Counter, AI Chat, Publications, Certifications, Recommendations, Trainings, Education | Map into new design language |

---

## SECTION 1: Global Design System & Foundations

> **Prompt:**
>
> Create a design system for a premium dark-themed AI/ML engineer portfolio website with these specifications:
>
> **Color Palette:**
> - Primary Background: `#0a0e17` (deep navy-black)
> - Secondary Background: `#050810` (near-black)
> - Accent Color: `#5eead4` (teal/mint green) — highlights, hover states, emphasis text
> - Secondary Accent: `#14b8a6` (darker teal) — gradients, timeline elements
> - Glow Color: `#22d3ee` (cyan) — ambient light effects, glowing orbs
> - Glow Shadow: `rgba(0, 180, 180, 0.6)` — box-shadow glows
> - Text Primary: `#eae5ec` (warm off-white)
> - Text Secondary: `#adacac` (muted gray)
> - Text Muted: `#ccc` (light gray, nav items)
> - Border/Divider: `#363636` (dark gray)
> - Tag Background: `rgba(255, 255, 255, 0.15)` with border `rgba(255, 255, 255, 0.31)`
> - Card Surface: `rgba(255, 255, 255, 0.03)` — very subtle white tint for card backgrounds
>
> **Typography:**
> - Font Family: **Geist** (sans-serif) for ALL text
> - Hero Name: 60–70px, weight 500, letter-spacing 2px, line-height 55px
> - Hero Subtitle ("Hello! I'm"): 35px, weight 300, letter-spacing 2px, accent color
> - Section Titles: 60–70px, weight 400–500
> - Section Sub-labels: 25px, uppercase, letter-spacing 7px, weight 400, accent color
> - Body Text: 18px, weight 300, line-height 1.7
> - Nav Links: 16px, weight 600, letter-spacing 1px
> - Tags/Pills: 13px, weight 400
> - Metric Numbers: 48px, weight 600
>
> **Layout Grid:**
> - Max content width: 1300px (centered)
> - Full-width sections with centered content containers
> - Responsive breakpoints: 600px, 768px, 900px, 1025px, 1200px, 1400px, 1600px
> - Generous vertical spacing between sections (100px–200px padding)
>
> **Design Tokens:**
> - Border radius for tags/pills: 30px
> - Border radius for images: 8px
> - Border radius for cards: 16px
> - Navigation arrows (circles): 50px diameter
> - Backdrop blur: 8px on glass-morphism elements
> - Transitions: 0.3s–0.5s cubic-bezier(0.4, 0, 0.2, 1)

---

## SECTION 2: Navigation Bar (Fixed Header)

> **Prompt:**
>
> Design a fixed top navigation bar for Dipesh Gupta's dark portfolio:
>
> - **Position:** Fixed at top, full width, z-index 9999, with gradient fade overlay (`linear-gradient(0deg, transparent, #0a0e17 70%)`) — 130px tall
> - **Layout:** Three-column with `justify-content: space-between`
>   - **Left:** Logo initials "DG" — 18px, bold, weight 700, letter-spacing 0.2px
>   - **Center:** Email: "dipeshgupta2010@gmail.com" — 16px, weight 500, letter-spacing 1px (hidden on mobile, visible at 900px+)
>   - **Right:** Nav links in horizontal row — "ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT" — 14px, weight 600, spaced 50px apart, letter-spacing 1px
> - **Padding:** 35px vertical on desktop, 20px on mobile
> - **Hover Effect:** Letters shift upward revealing duplicate text from below (text-reveal animation)
> - **Mobile:** Hamburger menu or vertical stack, becoming horizontal at 768px+
> - **Style:** Fully transparent background, no border

---

## SECTION 3: Hero / Landing Section (Full Viewport)

> **Prompt:**
>
> Design a dramatic full-viewport (100vh) hero section for an AI/ML Engineer portfolio:
>
> **Layout (Desktop 1025px+):**
> - Three-column composition:
>   - **Left side (30%):** Introduction text — vertically centered
>     - Badge: "Published IEEE Researcher" with sparkle icon — small pill shape, `rgba(94,234,212,0.2)` background, teal border, 14px text
>     - Small teal text "Hello! I'm" (35px, weight 300, accent color `#5eead4`, letter-spacing 2px)
>     - Large name in two lines: "DIPESH" / "GUPTA" — (60px, weight 500, white, letter-spacing 2px, line-height 55px)
>   - **Center:** Space for a 3D character/avatar or stylized portrait (~80% viewport height). Below: subtle cyan glow rim (`#22d3ee`, blurred 50px, elliptical)
>   - **Right side (30%):** Role descriptor — vertically centered
>     - Typing/rotating text cycling through: "AI/ML Engineer", "Backend Developer", "IEEE Researcher", "Cloud Architect", "Full Stack Developer"
>     - Each role at 45px, weight 600, gradient text (`from-blue-400 via-purple-400 to-pink-400` or use teal `#5eead4`)
>
> **Below the name (centered):**
> - Bio paragraph: "Published IEEE researcher with 4+ years of experience in backend development, cloud computing, and machine learning systems. Proven track record of delivering measurable results with expertise in Python, Java, microservices architecture, and deep learning frameworks." — 18px, weight 300, `#adacac`, max-width 700px
>
> **CTA Buttons (centered):**
> - "Download Resume" — filled gradient button (teal to cyan)
> - "View Projects" — outline button with teal border
>
> **Ambient Effects:**
> - Top-left: Large blurred cyan orb (300px, `#22d3ee`, blur 60px, slow rotation)
> - Bottom-right: Blurred purple orb (250px, `#8b5cf6`, blur 50px)
> - Mid-left: Smaller cyan orb (200px, `#06b6d4`, blur 40px, floating animation)
>
> **Social Icons (Fixed Left Side):**
> - Vertical stack: Email (Mail), Phone, LinkedIn, GitHub — 4 icons
> - Small icon size (~18px), spaced vertically, fixed position throughout scroll
> - Magnetic hover effect (icons follow cursor slightly)
>
> **Resume Button (Fixed Bottom-Right):**
> - "RESUME" text + document icon, fixed position

---

## SECTION 4: Metrics Counter Bar

> **Prompt:**
>
> Design a horizontal metrics/stats bar that sits between the hero and about sections:
>
> **Layout:** Full-width dark strip with 4 metric cards in a row
> - Background: slightly lighter than main (`#0f1520`) or subtle gradient
> - Cards use glass-morphism: `rgba(255,255,255,0.03)` background, subtle border
>
> **Metrics (from Dipesh's actual data):**
> 1. **"8M+"** — "Records Migrated" — with TrendingUp icon
> 2. **"30%"** — "Performance Boost" — with Zap icon
> 3. **"133M+"** — "Records Architected" — with Users icon
> 4. **"IEEE"** — "Published Research" — with Award icon
>
> **Styling:**
> - Number: 48px, weight 600, white
> - Label: 14px, weight 300, `#adacac`
> - Icon: 24px, teal accent color, inside a subtle teal-tinted circle
> - Animate numbers counting up on scroll-into-view
> - Cards have subtle hover lift (y: -5px)

---

## SECTION 5: About Me Section

> **Prompt:**
>
> Design an "About Me" section for Dipesh's dark portfolio:
>
> **Layout:** Two-column on desktop (50/50 split):
> - **Left column:** Three paragraphs of bio text
> - **Right column:** 2x2 grid of highlight cards
>
> **Section Label:** "ABOUT ME" — 25px, uppercase, letter-spacing 7px, weight 400, teal `#5eead4`
>
> **Left Column Content (actual text):**
> - Paragraph 1: "I'm an AI/ML engineer and backend developer with a passion for building scalable, data-driven solutions. Currently pursuing my Master's in Software Engineering at Arizona State University, I bring over 4 years of industry experience in delivering high-impact projects."
> - Paragraph 2: "My expertise spans across machine learning systems, cloud migrations, microservices architecture, and data infrastructure. I've led enterprise-scale migrations, architected solutions handling 133M+ records, and published research in deep learning."
> - Paragraph 3: "I'm passionate about leveraging AI and scalable backend systems to solve complex problems and drive measurable business impact."
> - Style: 18px, weight 300, `#adacac`, line-height 1.8, text-justify
>
> **Right Column — Highlight Cards (2x2 grid):**
> Each card: dark glass-morphism surface, teal-tinted icon, subtle border
> 1. Icon: TrendingUp → "8M+ Records" / "Zero-downtime cloud migration"
> 2. Icon: Zap → "30% Faster" / "Database performance improvement"
> 3. Icon: Users → "133M+ Records" / "Data infrastructure architected"
> 4. Icon: Award → "IEEE Published" / "Research in DeepFake Detection"
>
> **Card Style:** `rgba(255,255,255,0.05)` background, 1px `#363636` border, 16px radius, teal icon circle, number in white 20px bold, description in `#adacac` 13px
>
> **Animation:** Left column slides in from left, right cards scale up one by one on scroll

---

## SECTION 6: "What I Do" — Skills & Expertise Section

> **Prompt:**
>
> Design a "What I Do" / Skills section combining the interactive card design with Dipesh's actual skill set:
>
> **Layout:** Two-column — large heading left, expandable skill cards right
>
> **Left Column (40%):**
> - Large heading: "WHAT I DO" — calc(4vw + 25px), weight 600
> - "DO" in teal accent `#5eead4`
>
> **Right Column (60%):** Five expandable skill category cards stacked vertically:
>
> Each card has:
> - Dashed SVG borders (strokeDasharray 6,6), corner bracket accents (10px white L-shapes)
> - Title + icon + expand/collapse arrow
> - Tags in pills when collapsed; full description + all tags when expanded
> - Hover: card expands, siblings shrink
>
> **Card 1 — Programming Languages:**
> - Icon: Code → Tags: Python, Java, C
> - Description: "Core programming languages with expertise in Python for ML/AI, Java for enterprise applications, and C for system-level programming."
>
> **Card 2 — Frameworks & Libraries:**
> - Icon: Brain → Tags: Spring Boot, Flask, Pandas, NumPy, OpenCV, PyTorch, TensorFlow, scikit-learn
> - Description: "Comprehensive experience with modern frameworks for web development, data processing, and machine learning model development."
>
> **Card 3 — Tools & Platforms:**
> - Icon: Wrench → Tags: Docker, Jenkins, Git, GitLab, GCP, AWS, Tableau, Power BI, IBM Sterling OMS, Selenium
> - Description: "Proficient in DevOps tools, cloud platforms, data visualization tools, and automation frameworks."
>
> **Card 4 — Databases:**
> - Icon: Database → Tags: SQL, PostgreSQL, NoSQL
>
> **Card 5 — Concepts & Technologies:**
> - Icon: Award → Tags: Machine Learning, Deep Learning, Computer Vision, CNN, NLP, REST API, Microservices, Cloud Migration, Data Analytics, ETL, Agile/Scrum, CI/CD, System Design
>
> **Certifications Sub-section (below cards):**
> - Sub-heading: "Professional Certifications" — 24px, gradient text
> - Three certification cards in a row:
>   1. "Next Generation Platform for IBM Sterling OMS on Cloud Specialist" — IBM — 09/2021
>   2. "Advanced AI and Deep Learning" — Board Infinity — 12/2020–05/2021
>   3. "Data Scientist with Python Track" — DataCamp — 10/2020–12/2020
> - Each card: dark surface, dashed border top accent, title + issuer + date, expandable to show skills covered
>
> **Tag Style:** `rgba(255,255,255,0.15)` bg, `rgba(255,255,255,0.31)` border, 30px radius, 13px font

---

## SECTION 7: Career & Experience Timeline

> **Prompt:**
>
> Design a career timeline for Dipesh Gupta's professional experience:
>
> **Heading:**
> - "My career &" / "experience" on two lines — 70px, weight 400
> - Gradient text: `linear-gradient(0deg, #0d9488, #ffffff)` — teal at bottom to white at top
> - Sub-text: "My journey in building scalable solutions" — 18px, `#adacac`
>
> **Timeline Layout:**
> - Centered vertical line (3px wide) with gradient: `linear-gradient(to top, #14b8a6 20%, #5eead4 50%, transparent 95%)`
> - Pulsing glow dot at bottom (10px, `#14b8a6`, triple-layer box-shadow)
> - Line animates from 0% to full height on scroll
>
> **Experience Entries (4 entries, using Dipesh's actual data):**
>
> Each entry: horizontal row split by center timeline line
> - **Left side:** Role title + Company + Duration badge
> - **Right side:** Key achievements as bullet points + tech tags
>
> **Entry 1 — Cognizant (Latest, top):**
> - Role: "Product Development Specialist"
> - Company: "Cognizant" (in teal `#5eead4`) + "Kolkata, India"
> - Period: "11/2022 – 07/2025" (2 yrs 9 mos)
> - Key achievements (show 2–3 condensed):
>   - Led enterprise cloud migration (IBM Sterling v9.4 → v10 SaaS), 8M records, zero downtime
>   - Architected microservices data archival for 133M+ records, 30% query performance boost
>   - Built data lifecycle management automating 20M+ records/year, 25% storage cost reduction
> - Tags: Cloud Migration, Microservices, IBM Sterling OMS, Data Architecture
>
> **Entry 2 — Vrize:**
> - Role: "Data Analyst"
> - Company: "Vrize" (teal) + "Bangalore, India"
> - Period: "04/2021 – 11/2022" (1 yr 8 mos)
> - Key: Developed order management modules (1M+ transactions), 10+ analytics dashboards, 18% operational efficiency improvement
> - Tags: Data Analytics, Python, SQL, Power BI
>
> **Entry 3 — IntelliNature:**
> - Role: "Data Scientist Consultant"
> - Company: "IntelliNature" (teal) + "Dehradun, India"
> - Period: "03/2021 – 04/2021" (Part-time)
> - Key: Custom web scraping automation, data pipeline for dynamic page structures
> - Tags: Python, Web Scraping, BeautifulSoup, Selenium
>
> **Entry 4 — Amazon:**
> - Role: "Virtual Customer Service"
> - Company: "Amazon" (teal) + "Kolkata, India"
> - Period: "09/2020 – 12/2020"
> - Key: 100+ daily queries, CRM proficiency, first-contact resolution improvement
> - Tags: Customer Service, CRM Systems
>
> **Mobile:** Single column, timeline on far left, content stacked vertically

---

## SECTION 8: Projects & Publications Carousel

> **Prompt:**
>
> Design a projects showcase with horizontal carousel + publication card for Dipesh's work:
>
> **Section Title:**
> - "Projects &" / "Publications" — 70px, weight 500, "Publications" in teal `#5eead4`
> - Sub-text: "Innovative solutions and research contributions" — 18px, `#adacac`
>
> **Carousel — 6 Project Slides:**
>
> Each slide: two-column (info left, image right)
> - Left: project number (01–06, 60px, opacity 0.3) + title (28px) + subtitle + period + summary + tech tags
> - Right: project image (8px radius, max-height 400px)
>
> **Slide 1:** "Agent AI Workflow Automation" — Personal Project — 01/2025
> - "Intelligent n8n-powered system automating job applications with 80% time reduction."
> - Tags: n8n, AI Agents, Automation, LinkedIn API, NLP, Python
>
> **Slide 2:** "Fruit Quality Classification" — Board Infinity Certification — 04/2021
> - "CNN-based model achieving 96% accuracy in classifying 6 fruit types and freshness."
> - Tags: Python, PyTorch, CNN, ResNet-50, Flask, Computer Vision
>
> **Slide 3:** "Real-Time Face Mask Detection" — Personal Project — 11/2020
> - "Real-time MobileNetV2 system detecting mask compliance at 94% accuracy, 30 FPS."
> - Tags: Python, OpenCV, Deep Learning, MobileNetV2, Real-time Processing
>
> **Slide 4:** "Stock Market Prediction System" — ML Project — 08/2021
> - "LSTM & Transformer model forecasting market trends with 85% directional accuracy."
> - Tags: Python, LSTM, Transformers, Time Series, TensorFlow, Pandas
>
> **Slide 5:** "Amazon Review Sentiment Analysis" — NLP Project — 06/2021
> - "BERT-powered multi-aspect sentiment analysis achieving 92% accuracy on 50K+ reviews."
> - Tags: Python, NLP, BERT, Sentiment Analysis, Deep Learning, scikit-learn
>
> **Slide 6:** "Digit Detection in Audio Signals" — Speech Recognition — 03/2021
> - "MFCC + CNN system recognizing spoken digits with 89% accuracy across accents."
> - Tags: Python, Audio Processing, CNN, MFCC, Signal Processing, scikit-learn
>
> **Navigation:** Glass-morphism circular arrows (50px), dot indicators, same styling as design system
>
> **Publication Card (below carousel):**
> - Full-width special card with BookOpen icon
> - Title: "DeepFake Detection Using Inception-ResNet"
> - Venue: "IEEE ICACFCT 2021" • Conference Publication • 2021
> - Description + external link icon to IEEE paper
> - "Research Publication" badge in teal
> - Card style: dark glass surface, prominent teal top border, external link arrow

---

## SECTION 9: Education Section

> **Prompt:**
>
> Design an education section with two expandable timeline cards:
>
> **Section Title:** "Education" — 60px, gradient text, centered
> **Sub-text:** "Academic foundation and continuous learning"
>
> **Layout:** Vertical stack of 2 education cards, centered (max-width 900px)
>
> **Card 1 — Arizona State University (Current):**
> - GraduationCap icon + "Master of Science in Software Engineering"
> - Institution: "Arizona State University" — teal accent
> - Location: Arizona, US • Period: 08/2025 – 05/2027
> - GPA: 4.0/4.0 • Status badge: "In Progress" (green-tinted pill)
> - Expandable section:
>   - Relevant Coursework tags: Advanced Software Engineering, Distributed Systems, Machine Learning Systems, Cloud Computing Architecture, Software Testing & QA
>   - Key Highlights: Maintaining perfect 4.0 GPA, Focus on AI/ML and distributed systems, Graduate research in scalable ML infrastructure
>
> **Card 2 — B. P. Poddar Institute:**
> - "Bachelor of Technology in Electrical Engineering"
> - Location: West Bengal, India • Period: 08/2016 – 06/2020
> - GPA: 3.0/4.0 • Status: "Completed" (blue-tinted pill)
> - Coursework: Data Structures & Algorithms, DBMS, Computer Networks, Signal Processing, Control Systems
> - Highlights: Published IEEE research, Multiple ML/AI certifications, Foundation in programming and system design
>
> **Card Style:** Dark glass surface (`rgba(255,255,255,0.03)`), `#363636` border, teal gradient top accent bar, expand/collapse with chevron animation
> **Dashed border accents** on cards matching the "What I Do" pattern for visual consistency

---

## SECTION 10: Contact / Footer Section

> **Prompt:**
>
> Design a contact section for Dipesh Gupta:
>
> **Section Title:** "GET IN TOUCH" — 60px, weight 400, uppercase
> **Sub-text:** "I'm currently seeking AI/ML engineering or backend development roles. Feel free to reach out if you'd like to discuss opportunities or collaborations!" — 18px, `#adacac`, centered, max-width 600px
>
> **Three-Column Layout:**
>
> - **Column 1 — Contact Details:**
>   - "Email" label → dipeshgupta2010@gmail.com
>   - "Phone" label → +1 (623) 432-6768
>   - "Location" label → Based in Phoenix, Arizona
>
> - **Column 2 — Social Links:**
>   - "Social" label
>   - LinkedIn: linkedin.com/in/dipeshgupta09 (with ↗ icon)
>   - GitHub: github.com/Dipesh30 (with ↗ icon)
>   - Email link
>   - Each: 22px font, bottom border 1px `#ccc`, hover → teal
>
> - **Column 3 — CTA & Credits:**
>   - "Download Resume" button (teal gradient, prominent)
>   - "Send me an email" button (outline)
>   - "Designed and Developed by Dipesh Gupta" — 20px, name in teal `#5eead4`
>   - "© 2025" — 16px, opacity 0.5
>
> **Mobile:** Single column, 40px gap between sections

---

## SECTION 11: Animations & Micro-Interactions Reference

> **Prompt:**
>
> Animation reference sheet for developer handoff:
>
> 1. **Smooth Scroll:** GSAP ScrollSmoother — smooth: 1.7, speed: 1.7
> 2. **Text Split Reveal:** Headlines split into words/lines, slide up with opacity on scroll trigger
> 3. **Nav Hover:** Letters shift upward, duplicate text revealed from below
> 4. **Custom Cursor:** Circular follower that changes size on interactive elements
> 5. **Loading Screen:** Page loader animation before content reveal
> 6. **Metrics Counter:** Numbers animate counting up on scroll-into-view
> 7. **Career Timeline:** Vertical line grows on scroll, dot pulses with glow
> 8. **Skill Cards:** Expand/collapse with dashed border animation, corner brackets fade in
> 9. **Project Carousel:** Smooth translateX with cubic-bezier easing
> 10. **Social Icons:** Magnetic hover — icons subtly follow cursor
> 11. **Ambient Orbs:** Rotating blurred spheres (cyan, purple) creating atmospheric lighting
> 12. **3D Character/Avatar:** Interactive Three.js model responding to mouse (or stylized portrait)
> 13. **Gradient Fades:** Section edges fade into background color
> 14. **Card Hover:** 3D tilt effect (rotateX/Y) on project and skill cards
> 15. **Typing Effect:** Hero roles cycle with typing/deleting animation
> 16. **Badge Shimmer:** "IEEE Researcher" badge has a sweeping white highlight animation
> 17. **Scroll Progress:** Thin progress bar at top of viewport showing scroll position

---

## SECTION 12: Responsive Design Notes

> **Prompt:**
>
> Responsive breakpoints:
>
> - **1600px+:** Full luxury layout, max typography, wide spacing
> - **1200–1600px:** Slightly reduced sizes, tighter nav gaps
> - **1025–1200px:** Desktop threshold — 3D avatar becomes fixed, About goes full viewport
> - **900–1025px:** Tablet — Skills stack vertically, Career single-column, Carousel stacks
> - **600–900px:** Large mobile — reduced headings, center email hidden, single-column
> - **< 600px:** Small mobile — 25px edge padding, compact type, everything stacked
>
> Key behaviors:
> - 3D avatar: fixed on desktop (1025px+), inline on mobile
> - Social icons sidebar: fixed left on all sizes
> - Navigation: hamburger on mobile, horizontal on 768px+
> - Section containers: 1300px → 1200px → 900px → 500px → fluid
> - Metrics bar: 4-across → 2x2 grid → vertical stack
> - Certifications: 3-across → 2-across → stacked

---

## How to Use These Prompts

1. **Start with Section 1** — establish design system in Figma (colors, type, spacing)
2. **Work through Sections 2–10** one at a time as separate frames
3. **Use Section 11** when adding prototyping interactions
4. **Use Section 12** to create responsive variants
5. **For the 3D avatar:** use ReadyPlayerMe or a stylized portrait with creative masking

> **Tip:** Feed one section at a time into Figma AI for best results. All content is already personalized with Dipesh's actual data — no placeholder text to replace.

---

## CONTENT SECTIONS THAT EXIST IN YOUR CURRENT PORTFOLIO BUT NEED DESIGN ADAPTATION

These sections exist in your current portfolio and should be mapped into the new design:

| Your Current Section | How to Map Into New Design |
|---------------------|---------------------------|
| **MetricsCounter** | → Section 4 (Metrics Bar) — already included above |
| **Recommendations** | → Add as a testimonial marquee/slider between Projects and Education |
| **TrainingsVolunteer** | → Merge into Education section as a sub-section or add after Education |
| **AIChatAssistant** | → Keep as floating widget (bottom-right), style with dark glass theme |
| **ScrollProgress** | → Keep as thin teal progress bar at viewport top |
| **FloatingShapes** | → Replace with ambient glowing orbs (cyan + purple) |
| **MouseFollower** | → Replace with custom circular cursor (teal outline) |
| **PageLoader** | → Keep, restyle with dark theme + teal accent animation |
| **EasterEggs** | → Keep as-is (hidden feature) |

> **Optional Prompt for Recommendations Section:**
>
> Design a testimonial/recommendations marquee section between Projects and Education. Horizontal auto-scrolling cards showing quotes from colleagues. Each card: dark glass surface, quote text in 16px italic `#eae5ec`, author name in teal, company in `#adacac`. Cards slide continuously left with pause on hover.