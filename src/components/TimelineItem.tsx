import { ReactNode } from "react";
import { motion } from "motion/react";

interface TimelineItemProps {
  children: ReactNode;
  icon: ReactNode;
  isLast?: boolean;
  index?: number;
}

export function TimelineItem({ children, icon, isLast = false, index = 0 }: TimelineItemProps) {
  return (
    <motion.div 
      className="relative flex gap-4 sm:gap-6 md:gap-8 group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline line and node */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Icon node */}
        <motion.div 
          className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
        >
          <div className="text-white">{icon}</div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500" />
        </motion.div>
        
        {/* Vertical line */}
        {!isLast && (
          <motion.div 
            className="w-0.5 h-full bg-gradient-to-b from-blue-400 to-blue-200 mt-2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          />
        )}
      </div>
      
      {/* Content */}
      <motion.div 
        className="flex-1 pb-12"
        whileHover={{ 
          x: 10,
          transition: { duration: 0.3 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
