import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink, Download } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1oZitNXp8Y4LehC7v9RD5XUWI7WsGzEU_/view?usp=sharing", "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 60px)",
            fontWeight: 400,
            textTransform: "uppercase",
            color: "#eae5ec",
            letterSpacing: "2px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            GET IN TOUCH
          </h2>
          <p className="mx-auto mt-4" style={{
            fontSize: "18px",
            color: "#adacac",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}>
            I'm currently seeking AI/ML engineering or backend development roles.
            Feel free to reach out if you'd like to discuss opportunities or collaborations!
          </p>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 - Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "4px", color: "#5eead4", marginBottom: "24px", fontWeight: 600 }}>
              Contact Details
            </p>
            <div className="space-y-5">
              {[
                {
                  label: "Email",
                  value: "dipeshgupta2010@gmail.com",
                  href: "mailto:dipeshgupta2010@gmail.com",
                  icon: <Mail className="h-6 w-6" style={{ color: "#5eead4" }} />,
                },
                {
                  label: "Phone",
                  value: "+1 (623) 432-6768",
                  href: "tel:+16234326768",
                  icon: <Phone className="h-6 w-6" style={{ color: "#5eead4" }} />,
                },
                {
                  label: "Location",
                  value: "Phoenix, Arizona",
                  href: null,
                  icon: <MapPin className="h-6 w-6" style={{ color: "#5eead4" }} />,
                },
              ].map((item, i) => {
                const content = (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                    style={{
                      background: "rgba(94,234,212,0.04)",
                      border: "1px solid rgba(94,234,212,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(94,234,212,0.08)";
                      e.currentTarget.style.borderColor = "rgba(94,234,212,0.25)";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(94,234,212,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(94,234,212,0.04)";
                      e.currentTarget.style.borderColor = "rgba(94,234,212,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                      style={{
                        background: "rgba(94,234,212,0.12)",
                        border: "1px solid rgba(94,234,212,0.25)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#5eead4", marginBottom: "4px", fontWeight: 500 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: "17px", color: "#eae5ec", fontWeight: 400 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} className="block" style={{ textDecoration: "none" }}>
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </motion.div>

          {/* Column 2 - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#5eead4", marginBottom: "16px" }}>
              Social
            </p>
            <div className="space-y-4">
              {[
                { label: "linkedin.com/in/dipeshgupta09", href: "https://www.linkedin.com/in/dipeshgupta09/" },
                { label: "github.com/Dipesh30", href: "https://github.com/Dipesh30" },
                { label: "dipeshgupta2010@gmail.com", href: "mailto:dipeshgupta2010@gmail.com" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-3 group"
                  style={{
                    borderBottom: "1px solid #363636",
                    fontSize: "16px",
                    color: "#eae5ec",
                    transition: "all 0.3s",
                  }}
                >
                  <span className="group-hover:text-[#5eead4] transition-colors">{link.label}</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#5eead4" }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - CTA & Credits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #5eead4, #14b8a6)",
                color: "#0a0e17",
                fontWeight: 600,
                fontSize: "15px",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(94,234,212,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.button>

            <motion.a
              href="mailto:dipeshgupta2010@gmail.com"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full"
              style={{
                border: "1.5px solid #5eead4",
                color: "#5eead4",
                fontWeight: 600,
                fontSize: "15px",
                display: "flex",
              }}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(94,234,212,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              Send me an email
            </motion.a>

            <div className="pt-6 text-center">
              <p style={{ fontSize: "16px", color: "#adacac" }}>
                Designed and Developed by{" "}
                <span style={{ color: "#5eead4" }}>Dipesh Gupta</span>
              </p>
              <p style={{ fontSize: "14px", color: "#adacac", opacity: 0.5, marginTop: "4px" }}>
                &copy; 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}