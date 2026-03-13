import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Users, Award } from "lucide-react";

export function MetricsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    { icon: TrendingUp, label: "Records Migrated", value: 8, suffix: "M+", color: "#5eead4" },
    { icon: Zap, label: "Performance Boost", value: 30, suffix: "%", color: "#5eead4" },
    { icon: Users, label: "Records Architected", value: 133, suffix: "M+", color: "#5eead4" },
    { icon: Award, label: "Published Research", displayValue: "IEEE", color: "#5eead4" },
  ];

  return (
    <div ref={ref} className="py-8 sm:py-10 relative" style={{ background: "#0f1520" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-5 sm:p-6 rounded-2xl glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex justify-center mb-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#5eead4" }} />
                  </div>
                </div>
                <div style={{ fontSize: "48px", fontWeight: 600, color: "#eae5ec", lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {metric.displayValue ? (
                    metric.displayValue
                  ) : (
                    <>
                      <Counter target={metric.value} isInView={isInView} />
                      {metric.suffix}
                    </>
                  )}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 300, color: "#adacac", marginTop: "6px" }}>
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Counter({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span>{count}</span>;
}