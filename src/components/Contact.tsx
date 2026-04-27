import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1oZitNXp8Y4LehC7v9RD5XUWI7WsGzEU_/view?usp=sharing", "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[700px] mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "clamp(40px, 6vw, 60px)", fontWeight: 400, color: "#1A1A1A",  }}>
            Get in touch
          </h2>
          <p className="mx-auto mt-3" style={{ fontSize: "18px", color: "#4A4A4A", maxWidth: "500px", lineHeight: 1.7 }}>
            I'm currently seeking AI/ML engineering or backend development roles. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact items */}
        <motion.div className="mt-10 space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          {[
            { icon: Mail, label: "dipeshgupta2010@gmail.com", href: "mailto:dipeshgupta2010@gmail.com" },
            { icon: Phone, label: "+1 (623) 432-6768", href: "tel:+16234326768" },
            { icon: MapPin, label: "Phoenix, Arizona", href: null },
          ].map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <div key={i} className="flex items-center justify-center gap-3 py-3 transition-colors" style={{ color: "#4A4A4A" }}>
                <Icon className="h-5 w-5" style={{ color: "#92400E" }} />
                <span style={{ fontSize: "16px" }}>{item.label}</span>
              </div>
            );
            return item.href ? <a key={i} href={item.href} className="block hover:text-[#92400E]">{inner}</a> : inner;
          })}
        </motion.div>

        {/* Social links */}
        <motion.div className="flex items-center justify-center gap-6 mt-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/dipeshgupta09/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Dipesh30", label: "GitHub" },
          ].map((link, i) => {
            const Icon = link.icon;
            return (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors" style={{ color: "#8A8A8A", fontSize: "15px" }}>
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <button onClick={handleDownloadResume} className="flex items-center gap-2 px-7 py-3 rounded-full"
            style={{ background: "#92400E", color: "#FFFFFF", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer" }}>
            <Download className="h-4 w-4" /> Download Resume
          </button>
          <a href="mailto:dipeshgupta2010@gmail.com" className="flex items-center gap-2 px-7 py-3 rounded-full"
            style={{ border: "1.5px solid #92400E", color: "#92400E", fontWeight: 600, fontSize: "15px" }}>
            <Mail className="h-4 w-4" /> Send me an email
          </a>
        </motion.div>

        <div className="mt-12">
          <p style={{ fontSize: "14px", color: "#8A8A8A" }}>
            Designed and Developed by <span style={{ color: "#92400E" }}>Dipesh Gupta</span>
          </p>
          <p style={{ fontSize: "13px", color: "#8A8A8A", opacity: 0.5, marginTop: "4px" }}>&copy; 2026</p>
        </div>
      </div>
    </section>
  );
}
