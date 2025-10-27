import { GraduationCap, MapPin, Award, ChevronDown, BookOpen, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CircuitPattern } from "./CircuitPattern";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  status: string;
  statusColor: string;
  coursework?: string[];
  achievements?: string[];
}

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const education: Education[] = [
    {
      degree: "Master of Science in Software Engineering",
      institution: "Arizona State University",
      location: "Phoenix, Arizona",
      period: "08/2025 - 05/2027",
      gpa: "4.0/4.0",
      status: "In Progress",
      statusColor: "text-green-600 bg-green-50 border-green-300",
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
      statusColor: "text-blue-600 bg-blue-50 border-blue-300",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Signal Processing",
        "Control Systems",
      ],
      achievements: [
        "Published research on DeepFake Detection (IEEE ICACFCT 2021)",
        "Completed multiple ML/AI certification programs",
        "Built foundation in programming and system design",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <CircuitPattern />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-slate-300 mt-4">Academic foundation and continuous learning</p>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  className={`backdrop-blur-xl bg-white border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    expandedIndex === index
                      ? "border-slate-500 shadow-slate-500/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                  whileHover={{ y: -2 }}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Gradient accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700" />

                  {/* Header Section */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-400 mt-1">
                            <GraduationCap className="h-5 w-5 text-slate-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl text-slate-900 mb-2">{edu.degree}</h3>
                            <p className="text-base text-slate-800 mb-2">{edu.institution}</p>
                            
                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5 text-slate-600" />
                                <span className={edu.location === "Phoenix, Arizona" ? "text-white" : ""}>{edu.location}</span>
                              </div>
                              <span className="text-slate-400">•</span>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-slate-600" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* GPA and Status - Mobile friendly */}
                        <div className="flex flex-wrap items-center gap-3 ml-14">
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-slate-700" />
                            <span className="text-slate-700 font-medium">GPA: {edu.gpa}</span>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full border ${edu.statusColor}`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <motion.button
                        className="p-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 hover:from-slate-300 hover:to-slate-400 transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Expandable Section */}
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
                          <div className="border-t border-slate-300 pt-5 space-y-5">
                            {/* Coursework */}
                            {edu.coursework && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <h4 className="text-sm uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  Relevant Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2 ml-6">
                                  {edu.coursework.map((course, courseIndex) => (
                                    <motion.div
                                      key={courseIndex}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.2 + courseIndex * 0.05 }}
                                    >
                                      <span className="text-xs bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 px-3 py-1.5 rounded-full">
                                        {course}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* Achievements */}
                            {edu.achievements && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <h4 className="text-sm uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                                  <div className="w-1 h-4 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full" />
                                  Key Highlights
                                </h4>
                                <ul className="space-y-2 ml-6">
                                  {edu.achievements.map((achievement, achIndex) => (
                                    <motion.li
                                      key={achIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3 + achIndex * 0.1 }}
                                      className="flex gap-3 text-sm text-slate-700"
                                    >
                                      <span className="text-purple-600 mt-1.5 flex-shrink-0">
                                        <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor">
                                          <circle cx="3" cy="3" r="3" />
                                        </svg>
                                      </span>
                                      <span className="leading-relaxed">{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
