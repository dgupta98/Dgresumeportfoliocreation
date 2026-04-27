import { motion } from "motion/react";
import { useRef } from "react";

interface ExperienceData {
  company: string;
  location: string;
  position: string;
  period: string;
  duration?: string;
  type?: string;
  achievements: string[];
  tags: string[];
}

const experiences: ExperienceData[] = [
  {
    company: "Cognizant",
    location: "Kolkata, India",
    position: "Product Development Specialist",
    period: "11/2022 – 07/2025",
    duration: "2 yrs 9 mos",
    type: "Full-time",
    achievements: [
      "Led enterprise cloud migration (IBM Sterling v9.4 → v10 SaaS), migrating 8M+ records with zero downtime across production environments",
      "Architected microservices-based data archival system for 133M+ records, achieving 30% query performance boost through optimized indexing and partitioning strategies",
      "Built data lifecycle management framework automating purge/archive of 20M+ records/year, reducing storage costs by 25%",
      "Designed and implemented CI/CD pipelines using Jenkins and GitLab for automated deployments across multi-tenant cloud environments",
      "Collaborated with cross-functional teams of 15+ engineers to deliver enterprise solutions on schedule",
    ],
    tags: ["Cloud Migration", "Microservices", "IBM Sterling OMS", "Data Architecture", "Spring Boot", "Java", "CI/CD"],
  },
  {
    company: "Vrize",
    location: "Bangalore, India",
    position: "Data Analyst",
    period: "04/2021 – 11/2022",
    duration: "1 yr 8 mos",
    type: "Full-time",
    achievements: [
      "Developed order management modules handling 1M+ transactions with real-time tracking and analytics capabilities",
      "Created 10+ interactive analytics dashboards using Power BI and Tableau for executive decision-making",
      "Achieved 18% operational efficiency improvement through data-driven process optimization and automated reporting pipelines",
      "Built Python-based ETL pipelines for data extraction, transformation, and loading across multiple data sources",
    ],
    tags: ["Data Analytics", "Python", "SQL", "Power BI", "Tableau", "ETL"],
  },
  {
    company: "IntelliNature",
    location: "Dehradun, India",
    position: "Data Scientist Consultant",
    period: "03/2021 – 04/2021",
    duration: "Part-time",
    achievements: [
      "Developed custom web scraping automation framework for extracting structured data from dynamic web pages",
      "Built robust data pipeline handling various page structures with error recovery and retry mechanisms",
      "Delivered clean, analysis-ready datasets that enabled the client's research initiatives",
    ],
    tags: ["Python", "Web Scraping", "BeautifulSoup", "Selenium", "Data Pipeline"],
  },
  {
    company: "Amazon",
    location: "Kolkata, India",
    position: "Virtual Customer Service",
    period: "09/2020 – 12/2020",
    achievements: [
      "Resolved 100+ daily customer queries across multiple channels with high satisfaction ratings",
      "Demonstrated CRM proficiency with Amazon's internal tools and ticketing systems",
      "Improved first-contact resolution rates through efficient problem diagnosis and escalation protocols",
    ],
    tags: ["Customer Service", "CRM Systems", "Problem Solving"],
  },
];

export function Experience() {
  const timelineRef = useRef(null);

  return (
    <section
      id="experience"
      style={{
        background: "#FAFAF8",
        padding: "12px 0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Heading */}
        <motion.div
          style={{ marginBottom: 40 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#1A1A1A",
          }}>
            My career &amp; experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical line on the left */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 0,
              bottom: 0,
              width: 2,
              background: "#E8E5E0",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {experiences.map((exp, index) => (
              <TimelineEntry key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ exp, index }: { exp: ExperienceData; index: number }) {
  return (
    <motion.div
      style={{ position: "relative" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Amber dot on the timeline */}
      <div
        style={{
          position: "absolute",
          left: -34,
          top: 28,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#92400E",
          border: "3px solid #FAFAF8",
          zIndex: 1,
        }}
      />

      {/* Card */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 12,
          padding: 28,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {/* Company name */}
        <span style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#92400E",
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
        }}>
          {exp.company}
        </span>

        {/* Role */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 600,
          color: "#1A1A1A",
          margin: "6px 0 4px",
          lineHeight: 1.3,
        }}>
          {exp.position}
        </h3>

        {/* Period & location */}
        <div style={{
          fontSize: 14,
          color: "#8A8A8A",
          marginBottom: 16,
          display: "flex",
          flexWrap: "wrap" as const,
          alignItems: "center",
          gap: 8,
        }}>
          <span>{exp.period}</span>
          {exp.duration && (
            <>
              <span style={{ color: "#E8E5E0" }}>·</span>
              <span>{exp.duration}</span>
            </>
          )}
          {exp.type && (
            <>
              <span style={{ color: "#E8E5E0" }}>·</span>
              <span>{exp.type}</span>
            </>
          )}
          <span style={{ color: "#E8E5E0" }}>·</span>
          <span>{exp.location}</span>
        </div>

        {/* Achievements */}
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px",
          display: "flex",
          flexDirection: "column" as const,
          gap: 10,
        }}>
          {exp.achievements.map((ach, i) => (
            <li
              key={i}
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                lineHeight: 1.65,
                display: "flex",
                gap: 10,
              }}
            >
              <span style={{
                color: "#92400E",
                flexShrink: 0,
                marginTop: 9,
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#92400E",
                display: "inline-block",
              }} />
              <span>{ach}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
          {exp.tags.map((tag, ti) => (
            <span key={ti} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
