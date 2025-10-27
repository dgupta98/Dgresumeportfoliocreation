import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const highlights = [
    {
      icon: TrendingUp,
      label: "8M+ Records",
      description: "Zero-downtime cloud migration",
    },
    {
      icon: Zap,
      label: "30% Faster",
      description: "Database performance improvement",
    },
    {
      icon: Users,
      label: "133M+ Records",
      description: "Data infrastructure architected",
    },
    {
      icon: Award,
      label: "IEEE Published",
      description: "Research in DeepFake Detection",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(71,85,105,0.1),transparent_50%)]"
        style={{ y }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">About Me</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div 
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-slate-300 leading-relaxed text-justify text-base sm:text-lg">
                I'm an AI/ML engineer and backend developer with a passion for building scalable, 
                data-driven solutions. Currently pursuing my Master's in Software Engineering at 
                Arizona State University, I bring over 4 years of industry experience in delivering 
                high-impact projects.
              </p>
              <p className="text-slate-300 leading-relaxed text-justify text-base sm:text-lg">
                My expertise spans across machine learning systems, cloud migrations, microservices 
                architecture, and data infrastructure. I've led enterprise-scale migrations, 
                architected solutions handling 133M+ records, and published research in deep learning.
              </p>
              <p className="text-slate-300 leading-relaxed text-justify text-base sm:text-lg">
                I'm passionate about leveraging AI and scalable backend systems to solve complex 
                problems and drive measurable business impact.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5"
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="p-4 sm:p-5 lg:p-6 backdrop-blur-xl bg-white border-2 border-slate-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 h-full">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl w-fit mb-2 sm:mb-3">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-700" />
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg text-slate-900 mb-1">{item.label}</div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-snug">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
