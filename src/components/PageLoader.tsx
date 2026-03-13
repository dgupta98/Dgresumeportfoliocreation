import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "#0a0e17" }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <motion.path
              d="M60 10L105 35V85L60 110L15 85V35L60 10Z"
              stroke="url(#lg1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 25L95 45V75L60 95L25 75V45L60 25Z"
              stroke="url(#lg2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lg1" x1="15" y1="10" x2="105" y2="110">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <linearGradient id="lg2" x1="25" y1="25" x2="95" y2="95">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#5eead4] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="text-sm mt-8 text-center tracking-[2px] uppercase"
          style={{ color: "#adacac" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Loading Portfolio
        </motion.p>

        <div className="w-48 h-[2px] rounded-full mt-4 overflow-hidden mx-auto" style={{ background: "#1a1f2e" }}>
          <motion.div
            className="h-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
