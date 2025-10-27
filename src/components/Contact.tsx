import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ResumeDownload } from "./ResumeDownload";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dgupta98@asu.edu",
      href: "mailto:dgupta98@asu.edu",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (623) 432-6768",
      href: "tel:+16234326768",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dipeshgupta09",
      href: "https://www.linkedin.com/in/dipeshgupta09/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Dipesh30",
      href: "https://github.com/Dipesh30",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">Get in Touch</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-lg text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm currently seeking AI/ML engineering or backend development roles. 
              Feel free to reach out if you'd like to discuss opportunities or collaborations!
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-4 sm:p-6 backdrop-blur-xl bg-white border-2 border-slate-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-slate-400 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="p-3 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-slate-700" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-600 mb-1">{item.label}</div>
                        <div className="text-slate-900">{item.value}</div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 text-slate-600 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Based in Phoenix, Arizona</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ResumeDownload 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  size="lg"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:dgupta98@asu.edu">
                    Send me an email
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
