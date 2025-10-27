import { motion, AnimatePresence } from "motion/react";
import { Quote, Linkedin, Star, ChevronDown } from "lucide-react";
import { CircuitPattern } from "./CircuitPattern";
import { useState } from "react";

interface Recommendation {
  name: string;
  role: string;
  company: string;
  text: string;
  relationship: string;
  linkedinUrl?: string;
  expandable?: boolean;
}

function RecommendationCard({ rec, index }: { rec: Recommendation; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncateLength = 150;
  const shouldTruncate = rec.expandable && rec.text.length > truncateLength;
  const displayText = shouldTruncate && !isExpanded 
    ? rec.text.substring(0, truncateLength) + "..." 
    : rec.text;

  const handleMouseEnter = () => {
    if (rec.expandable) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (rec.expandable) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-xl border border-slate-600 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group cursor-pointer"
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quote icon */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="h-12 w-12 text-blue-400" />
        </div>

        <div className="relative z-10">
          {/* Author info - Now at the top */}
          <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-600">
            <div className="flex-1">
              <h4 className="text-white mb-1">{rec.name}</h4>
              <p className="text-sm text-slate-400">{rec.role}</p>
              <p className="text-sm text-blue-400">{rec.company}</p>
              <p className="text-xs text-slate-500 mt-2">{rec.relationship}</p>
            </div>
            
            <motion.a
              href="https://www.linkedin.com/in/dipeshgupta09/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="View Dipesh's LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </motion.a>
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Recommendation text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-200 leading-relaxed text-justify italic"
              >
                "{displayText}"
              </motion.p>
            </AnimatePresence>
            
            {shouldTruncate && (
              <motion.div 
                className="flex items-center gap-1 text-blue-400 text-sm mt-2"
                animate={{ opacity: isExpanded ? 0 : 1 }}
              >
                <span>Hover to read more</span>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Recommendations() {
  const recommendations: Recommendation[] = [
    {
      name: "Vijay Thumma",
      role: "Technical Product Architect | IBM Certified Architect - Sterling Order Management",
      company: "Google Certified | Certified ScrumMaster® (CSM®)",
      text: "I have had the distinct pleasure of supervising Dipesh in his capacity as Lead Developer, where he has consistently demonstrated exceptional technical expertise, initiative, and reliability. Throughout our association, Dipesh has served as the go-to resource for resolving complex operational challenges and technical issues. His proactive problem-solving and deep understanding of systems have played a key role in enhancing platform stability and overall team efficiency. Dipesh notably improved delivery outcomes by developing and deploying automation scripts that streamlined critical processes, reduced manual effort, and boosted productivity across the board. His ability to identify bottlenecks and implement scalable solutions has had a lasting positive impact on team operations. He also played a critical role in two major migration programs, applying his meticulous planning, technical foresight, and executional discipline to ensure their timely completion with minimal disruption. Dipesh is a consummate professional who blends technical depth with collaborative engagement. His contributions have been instrumental in advancing our delivery excellence, and I recommend him without hesitation for any role that values innovation, reliability, and enterprise-level impact.",
      relationship: "Vijay managed Dipesh directly",
      linkedinUrl: "https://www.linkedin.com/in/vijaythumma/",
      expandable: true
    },
    {
      name: "Hamsa S",
      role: "Omni Channel Fulfillment | IBM Sterling OMS | SME",
      company: "Supply chain management | ecommerce",
      text: "I have had the privilege of working with Dipesh on an IBM Sterling OMS projects at VRize, and I can confidently say that he is an exceptional professional who brings both technical excellence and a collaborative spirit to the team. Dipesh stands out for his strong command over IBM Sterling OMS and IBM Order Management on Cloud (OMOC). He has consistently demonstrated deep technical knowledge, hands-on expertise, and a proactive approach to problem-solving. Whether working on the end-to-end development of a critical module or stepping into a new role, he has delivered high-quality results with remarkable consistency. What truly sets Dipesh apart is his team-first attitude. He is a natural collaborator—always willing to assist peers, share knowledge, and contribute to a positive team dynamic. His effective communication skills, willingness to support during tight deadlines, and eagerness to learn and grow have made him the go-to person for guidance/support within the team. Dipesh is not just a technically skilled engineer—he is also a dependable teammate and a motivating presence in any work environments. I highly recommend him and am confident that he will be a valuable asset to any organization he joins.",
      relationship: "Hamsa managed Dipesh directly",
      linkedinUrl: "https://www.linkedin.com/in/hamsa-s/",
      expandable: true
    },
    {
      name: "Bharath Sandapatla",
      role: "Senior Associate at Cognizant",
      company: "Cognizant",
      text: "I've had the privilege of having Dipesh work under me since the beginning of his journey at Cognizant, and I can confidently say he is one of the most dedicated and technically proficient professionals I've worked with. Dipesh has played a pivotal role in several high-impact projects, including the Cloud Migration initiative (upgrading OMS for on Prem to IBM Sterling Order Service Migration where he successfully migrated over 133 million orders, and the Archival Orders Restoration project. His contributions, especially in building robust microservices using Spring Boot, have been instrumental in the success of these initiatives. What truly sets Dipesh apart is his unwavering commitment, tireless work ethic, and remarkable ability to grasp complex concepts quickly. His deep understanding of system integration—from architectural design to development, including networking infrastructure and dependencies—has demonstrated a level of technical prowess that is rare and highly valuable. Over the years, Dipesh's growth has been nothing short of exceptional. He consistently delivers excellence, mentors team members, and leads by example. His collaborative spirit and leadership have positively impacted every project he's been part of. I wholeheartedly recommend Dipesh for any position that demands technical excellence, strategic thinking, and a passion for innovation. He will undoubtedly be an asset to any organization.",
      relationship: "Bharath was Dipesh's mentor",
      linkedinUrl: "https://www.linkedin.com/in/bharath-sandapatla/",
      expandable: true
    },
    {
      name: "Swapnil Lawankar",
      role: "Cloud Technology Specialist at Cognizant",
      company: "CloudOps",
      text: "I had the opportunity to work with Dipesh on IBM Sterling Order Management System (OMS), specifically Order Service. He is a part of the project App development team, and was exceptional in technical as well as professional aspects. He pursues hard work and strong problem-solving skills. For me, what stands out is his quick learning ability, be it specific to any domain. His interest and ability specific to AI/ML was recommendable. He was able to develop some go-to solutions using readily available AI tools. With his ownership and team player capabilities, Dipesh truly stands out as an excellent professional who can be a valuable individual for any team.",
      relationship: "Swapnil worked with Dipesh on the same team",
      linkedinUrl: "https://www.linkedin.com/in/swapnil-lawankar/",
      expandable: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <CircuitPattern />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
              Recommendations
            </h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-slate-300 mt-4">What colleagues and mentors say</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {recommendations.map((rec, index) => (
              <RecommendationCard key={rec.name} rec={rec} index={index} />
            ))}
          </div>

          {/* LinkedIn CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-slate-400 mb-4">View more recommendations on LinkedIn</p>
            <motion.a
              href="https://www.linkedin.com/in/dipeshgupta09/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
              View LinkedIn Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
