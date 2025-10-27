import { useEffect } from "react";

export function SEOHead() {
  useEffect(() => {
    // Set document title
    document.title = "Dipesh Gupta - AI/ML Engineer & Backend Developer | Portfolio";

    // Create or update meta tags
    const metaTags = [
      { name: "description", content: "Portfolio of Dipesh Gupta - AI/ML Engineer and Backend Developer with 4+ years of experience. Specialized in machine learning, cloud architecture, and scalable backend systems. Published IEEE researcher in DeepFake detection." },
      { name: "keywords", content: "AI Engineer, ML Engineer, Backend Developer, Machine Learning, Deep Learning, Python, Java, Cloud Computing, AWS, GCP, Computer Vision, NLP, Software Engineer, IEEE Researcher" },
      { name: "author", content: "Dipesh Gupta" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { property: "og:title", content: "Dipesh Gupta - AI/ML Engineer & Backend Developer" },
      { property: "og:description", content: "Portfolio showcasing AI/ML projects, backend development experience, and research in DeepFake detection. 4+ years of professional experience with Cognizant and Vrize." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop" },
      { property: "og:site_name", content: "Dipesh Gupta Portfolio" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: window.location.href },
      { name: "twitter:title", content: "Dipesh Gupta - AI/ML Engineer & Backend Developer" },
      { name: "twitter:description", content: "AI/ML Engineer with expertise in machine learning, backend development, and cloud architecture. Published IEEE researcher." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop" },
      
      // Additional SEO
      { name: "theme-color", content: "#0F172A" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? "name" : "property";
      const value = name || property;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dipesh Gupta",
      "jobTitle": "AI/ML Engineer & Backend Developer",
      "description": "AI/ML Engineer and Backend Developer with 4+ years of experience in machine learning, cloud architecture, and scalable systems.",
      "url": window.location.href,
      "sameAs": [
        "https://www.linkedin.com/in/dipeshgupta09/",
        "https://github.com/Dipesh30"
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Arizona State University"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "B.P. Poddar Institute of Management and Technology"
        }
      ],
      "knowsAbout": [
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Backend Development",
        "Cloud Computing",
        "Python",
        "Java",
        "Computer Vision",
        "Natural Language Processing"
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, []);

  return null;
}
