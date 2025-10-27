import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin, Award, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { CircuitPattern } from "./CircuitPattern";

interface Training {
  title: string;
  organization: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: any;
  backgroundImage: string;
}

export function TrainingsVolunteer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences: Training[] = [
    {
      title: "Sponsorship Head",
      organization: "TechStorm 2.19 - B.P. Poddar Institute",
      type: "Leadership",
      location: "Kolkata, West Bengal, India",
      period: "Jan 2019 - Mar 2019",
      duration: "3 mos",
      summary: "Led sponsorship strategy for flagship technical fest with 2000+ attendees, securing ₹1.5L+ funding.",
      description: "Led end-to-end strategy and execution of sponsor engagement and fundraising for TechStorm 2.19, our college's flagship technical fest attended by 2000+ students.",
      highlights: [
        "Secured sponsorship deals worth ₹1.5 lakhs by pitching to local businesses, national brands, and tech startups",
        "Built and managed a core team of 10 members, training them on corporate communication and follow-ups",
        "Created customized sponsorship decks highlighting brand visibility across print, digital, and on-ground platforms",
        "Negotiated sponsorship agreements including monetary support, product placements, and workshop collaborations",
      ],
      tags: ["Leadership", "Stakeholder Management", "Negotiation", "Public Speaking", "Team Management"],
      icon: Users,
      backgroundImage: "https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc2MTU4NjE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Volunteer - Power Operations",
      organization: "FIFA U-17 World Cup India 2017",
      type: "Volunteer",
      location: "Salt Lake Stadium, Kolkata",
      period: "Oct 2017",
      duration: "1 mo",
      summary: "Managed electrical power systems at one of Asia's largest stadiums during global sporting event.",
      description: "Contributed to seamless execution of FIFA U-17 World Cup by managing electrical power systems at Salt Lake Stadium during one of the world's premier youth football tournaments.",
      highlights: [
        "Managed electrical power systems including generators and transformers at Salt Lake Stadium",
        "Maintained detailed data sheets of power output and monitored load distribution",
        "Ensured efficient performance of backup systems under high-stakes live global event environment",
        "Real-time coordination and swift problem-solving to ensure flawless power operations",
      ],
      tags: ["Power Systems", "Operations", "Event Management", "Problem Solving"],
      icon: Zap,
      backgroundImage: "https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwZXZlbnR8ZW58MXx8fHwxNzYxNTU5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Summer Training - Airport Infrastructure",
      organization: "Airports Authority of India (AAI)",
      type: "Industrial Training",
      location: "Kolkata, India",
      period: "Jun 2019",
      duration: "1 mo",
      summary: "Hands-on training in power systems and airport infrastructure operations at major airport facility.",
      description: "Completed comprehensive summer training program focused on electrical engineering aspects of airport power systems and infrastructure management.",
      highlights: [
        "Gained practical exposure to airport power generation and distribution systems",
        "Studied backup power management and critical infrastructure operations",
        "Learned about airport electrical safety protocols and emergency systems",
        "Understanding of large-scale infrastructure management and operations",
      ],
      tags: ["Power Systems", "Airport Operations", "Infrastructure", "Electrical Engineering"],
      icon: Award,
      backgroundImage: "https://images.unsplash.com/photo-1630056902043-c64da8b41ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYxNTk5NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Power Plant Training",
      organization: "TATA Power",
      type: "Industrial Training",
      location: "India",
      period: "Apr 2019",
      duration: "1 mo",
      summary: "Comprehensive training on power plant operations, automation systems, and power distribution.",
      description: "Completed intensive power plant familiarization training covering power generation, distribution, and automation systems at TATA Power facilities.",
      highlights: [
        "Hands-on exposure to power generation systems and plant operations",
        "Understanding of power system automation and control mechanisms",
        "Learned about power distribution networks and grid management",
        "Studied preventive maintenance and safety protocols in power plants",
      ],
      tags: ["Power Generation", "Power Systems", "Automation", "Power Distribution"],
      icon: Zap,
      backgroundImage: "https://images.unsplash.com/photo-1517925035435-7976539b920d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHBsYW50JTIwZWxlY3RyaWNhbHxlbnwxfHx8fDE3NjE1OTk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "PLC Programming Training",
      organization: "Ardent Computech",
      type: "Industrial Training",
      location: "India",
      period: "Jun 2018",
      duration: "1 mo",
      summary: "Industrial training in Programmable Logic Controllers and autonomous control systems.",
      description: "Summer industrial training focused on PLC programming, automation systems, and control logic for industrial applications.",
      highlights: [
        "Learned PLC programming fundamentals and ladder logic design",
        "Developed autonomous traffic control system as project work",
        "Gained experience with Scilab for control system simulations",
        "Understanding of industrial automation and control systems",
      ],
      tags: ["PLC Programming", "Automation", "Control Systems", "Scilab"],
      icon: Briefcase,
      backgroundImage: "https://images.unsplash.com/photo-1753272691001-4d68806ac590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGNvbnRyb2x8ZW58MXx8fHwxNzYxNTk5NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Substation Operations Training",
      organization: "WBSEDCL",
      type: "Vocational Training",
      location: "Bidhannagar, Kolkata",
      period: "Jan 2019",
      duration: "1 mo",
      summary: "Specialized training on 33/11 KV substation operations and power distribution systems.",
      description: "Vocational training at 33/11 KV Substation focusing on power distribution, grid architecture, and substation management systems.",
      highlights: [
        "Practical exposure to transformers, circuit breakers, CTs/PTs, isolators, and protection relays",
        "Documented transmission protocols and fault handling procedures in training report",
        "Studied SCADA integration and preventive maintenance schedules",
        "Understanding of electrical grid operations and load distribution control",
      ],
      tags: ["Power Distribution", "SCADA", "Electrical Grid", "Substation Management"],
      icon: Zap,
      backgroundImage: "https://images.unsplash.com/photo-1701607684863-d7aec9e45283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGdyaWR8ZW58MXx8fHwxNzYxNTk5NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="trainings" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <CircuitPattern />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
              Industry Trainings & Volunteer Work
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-slate-300 mt-4">Hands-on experience and community engagement</p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={`training-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group w-full"
                >
                  {/* Main Card */}
                  <div className="h-full backdrop-blur-xl bg-white border-2 border-slate-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative">
                    {/* Background Image - More Visible with Grayscale */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30 grayscale rounded-2xl"
                      style={{ backgroundImage: `url(${exp.backgroundImage})` }}
                    />
                    
                    {/* Gradient top bar */}
                    <div className="h-1.5 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700 relative z-10" />

                    <div className="p-5 flex-1 flex flex-col relative z-10">
                      {/* Icon and Type Badge */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-300">
                          <Icon className="h-5 w-5 text-slate-700" />
                        </div>
                        <Badge className="bg-slate-800 text-white border border-slate-700 text-xs">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg text-slate-900 mb-2 leading-snug">
                        {exp.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-sm text-slate-700 mb-3">
                        {exp.organization}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                        {exp.summary}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 text-xs text-slate-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-slate-600" />
                          <span>{exp.period} • {exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-slate-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Tags - Limited view */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {exp.tags.length > 3 && (
                          <Badge className="bg-slate-700 text-white text-xs">
                            +{exp.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Hover Panel */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 backdrop-blur-xl relative z-10"
                    >
                      <div className="p-5 border-t border-slate-300">
                        {/* Description */}
                        <div className="mb-4">
                          <h4 className="text-xs uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                            <div className="w-1 h-3 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full" />
                            Overview
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="text-xs uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                            <div className="w-1 h-3 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex gap-2 text-xs text-slate-700">
                                <span className="text-slate-600 mt-1 flex-shrink-0">
                                  <svg className="w-1.5 h-1.5" viewBox="0 0 6 6" fill="currentColor">
                                    <circle cx="3" cy="3" r="3" />
                                  </svg>
                                </span>
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* All Tags */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-slate-700 mb-2">
                            Skills & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
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
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
