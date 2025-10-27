import { Badge } from "./ui/badge";
import { Code, Database, Wrench, Brain, Award, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CircuitPattern } from "./CircuitPattern";

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
      skills: [
        "Spring Boot",
        "Flask",
        "Pandas",
        "NumPy",
        "OpenCV",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
      ],
      description: "Comprehensive experience with modern frameworks for web development, data processing, and machine learning model development.",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Docker",
        "Jenkins",
        "Git",
        "GitLab",
        "GCP",
        "AWS",
        "Tableau",
        "Power BI",
        "IBM Sterling OMS",
        "Selenium",
      ],
      description: "Proficient in DevOps tools, cloud platforms, data visualization tools, and automation frameworks for end-to-end solution delivery.",
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
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "CNN",
        "NLP",
        "REST API",
        "Microservices",
        "Cloud Migration",
        "Data Analytics",
        "ETL",
        "Agile/Scrum",
        "CI/CD",
        "System Design",
      ],
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
      period: "12/2020 – 05/2021",
      skills: ["Deep Learning", "Neural Networks", "CNN", "Computer Vision", "PyTorch"],
    },
    {
      title: "Data Scientist with Python Track",
      issuer: "DataCamp",
      period: "10/2020 – 12/2020",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Machine Learning"],
    },
  ];

  const toggleSkill = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  const toggleCert = (index: number) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <CircuitPattern />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
              Skills & Certifications
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Skills Section */}
          <div className="mb-16">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`backdrop-blur-xl bg-white border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                        expandedSkill === index
                          ? "border-slate-500 shadow-slate-500/20"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                      whileHover={{ 
                        y: -8, 
                        rotateX: 5,
                        rotateY: 5,
                        scale: 1.02
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                      onClick={() => toggleSkill(index)}
                    >
                      {/* Gradient accent bar */}
                      <div className="h-1.5 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700" />

                      {/* Header */}
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-400">
                              <Icon className="h-5 w-5 text-slate-700" />
                            </div>
                            <h3 className="text-lg text-slate-900">{category.title}</h3>
                          </div>
                          
                          <motion.button
                            className="p-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 hover:from-slate-300 hover:to-slate-400 transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ rotate: expandedSkill === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.button>
                        </div>

                        {/* Skills badges - always visible */}
                        <div className="flex flex-wrap gap-2">
                          {category.skills.slice(0, 4).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {category.skills.length > 4 && (
                            <Badge className="bg-slate-700 text-white border border-slate-600 text-xs">
                              +{category.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Expandable Section */}
                      <AnimatePresence>
                        {expandedSkill === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-2">
                              <div className="border-t border-slate-300 pt-4">
                                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                                  {category.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                      key={skillIndex}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: skillIndex * 0.03 }}
                                      whileHover={{ scale: 1.1, y: -2, rotateY: 10 }}
                                      style={{ transformStyle: "preserve-3d" }}
                                    >
                                      <Badge className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 cursor-default shadow-sm hover:shadow-md transition-shadow">
                                        {skill}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3 
              className="text-2xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Certifications
            </motion.h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`backdrop-blur-xl bg-white border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                      expandedCert === index
                        ? "border-slate-500 shadow-slate-500/20"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                    whileHover={{ 
                      y: -8, 
                      rotateX: 5,
                      rotateY: 5,
                      scale: 1.02
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => toggleCert(index)}
                  >
                    {/* Gradient accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700" />

                    {/* Header */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                            <h4 className="text-base text-slate-900">{cert.title}</h4>
                          </div>
                          <p className="text-sm text-slate-600 ml-7">
                            {cert.issuer} • {cert.period}
                          </p>
                        </div>

                        <motion.button
                          className="p-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 hover:from-slate-300 hover:to-slate-400 transition-colors flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          animate={{ rotate: expandedCert === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Expandable Skills */}
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
                            <div className="border-t border-slate-300 pt-4">
                              <h5 className="text-xs uppercase tracking-wider text-slate-700 mb-3">
                                Skills Covered
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: skillIndex * 0.05 }}
                                  >
                                    <Badge className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 text-xs">
                                      {skill}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
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
      </div>
    </section>
  );
}
