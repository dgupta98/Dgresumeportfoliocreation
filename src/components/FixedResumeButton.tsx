import { FileText } from "lucide-react";
import { motion } from "motion/react";

export function FixedResumeButton() {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1oZitNXp8Y4LehC7v9RD5XUWI7WsGzEU_/view?usp=sharing", "_blank");
  };

  return (
    <motion.button
      onClick={handleDownloadResume}
      className="fixed bottom-6 right-20 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full"
      style={{
        background: "rgba(10, 14, 23, 0.8)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(94,234,212,0.3)",
        color: "#5eead4",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "1px",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(94,234,212,0.2)",
        borderColor: "rgba(94,234,212,0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <FileText className="h-4 w-4" />
      <span className="hidden sm:inline">RESUME</span>
    </motion.button>
  );
}
