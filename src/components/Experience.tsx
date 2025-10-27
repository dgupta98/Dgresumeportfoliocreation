import { Badge } from "./ui/badge";
import { Briefcase, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { CircuitPattern } from "./CircuitPattern";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  duration?: string;
  type?: string;
  achievements: string[];
  tags: string[];
}

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      company: "Cognizant",
      location: "Kolkata, India",
      position: "Product Development Specialist",
      period: "11/2022 - 07/2025",
      duration: "2 yrs 9 mos",
      type: "Full-time",
      achievements: [
        "Led an enterprise cloud migration from IBM Sterling Order Management v9.4 to v10 SaaS, orchestrating middleware data transfer and cloud agent deployment across 8M records with zero downtime and 0% data loss.",
        "Architected a scalable microservices-based data archival infrastructure for 133M+ historical order records with real-time access, reducing live system database load by 15% and improving transaction query performance by 30%.",
        "Built an intelligent data lifecycle management system with configurable time-based archival policies, automating the offloading of 20M+ aging records annually, eliminating database congestion and increasing system throughput by 10% while reducing storage costs by 25%.",
        "Designed an end-to-end reverse logistics pipeline for returned furniture, integrating inventory, warehouse, and financial workflows across 15+ warehouses, resulting in 2% revenue increase and 3% reduction in redundant stock.",
      ],
      tags: ["Cloud Migration", "Microservices", "IBM Sterling OMS", "Data Architecture"],
    },
    {
      company: "Vrize",
      location: "Bangalore, India",
      position: "Data Analyst",
      period: "04/2021 - 11/2022",
      duration: "1 yr 8 mos",
      type: "Full-time",
      achievements: [
        "Developed core order management modules processing 1M+ annual transactions and integrated custom GTIN utilities to map 50K+ SKUs by manufacturing year across 8 warehouses, resulting in 15% reduction in product returns and improving customer satisfaction scores by 12%.",
        "Streamlined data quality validation processes and created 10+ real-time analytics dashboards using Python, SQL, and Power BI, enabling executives to monitor 25+ logistics KPIs and driving data-informed decisions that improved operational efficiency by 18%.",
      ],
      tags: ["Data Analytics", "Python", "SQL", "Power BI"],
    },
    {
      company: "IntelliNature Private Limited",
      location: "Dehradun, Uttarakhand, India",
      position: "Data Scientist Consultant",
      period: "03/2021 - 04/2021",
      duration: "2 mos",
      type: "Part-time",
      achievements: [
        "Developed custom web scraping solution to automate data extraction across third-party portals using Python libraries like BeautifulSoup and Selenium.",
        "Built efficient data pipeline handling dynamic page structures and transforming data into clean tabular formats for further analysis.",
        "Collaborated with stakeholders to align output with business KPIs, improving data reliability for analytics infrastructure.",
      ],
      tags: ["Python", "Web Scraping", "BeautifulSoup", "Selenium", "Data Pipeline"],
    },
    {
      company: "Amazon",
      location: "Kolkata, West Bengal, India",
      position: "Virtual Customer Service",
      period: "09/2020 - 12/2020",
      duration: "4 mos",
      type: "Full-time",
      achievements: [
        "Handled over 100+ customer queries daily across multiple channels, specializing in order-related concerns, refund processing, and escalation handling.",
        "Gained proficiency in Amazon's proprietary CRM systems and internal tools, helping reduce average issue resolution time and maintaining excellent CSAT scores.",
        "Delivered accurate resolutions under high-pressure scenarios, contributing to an increase in first-contact resolution metrics.",
      ],
      tags: ["Customer Service", "CRM Systems", "Problem Solving", "Communication"],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              Professional Experience
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-slate-300 mt-4">My journey in building scalable solutions</p>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Main Card */}
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
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="p-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-400 mt-1">
                            <Briefcase className="h-4 w-4 text-slate-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl text-slate-900 mb-1">{exp.position}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                              <span className="font-medium text-slate-800">{exp.company}</span>
                              {exp.type && (
                                <>
                                  <span className="text-slate-400">•</span>
                                  <span className="text-xs bg-slate-700 text-white px-2 py-0.5 rounded-full">
                                    {exp.type}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 ml-12">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </div>
                          <span className="text-slate-400">•</span>
                          <span>{exp.period}</span>
                          {exp.duration && (
                            <>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-700">{exp.duration}</span>
                            </>
                          )}
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

                    {/* Tags - Always visible */}
                    <div className="flex flex-wrap gap-2 ml-12">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Achievements Section */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                          <div className="border-t border-slate-300 pt-4">
                            <h4 className="text-sm uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
                              <div className="w-1 h-4 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3 ml-12">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.1 }}
                                  className="flex gap-3 text-sm text-slate-700"
                                >
                                  <span className="text-slate-600 mt-1.5 flex-shrink-0">
                                    <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor">
                                      <circle cx="3" cy="3" r="3" />
                                    </svg>
                                  </span>
                                  <span className="flex-1 leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
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
