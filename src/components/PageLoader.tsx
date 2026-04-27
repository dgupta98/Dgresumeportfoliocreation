import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.9 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "#FAFAF8" }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="flex flex-col items-center">
        <span style={{ fontSize: "32px", color: "#1A1A1A", fontWeight: 400 }}>
          DG
        </span>
        <div className="w-32 h-[2px] rounded-full mt-4 overflow-hidden" style={{ background: "#E8E5E0" }}>
          <motion.div className="h-full" style={{ background: "#92400E" }}
            initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "easeOut" }} />
        </div>
      </div>
    </motion.div>
  );
}
