import { Sparkles, Download } from "lucide-react";
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
      className="flex items-center justify-center relative overflow-hidden"
      style={{ background: "#FAFAF8", minHeight: "calc(100vh - 72px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-start"
            style={{ gap: "220px" }}>
          {/* Left - Introduction */}
          <motion.div
            className="text-left space-y-5 flex-1"
            style={{ maxWidth: 580 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* IEEE Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(146,64,14,0.12)",
                border: "1px solid rgba(146,64,14,0.25)",
                fontSize: "16px",
                color: "#92400E",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="h-5 w-5" />
              <span>Published IEEE Researcher</span>
            </motion.div>

            {/* Hello text */}
            <p style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, color: "#8A8A8A" }}>
              Hello, I'm
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: "clamp(48px, 5.5vw, 74px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#1A1A1A",
              whiteSpace: "nowrap",
            }}>
              Dipesh Gupta
            </h1>

            {/* Typing effect */}
            <div className="min-h-[3.5rem]" style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 500 }}>
              <TypingEffect
                texts={roles}
                className="text-[#92400E]"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </div>

            {/* Bio */}
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.8, color: "#4A4A4A", maxWidth: "560px" }}>
              I build backend systems and ML pipelines that handle millions of records without breaking a sweat. Published in IEEE, currently at ASU for my Master's.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-3 justify-start">
              <motion.button
                onClick={handleDownloadResume}
                className="flex items-center gap-3 rounded-full"
                style={{
                  background: "#92400E",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                  whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("hackathons")}
                className="flex items-center gap-3 rounded-full"
                style={{
                  background: "transparent",
                  border: "1.5px solid #92400E",
                  color: "#92400E",
                  fontWeight: 600,
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                  whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(146,64,14,0.08)" }}
                whileTap={{ scale: 0.98 }}
              >
                See What I've Built
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Avatar */}
          <motion.div
            className="flex-shrink-0 relative flex items-center justify-center"
            style={{ width: 500, height: 500 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Warm glow blob behind avatar */}
            <div
              className="absolute rounded-full"
              style={{
                width: 440, height: 440,
                background: "radial-gradient(circle, rgba(146,64,14,0.13) 0%, rgba(250,250,248,0) 70%)",
                filter: "blur(36px)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Outer rotating ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 480, height: 480,
                top: "50%", left: "50%",
                marginTop: -240, marginLeft: -240,
                border: "1px solid rgba(146,64,14,0.14)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner rotating dashed ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 395, height: 395,
                top: "50%", left: "50%",
                marginTop: -197, marginLeft: -197,
                border: "1px dashed rgba(146,64,14,0.09)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating avatar */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Avatar circle container */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  boxShadow: "0 16px 56px rgba(146,64,14,0.16), 0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={avatarImg}
                  alt="Dipesh Gupta"
                  className="w-full h-full object-cover object-center"
                />
                {/* Edge fade overlay */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, transparent 52%, rgba(250,250,248,0.6) 72%, rgba(250,250,248,0.95) 90%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>

            {/* Floating accent dots */}
            <motion.div
              className="absolute rounded-full z-20"
              style={{ width: 13, height: 13, background: "#92400E", top: 65, right: 55, opacity: 0.75 }}
              animate={{ y: [0, -9, 0], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
              className="absolute rounded-full z-20"
              style={{ width: 8, height: 8, background: "#92400E", bottom: 85, left: 50, opacity: 0.4 }}
              animate={{ y: [0, 7, 0], opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
              className="absolute rounded-full z-20"
              style={{ width: 6, height: 6, background: "#92400E", top: 140, left: 35, opacity: 0.3 }}
              animate={{ y: [0, -5, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
