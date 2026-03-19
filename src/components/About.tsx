import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function About() {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Records Migrated",
      value: "8",
      suffix: "M+",
      details: "Migrated 8M+ records across multiple legacy systems with minimal downtime.",
    },
    {
      icon: Zap,
      label: "Performance Boost",
      value: "30",
      suffix: "%",
      details: "Delivered an average 30% performance improvement through query optimization and caching.",
    },
    {
      icon: Users,
      label: "Records Architected",
      value: "133",
      suffix: "M+",
      details: "Architected systems handling 133M+ logical records including data modeling and pipelines.",
    },
    {
      icon: Award,
      label: "Published Research",
      valueText: "IEEE",
      details: "Published peer-reviewed research with IEEE in deep learning and computer vision.",
    },
  ];

  const [flipped, setFlipped] = useState<boolean[]>(() => metrics.map(() => false));

  const setFlip = (i: number, v: boolean) => {
    setFlipped((s) => {
      const copy = [...s];
      copy[i] = v;
      return copy;
    });
  };

  const toggleFlip = (i: number) => setFlip(i, !flipped[i]);

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "48px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <motion.div
          className="mb-12"
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

          {/* Right - Metric Flip Cards */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const isFlipped = flipped[index];
              return (
                <div key={index} className="relative" style={{ opacity: 1, transform: "none" }}>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    onClick={() => toggleFlip(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFlip(index);
                      }
                    }}
                    onMouseEnter={() => setFlip(index, true)}
                    onMouseLeave={() => setFlip(index, false)}
                    className="w-full h-full p-4 sm:p-6 md:p-7 rounded-2xl glass-card cursor-pointer overflow-hidden"
                    style={{ perspective: 1200, minHeight: 200 }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s cubic-bezier(.2,.8,.2,1)",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        transformOrigin: "center center",
                      }}
                    >
                      {/* Front face */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        style={{
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                          zIndex: isFlipped ? 1 : 2,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div className="flex justify-center mb-4 w-full">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(94, 234, 212, 0.1)", border: "1px solid rgba(94, 234, 212, 0.2)" }}
                          >
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: "#5eead4" }} />
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: 60,
                            fontWeight: 600,
                            color: "#eae5ec",
                            lineHeight: 1.03,
                            fontFamily: "'Space Grotesk', sans-serif",
                            textAlign: "center",
                            width: "100%",
                            marginTop: 6,
                          }}
                        >
                          {metric.valueText ? (
                            <span>{metric.valueText}</span>
                          ) : (
                            <>
                              <span>{metric.value}</span>
                              {metric.suffix}
                            </>
                          )}
                        </div>
                        <div style={{ fontSize: 17, fontWeight: 400, color: "#adacac", marginTop: 8, textAlign: "center", width: "100%" }}>
                          {metric.label}
                        </div>
                      </div>

                      {/* Back face */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                        style={{
                          transform: "rotateY(180deg)",
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                          color: "#eae5ec",
                          zIndex: isFlipped ? 2 : 1,
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div style={{ fontSize: 17, fontWeight: 300, color: "#adacac", marginTop: 6, textAlign: "center", width: "100%" }}>
                          {metric.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}