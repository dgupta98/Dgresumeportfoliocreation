import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { NeuralBackground } from "./NeuralBackground";
import { ResumeDownload } from "./ResumeDownload";
import { useRef } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { TypingEffect } from "./TypingEffect";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const socialLinks = [
    { icon: Mail, href: "mailto:dipeshgupta2010@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16234326768", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dipeshgupta09/", label: "LinkedIn", external: true },
    { icon: Github, href: "https://github.com/Dipesh30", label: "GitHub", external: true },
  ];

  const roles = [
    "AI/ML Engineer",
    "Backend Developer",
    "IEEE Researcher",
    "Cloud Architect",
    "Full Stack Developer"
  ];

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden pt-16 lg:pt-20">
      <motion.div style={{ y, opacity }}>
        <NeuralBackground />
      </motion.div>
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Enhanced floating particles with more colors */}
      <motion.div
        className="absolute top-20 left-10 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-500 rounded-full blur-3xl opacity-15"
        animate={{
          y: [0, 25, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-100 text-sm sm:text-base mb-4 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.6)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              <span className="relative z-10">Published IEEE Researcher</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent px-2 animate-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Dipesh Gupta
            </motion.h1>
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypingEffect 
                texts={roles}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Published IEEE researcher with 4+ years of experience in backend development, cloud computing, 
            and machine learning systems. Proven track record of delivering measurable results with expertise 
            in Python, Java, microservices architecture, and deep learning frameworks.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ResumeDownload 
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-blue-500/30 animate-gradient"
                size="lg"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-lg shadow-blue-500/20 backdrop-blur-sm bg-blue-950/30 relative overflow-hidden group"
                size="lg"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-5 sm:gap-6 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm relative group overflow-hidden"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}