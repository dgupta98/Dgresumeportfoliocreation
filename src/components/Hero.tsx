import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { NeuralBackground } from "./NeuralBackground";
import { ResumeDownload } from "./ResumeDownload";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:dgupta98@asu.edu", label: "Email" },
    { icon: Phone, href: "tel:+16234326768", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dipeshgupta09/", label: "LinkedIn", external: true },
    { icon: Github, href: "https://github.com/Dipesh30", label: "GitHub", external: true },
  ];

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      <motion.div style={{ y, opacity }}>
        <NeuralBackground />
      </motion.div>
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-slate-600 rounded-full blur-3xl opacity-20"
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
        className="absolute bottom-20 right-20 w-32 h-32 bg-slate-500 rounded-full blur-3xl opacity-20"
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
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700 border border-slate-500 text-slate-100 text-sm mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4" />
              Published IEEE Researcher
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Dipesh Gupta
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI/ML Engineer | Backend Developer | Researcher
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Published IEEE researcher with 4+ years of experience in backend development, cloud computing, 
            and machine learning systems. Proven track record of delivering measurable results with expertise 
            in Python, Java, microservices architecture, and deep learning frameworks.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ResumeDownload 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              size="lg"
            />
            <Button
              onClick={() => scrollToSection("contact")}
              className="gap-2"
              size="lg"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 pt-4"
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
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
