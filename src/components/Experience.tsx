import { Briefcase } from "lucide-react";
import { motion, useInView } from "motion/react";
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
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            fontWeight: 400,
            lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
            background: "linear-gradient(0deg, #14b8a6, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            My career &<br />experience
          </h2>
          <p style={{ fontSize: "18px", color: "#adacac", marginTop: "16px" }}>
            My journey in building scalable solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-[1100px] mx-auto">
          {/* Center line - desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]">
            <motion.div
              className="w-full h-full origin-top"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, #5eead4 10%, #14b8a6 80%, transparent 95%)",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {/* Pulsing dot at bottom */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full"
              style={{
                background: "#14b8a6",
                boxShadow: "0 0 10px rgba(20,184,166,0.6), 0 0 20px rgba(20,184,166,0.3), 0 0 40px rgba(20,184,166,0.15)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full h-full origin-top"
              style={{ background: "linear-gradient(to bottom, #5eead4, #14b8a6, transparent)" }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => (
              <TimelineEntry key={exp.company} exp={exp} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ exp, index, isLeft }: { exp: ExperienceData; index: number; isLeft: boolean }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Desktop layout - two sides */}
      <div
        className="hidden md:flex items-start"
      >
        {/* Left content */}
        <div className={`flex-1 min-w-0 ${isLeft ? "" : "order-3"}`}>
          <div className={`${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
            {/* Role info card */}
            <div
              className="rounded-2xl p-6 dashed-card corner-brackets"
              style={{
                background: "rgba(255,255,255,0.03)",
                transition: "all 0.3s",
              }}
            >
              <h3 style={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#eae5ec",
                marginBottom: "6px",
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {exp.position}
              </h3>
              <div className={`flex flex-wrap items-center gap-2 mb-3 ${isLeft ? "justify-end" : ""}`}>
                <span style={{ color: "#5eead4", fontWeight: 500, fontSize: "16px" }}>{exp.company}</span>
                <span style={{ color: "#363636" }}>&bull;</span>
                <span style={{ fontSize: "13px", color: "#adacac" }}>{exp.location}</span>
              </div>

              {/* Period badge */}
              <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? "justify-end" : ""}`}>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{
                    fontSize: "12px",
                    background: "rgba(94,234,212,0.1)",
                    border: "1px solid rgba(94,234,212,0.2)",
                    color: "#5eead4",
                  }}
                >
                  {exp.period}
                </span>
                {exp.duration && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full"
                    style={{
                      fontSize: "12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid #363636",
                      color: "#adacac",
                    }}
                  >
                    {exp.duration}
                  </span>
                )}
                {exp.type && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full"
                    style={{
                      fontSize: "12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid #363636",
                      color: "#adacac",
                    }}
                  >
                    {exp.type}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : ""}`}>
                {exp.tags.map((tag, ti) => (
                  <span key={ti} className="tag-pill whitespace-nowrap" style={{ color: "#eae5ec", fontSize: "12px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center dot */}
        <div className="w-[60px] flex-shrink-0 flex justify-center relative order-2">
          <div
            className="w-5 h-5 rounded-full z-10 mt-6 flex items-center justify-center"
            style={{
              background: "#0a0e17",
              border: "3px solid #5eead4",
              boxShadow: "0 0 15px rgba(94,234,212,0.4)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#5eead4" }} />
          </div>
        </div>

        {/* Right content */}
        <div className={`flex-1 min-w-0 ${isLeft ? "" : "order-1"}`}>
          <div className={`${isLeft ? "text-left pl-8" : "text-right pr-8"}`}>
            {/* Achievements card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className={`flex items-center gap-2 mb-4 ${isLeft ? "" : "justify-end"}`}>
                <Briefcase className="h-4 w-4" style={{ color: "#5eead4" }} />
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#5eead4" }}>
                  Key Achievements
                </span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((ach, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`flex gap-2.5 ${isLeft ? "" : "flex-row-reverse text-right"}`}
                    style={{ fontSize: "14px", color: "#adacac", lineHeight: 1.7 }}
                  >
                    <span className="text-[#5eead4] mt-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                    </span>
                    <span>{ach}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout - single column */}
      <div className="md:hidden pl-10 relative">
        {/* Mobile dot */}
        <div
          className="absolute left-[9px] top-6 w-[14px] h-[14px] rounded-full z-10 flex items-center justify-center"
          style={{
            background: "#0a0e17",
            border: "2px solid #5eead4",
            boxShadow: "0 0 10px rgba(94,234,212,0.3)",
          }}
        >
          <div className="w-1 h-1 rounded-full" style={{ background: "#5eead4" }} />
        </div>

        <div
          className="rounded-2xl p-5 dashed-card corner-brackets"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <h3 style={{
            fontSize: "20px",
            fontWeight: 500,
            color: "#eae5ec",
            marginBottom: "4px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {exp.position}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span style={{ color: "#5eead4", fontWeight: 500, fontSize: "15px" }}>{exp.company}</span>
            <span style={{ color: "#363636" }}>&bull;</span>
            <span style={{ fontSize: "13px", color: "#adacac" }}>{exp.location}</span>
          </div>

          {/* Period badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="px-3 py-1 rounded-full"
              style={{
                fontSize: "12px",
                background: "rgba(94,234,212,0.1)",
                border: "1px solid rgba(94,234,212,0.2)",
                color: "#5eead4",
              }}
            >
              {exp.period} {exp.duration && `(${exp.duration})`}
            </span>
            {exp.type && (
              <span
                className="px-3 py-1 rounded-full"
                style={{ fontSize: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid #363636", color: "#adacac" }}
              >
                {exp.type}
              </span>
            )}
          </div>

          {/* Achievements */}
          <div style={{ borderTop: "1px solid #363636", paddingTop: "12px", marginBottom: "12px" }}>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-3.5 w-3.5" style={{ color: "#5eead4" }} />
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#5eead4" }}>
                Key Achievements
              </span>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((ach, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: "13px", color: "#adacac", lineHeight: 1.6 }}>
                  <span className="text-[#5eead4] mt-1.5 flex-shrink-0">
                    <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                  </span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, ti) => (
              <span key={ti} className="tag-pill" style={{ color: "#adacac", fontSize: "11px" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}