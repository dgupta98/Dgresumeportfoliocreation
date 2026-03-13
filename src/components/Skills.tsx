import { Code, Database, Wrench, Brain, Award, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  period: string;
  skills?: string[];
}

export function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(0);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C"],
      description: "Core programming languages with expertise in Python for ML/AI, Java for enterprise applications, and C for system-level programming.",
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: ["Spring Boot", "Flask", "Pandas", "NumPy", "OpenCV", "PyTorch", "TensorFlow", "scikit-learn"],
      description: "Comprehensive experience with modern frameworks for web development, data processing, and machine learning model development.",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Docker", "Jenkins", "Git", "GitLab", "GCP", "AWS", "Tableau", "Power BI", "IBM Sterling OMS", "Selenium"],
      description: "Proficient in DevOps tools, cloud platforms, data visualization tools, and automation frameworks.",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "PostgreSQL", "NoSQL"],
      description: "Expertise in relational and NoSQL databases for efficient data storage, retrieval, and management at scale.",
    },
    {
      title: "Concepts & Technologies",
      icon: Award,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "CNN", "NLP", "REST API", "Microservices", "Cloud Migration", "Data Analytics", "ETL", "Agile/Scrum", "CI/CD", "System Design"],
      description: "Strong foundation in AI/ML concepts, software architecture patterns, and modern development methodologies.",
    },
  ];

  const certifications: Certification[] = [
    {
      title: "Next Generation Platform for IBM Sterling Order Management on Cloud Specialist",
      issuer: "IBM",
      period: "09/2021",
      skills: ["IBM Sterling OMS", "Cloud Migration", "Order Management", "Enterprise Systems"],
    },
    {
      title: "Advanced AI and Deep Learning",
      issuer: "Board Infinity",
      period: "12/2020 - 05/2021",
      skills: ["Deep Learning", "Neural Networks", "CNN", "Computer Vision", "PyTorch"],
    },
    {
      title: "Data Scientist with Python Track",
      issuer: "DataCamp",
      period: "10/2020 - 12/2020",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Machine Learning"],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 mb-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2
              style={{
                fontSize: "clamp(40px, calc(4vw + 25px), 80px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#eae5ec",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              WHAT I{" "}
              <span style={{ color: "#5eead4" }}>DO</span>
            </h2>
          </motion.div>

          {/* Right - Skill Cards */}
          <div className="space-y-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedSkill === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div
                    className="relative rounded-2xl cursor-pointer overflow-hidden dashed-card corner-brackets"
                    style={{
                      background: isExpanded ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                      transition: "all 0.3s",
                    }}
                    onClick={() => setExpandedSkill(isExpanded ? null : index)}
                  >
                    {/* Header */}
                    <div className="p-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                        >
                          <Icon className="h-5 w-5" style={{ color: "#5eead4" }} />
                        </div>
                        <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#eae5ec" }}>
                          {category.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Collapsed tags */}
                        {!isExpanded && (
                          <div className="hidden sm:flex flex-wrap gap-2">
                            {category.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="tag-pill" style={{ color: "#adacac" }}>
                                {skill}
                              </span>
                            ))}
                            {category.skills.length > 3 && (
                              <span className="tag-pill" style={{ color: "#5eead4" }}>
                                +{category.skills.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ color: "#adacac" }}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <div style={{ borderTop: "1px solid #363636", paddingTop: "16px" }}>
                              <p style={{ fontSize: "14px", color: "#adacac", lineHeight: 1.7, marginBottom: "16px" }}>
                                {category.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, si) => (
                                  <motion.span
                                    key={si}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: si * 0.03 }}
                                    className="tag-pill"
                                    style={{ color: "#eae5ec" }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            className="text-center mb-8"
            style={{
              fontSize: "24px",
              background: "linear-gradient(135deg, #5eead4, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="rounded-2xl cursor-pointer overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #363636",
                    borderTop: "2px dashed #5eead4",
                  }}
                  onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#5eead4" }} />
                          <h4 style={{ fontSize: "15px", fontWeight: 500, color: "#eae5ec", lineHeight: 1.4 }}>
                            {cert.title}
                          </h4>
                        </div>
                        <p style={{ fontSize: "13px", color: "#adacac", marginLeft: "28px" }}>
                          {cert.issuer} &bull; {cert.period}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedCert === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: "#adacac" }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedCert === index && cert.skills && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div style={{ borderTop: "1px solid #363636", paddingTop: "12px" }}>
                            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#adacac", marginBottom: "8px" }}>
                              Skills Covered
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, si) => (
                                <motion.span
                                  key={si}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: si * 0.05 }}
                                  className="tag-pill"
                                  style={{ color: "#eae5ec" }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}