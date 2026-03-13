import { motion } from "motion/react";
import { Quote, Linkedin, Star } from "lucide-react";

interface Recommendation {
  name: string;
  role: string;
  company: string;
  text: string;
  relationship: string;
}

export function Recommendations() {
  const recommendations: Recommendation[] = [
    {
      name: "Vijay Thumma",
      role: "Technical Product Architect | IBM Certified Architect",
      company: "Sterling Order Management",
      text: "Dipesh has consistently demonstrated exceptional technical expertise, initiative, and reliability. His proactive problem-solving and deep understanding of systems have played a key role in enhancing platform stability and overall team efficiency.",
      relationship: "Vijay managed Dipesh directly",
    },
    {
      name: "Hamsa S",
      role: "Omni Channel Fulfillment | IBM Sterling OMS | SME",
      company: "Supply chain management",
      text: "Dipesh stands out for his strong command over IBM Sterling OMS. He has consistently demonstrated deep technical knowledge, hands-on expertise, and a proactive approach to problem-solving.",
      relationship: "Hamsa managed Dipesh directly",
    },
    {
      name: "Bharath Sandapatla",
      role: "Senior Associate at Cognizant",
      company: "Cognizant",
      text: "Dipesh has played a pivotal role in several high-impact projects. His contributions in building robust microservices using Spring Boot have been instrumental in the success of these initiatives.",
      relationship: "Bharath was Dipesh's mentor",
    },
    {
      name: "Swapnil Lawankar",
      role: "Cloud Technology Specialist at Cognizant",
      company: "CloudOps",
      text: "He pursues hard work and strong problem-solving skills. What stands out is his quick learning ability. His interest and ability specific to AI/ML was recommendable.",
      relationship: "Swapnil worked with Dipesh on the same team",
    },
  ];

  // Double the array for seamless loop
  const doubledRecs = [...recommendations, ...recommendations];

  return (
    <section className="relative overflow-hidden" style={{ background: "#050810", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: "25px",
              textTransform: "uppercase",
              letterSpacing: "7px",
              fontWeight: 400,
              color: "#5eead4",
              marginBottom: "8px",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            RECOMMENDATIONS
          </p>
          <p style={{ fontSize: "18px", color: "#adacac" }}>What colleagues and mentors say</p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, #050810, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, #050810, transparent)" }} />

        <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ width: "fit-content" }}>
          {doubledRecs.map((rec, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[380px] mx-3 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                border: "1px solid #363636",
              }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 mb-4" style={{ color: "rgba(94,234,212,0.2)" }} />

              {/* Text */}
              <p style={{ fontSize: "16px", color: "#eae5ec", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px" }}>
                "{rec.text}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between" style={{ borderTop: "1px solid #363636", paddingTop: "12px" }}>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#5eead4" }}>{rec.name}</p>
                  <p style={{ fontSize: "12px", color: "#adacac" }}>{rec.role}</p>
                  <p style={{ fontSize: "11px", color: "#363636", marginTop: "4px" }}>{rec.relationship}</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/dipeshgupta09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-colors"
                  style={{ background: "rgba(94,234,212,0.1)" }}
                >
                  <Linkedin className="h-4 w-4" style={{ color: "#5eead4" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn CTA */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 mt-10 text-center">
        <motion.a
          href="https://www.linkedin.com/in/dipeshgupta09/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all"
          style={{
            background: "rgba(94,234,212,0.1)",
            border: "1px solid rgba(94,234,212,0.3)",
            color: "#5eead4",
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(94,234,212,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="h-4 w-4" />
          View LinkedIn Profile
        </motion.a>
      </div>
    </section>
  );
}