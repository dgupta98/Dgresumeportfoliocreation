import { Briefcase, Calendar, MapPin, Award, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Training {
  title: string;
  organization: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  summary: string;
  highlights: string[];
  tags: string[];
  icon: any;
}

export function TrainingsVolunteer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: Training[] = [
    {
      title: "Sponsorship Head",
      organization: "TechStorm 2.19 - B.P. Poddar Institute",
      type: "Leadership",
      location: "Kolkata, West Bengal, India",
      period: "Jan 2019 - Mar 2019",
      duration: "3 mos",
      summary: "Led sponsorship strategy for flagship technical fest with 2000+ attendees, securing funding.",
      highlights: [
        "Secured sponsorship deals by pitching to local businesses, national brands, and tech startups",
        "Built and managed a core team of 10 members",
      ],
      tags: ["Leadership", "Stakeholder Management", "Negotiation", "Team Management"],
      icon: Users,
    },
    {
      title: "Volunteer - Power Operations",
      organization: "FIFA U-17 World Cup India 2017",
      type: "Volunteer",
      location: "Salt Lake Stadium, Kolkata",
      period: "Oct 2017",
      duration: "1 mo",
      summary: "Managed electrical power systems at one of Asia's largest stadiums during global sporting event.",
      highlights: [
        "Managed electrical power systems including generators and transformers",
        "Real-time coordination and swift problem-solving",
      ],
      tags: ["Power Systems", "Operations", "Event Management"],
      icon: Zap,
    },
    {
      title: "Summer Training - Airport Infrastructure",
      organization: "Airports Authority of India (AAI)",
      type: "Industrial Training",
      location: "Kolkata, India",
      period: "Jun 2019",
      duration: "1 mo",
      summary: "Hands-on training in power systems and airport infrastructure operations.",
      highlights: [
        "Practical exposure to airport power generation and distribution",
        "Airport electrical safety protocols and emergency systems",
      ],
      tags: ["Power Systems", "Airport Operations", "Infrastructure"],
      icon: Award,
    },
    {
      title: "Power Plant Training",
      organization: "TATA Power",
      type: "Industrial Training",
      location: "India",
      period: "Apr 2019",
      duration: "1 mo",
      summary: "Training on power plant operations, automation systems, and power distribution.",
      highlights: [
        "Power generation systems and plant operations",
        "Power system automation and control mechanisms",
      ],
      tags: ["Power Generation", "Automation", "Power Distribution"],
      icon: Zap,
    },
    {
      title: "PLC Programming Training",
      organization: "Ardent Computech",
      type: "Industrial Training",
      location: "India",
      period: "Jun 2018",
      duration: "1 mo",
      summary: "Industrial training in Programmable Logic Controllers and autonomous control systems.",
      highlights: [
        "PLC programming fundamentals and ladder logic",
        "Developed autonomous traffic control system",
      ],
      tags: ["PLC Programming", "Automation", "Control Systems"],
      icon: Briefcase,
    },
    {
      title: "Substation Operations Training",
      organization: "WBSEDCL",
      type: "Vocational Training",
      location: "Bidhannagar, Kolkata",
      period: "Jan 2019",
      duration: "1 mo",
      summary: "Specialized training on 33/11 KV substation operations and power distribution.",
      highlights: [
        "Transformers, circuit breakers, protection relays",
        "SCADA integration and preventive maintenance",
      ],
      tags: ["Power Distribution", "SCADA", "Electrical Grid"],
      icon: Zap,
    },
  ];

  return (
    <section id="trainings" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              color: "#1A1A1A",
              marginBottom: "8px",
            }}
          >
            Trainings & Volunteer
          </h2>
          <p style={{ fontSize: "18px", color: "#4A4A4A" }}>Hands-on experience and community engagement</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  className="rounded-2xl cursor-pointer overflow-hidden h-full flex flex-col"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8E5E0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    transition: "all 0.3s",
                  }}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(146,64,14,0.12)", border: "1px solid rgba(217,119,6,0.15)" }}
                      >
                        <Icon className="h-5 w-5" style={{ color: "#92400E" }} />
                      </div>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{ fontSize: "11px", background: "#F0EDE8", color: "#8A8A8A", border: "1px solid #E8E5E0" }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#1A1A1A", marginBottom: "4px" }}>
                      {exp.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#92400E", marginBottom: "8px" }}>
                      {exp.organization}
                    </p>
                    <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.6, marginBottom: "12px", flex: 1 }}>
                      {exp.summary}
                    </p>

                    <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#8A8A8A" }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <span style={{ color: "#E8E5E0" }}>&bull;</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.slice(0, 3).map((tag, ti) => (
                        <span key={ti} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5" style={{ borderTop: "1px solid #E8E5E0", paddingTop: "12px" }}>
                          <ul className="space-y-2">
                            {exp.highlights.map((h, hi) => (
                              <li key={hi} className="flex gap-2" style={{ fontSize: "13px", color: "#4A4A4A" }}>
                                <span style={{ color: "#92400E" }} className="mt-1.5 flex-shrink-0">
                                  <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                                </span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
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
    </section>
  );
}
