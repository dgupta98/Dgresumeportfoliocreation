import { Sparkles, Download, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { TypingEffect } from "./TypingEffect";
import avatarImg from "figma:asset/d7cd8b762ad97523a6f2be370587295278a7bc43.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const roles = [
    "AI/ML Engineer",
    "Backend Developer",
    "IEEE Researcher",
    "Cloud Architect",
    "Full Stack Developer",
  ];

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1oZitNXp8Y4LehC7v9RD5XUWI7WsGzEU_/view?usp=sharing", "_blank");
  };

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#0a0e17" }}
    >
      {/* Ambient Orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          top: "5%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(34,211,238,0.2), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full"
        style={{
          bottom: "10%",
          right: "-3%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          top: "50%",
          left: "15%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left - Introduction */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* IEEE Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full relative overflow-hidden"
              style={{
                background: "rgba(94,234,212,0.15)",
                border: "1px solid rgba(94,234,212,0.4)",
                fontSize: "14px",
                color: "#5eead4",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <Sparkles className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Published IEEE Researcher</span>
            </motion.div>

            {/* Hello text */}
            <motion.p
              style={{
                fontSize: "clamp(24px, 4vw, 35px)",
                fontWeight: 300,
                letterSpacing: "2px",
                color: "#5eead4",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello! I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              style={{
                fontSize: "clamp(40px, 6vw, 60px)",
                fontWeight: 500,
                letterSpacing: "2px",
                lineHeight: "1.1",
                color: "#eae5ec",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              DIPESH
              <br />
              GUPTA
            </motion.h1>
          </motion.div>

          {/* Center - Decorative element */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center flex-1 lg:-ml-44 xl:-ml-52"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Stylized avatar area with glow */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center lg:-translate-x-16 xl:-translate-x-20">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid rgba(94,234,212,0.3)",
                  boxShadow: "0 0 40px rgba(94,234,212,0.15), inset 0 0 40px rgba(94,234,212,0.05)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[280px] h-[280px] rounded-full"
                style={{
                  border: "1px dashed rgba(94,234,212,0.2)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Avatar image */}
              <div className="relative z-10 w-[260px] h-[260px] rounded-full overflow-hidden">
                <img
                  src={avatarImg}
                  alt="Dipesh Gupta Avatar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Cyan glow at bottom */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[250px] h-[80px]"
                style={{
                  background: "radial-gradient(ellipse, rgba(34,211,238,0.4), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </motion.div>

          {/* Right - Typing roles */}
          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="min-h-[3rem]"
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 600,
              }}
            >
              <TypingEffect
                texts={roles}
                className="bg-gradient-to-r from-[#5eead4] to-[#22d3ee] bg-clip-text text-transparent"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </div>
          </motion.div>
        </div>

        {/* Bio paragraph - centered below */}
        <motion.p
          className="text-center mx-auto mt-12"
          style={{
            maxWidth: "700px",
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#adacac",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Published IEEE researcher with 4+ years of experience in backend development, cloud computing,
          and machine learning systems. Proven track record of delivering measurable results with expertise
          in Python, Java, microservices architecture, and deep learning frameworks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-7 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #5eead4, #14b8a6)",
              color: "#0a0e17",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.5px",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(94,234,212,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2 px-7 py-3 rounded-full"
            style={{
              background: "transparent",
              border: "1.5px solid #5eead4",
              color: "#5eead4",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.5px",
            }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(94,234,212,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-5 h-5" style={{ color: "#adacac" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}