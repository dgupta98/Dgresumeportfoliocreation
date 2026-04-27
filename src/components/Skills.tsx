import { Code, Database, Wrench, Brain, Award, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface SkillCategory { title: string; icon: any; skills: string[]; description: string; }
interface Certification { title: string; issuer: string; period: string; skills?: string[]; }

export function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(0);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    { title: "Programming Languages", icon: Code, skills: ["Python", "Java", "C"], description: "Core programming languages with expertise in Python for ML/AI, Java for enterprise applications, and C for system-level programming." },
    { title: "Frameworks & Libraries", icon: Brain, skills: ["Spring Boot", "Flask", "Pandas", "NumPy", "OpenCV", "PyTorch", "TensorFlow", "scikit-learn"], description: "Comprehensive experience with modern frameworks for web development, data processing, and machine learning model development." },
    { title: "Tools & Platforms", icon: Wrench, skills: ["Docker", "Jenkins", "Git", "GitLab", "GCP", "AWS", "Tableau", "Power BI", "IBM Sterling OMS", "Selenium"], description: "Proficient in DevOps tools, cloud platforms, data visualization tools, and automation frameworks." },
    { title: "Databases", icon: Database, skills: ["SQL", "PostgreSQL", "NoSQL"], description: "Expertise in relational and NoSQL databases for efficient data storage, retrieval, and management at scale." },
    { title: "Concepts & Technologies", icon: Award, skills: ["Machine Learning", "Deep Learning", "Computer Vision", "CNN", "NLP", "REST API", "Microservices", "Cloud Migration", "Data Analytics", "ETL", "Agile/Scrum", "CI/CD", "System Design"], description: "Strong foundation in AI/ML concepts, software architecture patterns, and modern development methodologies." },
  ];

  const certifications: Certification[] = [
    { title: "Next Generation Platform for IBM Sterling Order Management on Cloud Specialist", issuer: "IBM", period: "09/2021", skills: ["IBM Sterling OMS", "Cloud Migration", "Order Management", "Enterprise Systems"] },
    { title: "Advanced AI and Deep Learning", issuer: "Board Infinity", period: "12/2020 - 05/2021", skills: ["Deep Learning", "Neural Networks", "CNN", "Computer Vision", "PyTorch"] },
    { title: "Data Scientist with Python Track", issuer: "DataCamp", period: "10/2020 - 12/2020", skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Machine Learning"] },
  ];

  return (
    <section id="skills" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 style={{
              fontSize: "clamp(40px, calc(4vw + 25px), 72px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#1A1A1A",
            }}>
              My Tech<br />Stack
            </h2>
          </motion.div>

          <div className="space-y-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedSkill === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className="rounded-2xl cursor-pointer overflow-hidden"
                    style={{
                      background: isExpanded ? "#FFFFFF" : "transparent",
                      border: "1px solid #E8E5E0",
                      boxShadow: isExpanded ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
                      transition: "all 0.2s",
                    }}
                    onClick={() => setExpandedSkill(isExpanded ? null : index)}
                  >
                    <div className="p-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: "rgba(146,64,14,0.12)" }}>
                          <Icon className="h-5 w-5" style={{ color: "#92400E" }} />
                        </div>
                        <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A" }}>{category.title}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        {!isExpanded && (
                          <div className="hidden sm:flex flex-wrap gap-2">
                            {category.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="tag-pill">{skill}</span>
                            ))}
                            {category.skills.length > 3 && (
                              <span className="tag-pill" style={{ color: "#92400E" }}>+{category.skills.length - 3}</span>
                            )}
                          </div>
                        )}
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: "#8A8A8A" }}>
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <div className="px-5 pb-5">
                            <div style={{ borderTop: "1px solid #E8E5E0", paddingTop: "16px" }}>
                              <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "16px" }}>{category.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, si) => (
                                  <span key={si} className="tag-pill">{skill}</span>
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
          <motion.h3 className="text-center mb-8" style={{ fontSize: "24px", color: "#92400E",  }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Professional Certifications
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                <div className="rounded-2xl cursor-pointer overflow-hidden"
                  style={{ background: "#FFFFFF", border: "1px solid #E8E5E0", borderLeft: "3px solid #92400E" }}
                  onClick={() => setExpandedCert(expandedCert === index ? null : index)}>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#92400E" }} />
                          <h4 style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{cert.title}</h4>
                        </div>
                        <p style={{ fontSize: "13px", color: "#8A8A8A", marginLeft: "28px" }}>{cert.issuer} &bull; {cert.period}</p>
                      </div>
                      <motion.div animate={{ rotate: expandedCert === index ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: "#8A8A8A" }}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedCert === index && cert.skills && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <div className="px-5 pb-5">
                          <div style={{ borderTop: "1px solid #E8E5E0", paddingTop: "12px" }}>
                            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#8A8A8A", marginBottom: "8px" }}>Skills Covered</p>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, si) => (<span key={si} className="tag-pill">{skill}</span>))}
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
