import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Database, Code, Award } from "lucide-react";

export function MetricsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    { icon: Database, label: "Records Processed", value: 133, suffix: "M+", color: "text-blue-600" },
    { icon: Code, label: "Models Deployed", value: 5, suffix: "+", color: "text-purple-600" },
    { icon: Award, label: "Research Papers", value: 1, suffix: "", color: "text-green-600" },
  ];

  return (
    <div ref={ref} className="py-8 sm:py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 sm:p-4 rounded-full bg-white shadow-lg ${metric.color}`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <motion.div
                  className={`text-3xl sm:text-4xl ${metric.color} mb-2`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                >
                  <Counter target={metric.value} isInView={isInView} />
                  {metric.suffix}
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-600">{metric.label}</div>
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
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span>{count}</span>;
}
