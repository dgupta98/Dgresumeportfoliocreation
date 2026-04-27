import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function About() {
  const metrics = [
    { icon: TrendingUp, label: "Records Migrated", value: "8", suffix: "M+", details: "Migrated 8M+ records across multiple legacy systems with minimal downtime." },
    { icon: Zap, label: "Performance Boost", value: "30", suffix: "%", details: "Delivered an average 30% performance improvement through query optimization and caching." },
    { icon: Users, label: "Records Architected", value: "133", suffix: "M+", details: "Architected systems handling 133M+ logical records including data modeling and pipelines." },
    { icon: Award, label: "Published Research", valueText: "IEEE", details: "Published peer-reviewed research with IEEE in deep learning and computer vision." },
  ];

  const [flipped, setFlipped] = useState<boolean[]>(() => metrics.map(() => false));
  const setFlip = (i: number, v: boolean) => setFlipped((s) => { const c = [...s]; c[i] = v; return c; });
  const toggleFlip = (i: number) => setFlip(i, !flipped[i]);

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            color: "#1A1A1A",
          }}>
            About me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p style={{ fontSize: "18px", fontWeight: 400, color: "#4A4A4A", lineHeight: 1.8 }}>
              I'm a backend engineer who got pulled into ML and never looked back. Right now I'm at Arizona State doing my Master's in Software Engineering, but before that I spent 4 years at Cognizant migrating systems that were older than some of my teammates.
            </p>
            <p style={{ fontSize: "18px", fontWeight: 400, color: "#4A4A4A", lineHeight: 1.8 }}>
              My sweet spot is the messy middle — where the data pipeline meets the microservice meets the model that needs to actually work in production. I've moved 8 million records without dropping a single one, sped up queries by 30%, and published a paper on catching deepfakes.
            </p>
            <p style={{ fontSize: "18px", fontWeight: 400, color: "#4A4A4A", lineHeight: 1.8 }}>
              When I'm not debugging production issues or fine-tuning models, I'm probably at a hackathon building something ridiculous in 36 hours.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const isFlipped = flipped[index];
              return (
                <div key={index} className="relative">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    onClick={() => toggleFlip(index)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFlip(index); } }}
                    onMouseEnter={() => setFlip(index, true)}
                    onMouseLeave={() => setFlip(index, false)}
                    className="w-full h-full p-6 rounded-2xl cursor-pointer overflow-hidden"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                      perspective: 1200,
                      minHeight: 200,
                    }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                      {/* Front */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", zIndex: isFlipped ? 1 : 2 }}>
                        <Icon className="h-6 w-6 mb-4" style={{ color: "#92400E" }} />
                        <div style={{ fontSize: 48, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.05,  }}>
                          {metric.valueText || <>{metric.value}{metric.suffix}</>}
                        </div>
                        <div style={{ fontSize: 14, color: "#8A8A8A", marginTop: 8 }}>{metric.label}</div>
                      </div>
                      {/* Back */}
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center"
                        style={{ transform: "rotateY(180deg)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", zIndex: isFlipped ? 2 : 1 }}>
                        <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.6 }}>{metric.details}</p>
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
