import { GraduationCap, Award, ChevronDown, BookOpen, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EducationData {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  status: string;
  statusBg: string;
  statusColor: string;
  coursework?: string[];
  achievements?: string[];
}

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const education: EducationData[] = [
    {
      degree: "Master of Science in Software Engineering",
      institution: "Arizona State University",
      location: "Arizona, US",
      period: "08/2025 - 05/2027",
      gpa: "4.0/4.0",
      status: "In Progress",
      statusBg: "rgba(34,197,94,0.1)",
      statusColor: "#4ade80",
      coursework: [
        "Advanced Software Engineering",
        "Distributed Systems",
        "Machine Learning Systems",
        "Cloud Computing Architecture",
        "Software Testing & QA",
      ],
      achievements: [
        "Maintaining perfect 4.0 GPA",
        "Focus on AI/ML and distributed systems",
        "Graduate research in scalable ML infrastructure",
      ],
    },
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "B. P. Poddar Institute of Management and Technology",
      location: "West Bengal, India",
      period: "08/2016 - 06/2020",
      gpa: "3.0/4.0",
      status: "Completed",
      statusBg: "rgba(96,165,250,0.1)",
      statusColor: "#60a5fa",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Signal Processing",
        "Control Systems",
      ],
      achievements: [
        "Published IEEE research on DeepFake Detection (IEEE ICACFCT 2021)",
        "Completed multiple ML/AI certification programs",
        "Built foundation in programming and system design",
      ],
    },
  ];

  return (
    <section id="education" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 60px)",
            fontWeight: 400,
            background: "linear-gradient(0deg, #14b8a6, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Education
          </h2>
          <p style={{ fontSize: "18px", color: "#adacac", marginTop: "12px" }}>
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="max-w-[900px] mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className="rounded-2xl cursor-pointer overflow-hidden dashed-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderTop: "2px solid #5eead4",
                  transition: "all 0.3s",
                }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                        >
                          <GraduationCap className="h-5 w-5" style={{ color: "#5eead4" }} />
                        </div>
                        <div className="flex-1">
                          <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#eae5ec", marginBottom: "6px" }}>
                            {edu.degree}
                          </h3>
                          <p style={{ fontSize: "16px", color: "#5eead4", marginBottom: "8px" }}>
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "#adacac" }}>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {edu.location}
                            </div>
                            <span style={{ color: "#363636" }}>&bull;</span>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {edu.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 ml-[52px]">
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4" style={{ color: "#5eead4" }} />
                          <span style={{ color: "#eae5ec", fontWeight: 500 }}>GPA: {edu.gpa}</span>
                        </div>
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: edu.statusBg,
                            color: edu.statusColor,
                            border: `1px solid ${edu.statusColor}33`,
                          }}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "#adacac" }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div style={{ borderTop: "1px solid #363636", paddingTop: "16px" }} className="space-y-5">
                          {edu.coursework && (
                            <div>
                              <h4 className="flex items-center gap-2 mb-3" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#adacac" }}>
                                <BookOpen className="h-4 w-4" style={{ color: "#5eead4" }} />
                                Relevant Coursework
                              </h4>
                              <div className="flex flex-wrap gap-2 ml-6">
                                {edu.coursework.map((course, ci) => (
                                  <motion.span
                                    key={ci}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 + ci * 0.05 }}
                                    className="tag-pill"
                                    style={{ color: "#eae5ec" }}
                                  >
                                    {course}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}

                          {edu.achievements && (
                            <div>
                              <h4 className="flex items-center gap-2 mb-3" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#adacac" }}>
                                <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(to bottom, #5eead4, #14b8a6)" }} />
                                Key Highlights
                              </h4>
                              <ul className="space-y-2 ml-6">
                                {edu.achievements.map((ach, ai) => (
                                  <motion.li
                                    key={ai}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + ai * 0.1 }}
                                    className="flex gap-2"
                                    style={{ fontSize: "14px", color: "#adacac" }}
                                  >
                                    <span className="text-[#5eead4] mt-1.5 flex-shrink-0">
                                      <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                                    </span>
                                    <span className="leading-relaxed">{ach}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}
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
    </section>
  );
}