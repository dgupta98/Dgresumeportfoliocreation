import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState, KeyboardEvent } from "react";
import { TrendingUp, Zap, Users, Award, Trophy } from "lucide-react";

export function MetricsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    {
      icon: TrendingUp,
      label: "Records Migrated",
      value: 8,
      suffix: "M+",
      color: "#5eead4",
      details:
        "Migrated 8M+ records across multiple legacy systems with minimal downtime.",
    },
    {
      icon: Zap,
      label: "Performance Boost",
      value: 30,
      suffix: "%",
      color: "#5eead4",
      details:
        "Delivered an average 30% performance improvement through query optimization and caching.",
    },
    {
      icon: Users,
      label: "Records Architected",
      value: 133,
      suffix: "M+",
      color: "#5eead4",
      details:
        "Architected systems handling 133M+ logical records including data modeling, pipelines, and validation layers.",
    },
    {
      icon: Award,
      label: "Published Research",
      displayValue: "IEEE",
      color: "#5eead4",
      details: "Published peer-reviewed research with IEEE in deep learning and computer vision.",
    },
    {
      icon: Trophy,
      label: "Hackathon Wins",
      value: 4,
      suffix: "",
      color: "#5eead4",
      details: "Won 4 hackathons including GlobeHack S1, WiCS ASU, Kiro Spark Challenge, and AI Principled Spark Challenge.",
    },
  ];

  const [flipped, setFlipped] = useState<boolean[]>(() => metrics.map(() => false));

  const toggleFlip = (i: number) => {
    setFlipped((s: boolean[]) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  };

  return (
    <div ref={ref} className="py-8 sm:py-10 relative" style={{ background: "#0f1520" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isFlipped = flipped[index];
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onMouseEnter={() => toggleFlip(index)}
                onMouseLeave={() => toggleFlip(index)}
              >
                <div
                  className="w-full h-full p-5 sm:p-6 rounded-2xl glass-card cursor-pointer overflow-hidden"
                  style={{
                    perspective: 1200,
                    minHeight: 140,
                  }}
                >
                    <div
                      className="relative w-full h-full"
                      style={{
                        transformStyle: "preserve-3d",
                        WebkitTransformStyle: "preserve-3d",
                        transition: "transform 0.7s",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        transformOrigin: "center",
                      }}
                    >
                      {/* Front face */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          zIndex: isFlipped ? 1 : 2,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div className="flex justify-center mb-3 w-full">
                          <div
                            className="w-11 h-11 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                          >
                            <Icon className="h-5 w-5" style={{ color: "#5eead4" }} />
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "48px", fontWeight: 600, color: "#eae5ec", lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif", textAlign: "center", width: "100%", marginTop: "2px" }}
                        >
                          {metric.displayValue ? (
                            metric.displayValue
                          ) : (
                            <>
                              <Counter target={metric.value} isInView={isInView} />
                              {metric.suffix}
                            </>
                          )}
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: 300, color: "#adacac", marginTop: "6px", textAlign: "center", width: "100%" }}>
                          {metric.label}
                        </div>
                      </div>

                      {/* Back face */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          color: "#eae5ec",
                          zIndex: isFlipped ? 2 : 1,
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div style={{ fontSize: "14px", fontWeight: 300, color: "#adacac", marginTop: "4px", textAlign: "center", width: "100%" }}>
                          {metric.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function Counter({ target, isInView }: { target?: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const finalTarget = target ?? 0;
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * finalTarget));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span>{count}</span>;
}