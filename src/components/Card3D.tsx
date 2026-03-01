import { motion } from "motion/react";
import { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        variants={{
          initial: { rotateX: 0, rotateY: 0 },
          hover: { rotateX: 0, rotateY: 0 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        }}
        style={{
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
