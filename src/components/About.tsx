import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    { icon: TrendingUp, label: "8M+ Records", description: "Zero-downtime cloud migration" },
    { icon: Zap, label: "30% Faster", description: "Database performance improvement" },
    { icon: Users, label: "133M+ Records", description: "Data infrastructure architected" },
    { icon: Award, label: "IEEE Published", description: "Research in DeepFake Detection" },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: "25px",
              textTransform: "uppercase",
              letterSpacing: "7px",
              fontWeight: 400,
              color: "#5eead4",
              marginBottom: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            ABOUT ME
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ fontSize: "18px", fontWeight: 300, color: "#adacac", lineHeight: 1.8, textAlign: "justify" }}>
              I'm an AI/ML engineer and backend developer with a passion for building scalable,
              data-driven solutions. Currently pursuing my Master's in Software Engineering at
              Arizona State University, I bring over 4 years of industry experience in delivering
              high-impact projects.
            </p>
            <p style={{ fontSize: "18px", fontWeight: 300, color: "#adacac", lineHeight: 1.8, textAlign: "justify" }}>
              My expertise spans across machine learning systems, cloud migrations, microservices
              architecture, and data infrastructure. I've led enterprise-scale migrations,
              architected solutions handling 133M+ records, and published research in deep learning.
            </p>
            <p style={{ fontSize: "18px", fontWeight: 300, color: "#adacac", lineHeight: 1.8, textAlign: "justify" }}>
              I'm passionate about leveraging AI and scalable backend systems to solve complex
              problems and drive measurable business impact.
            </p>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid #363636",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#5eead4" }} />
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 600, color: "#eae5ec", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: "13px", color: "#adacac" }}>{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}