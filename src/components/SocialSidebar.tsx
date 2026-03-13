import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function SocialSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { icon: Mail, href: "mailto:dipeshgupta2010@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16234326768", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dipeshgupta09/", label: "LinkedIn", external: true },
    { icon: Github, href: "https://github.com/Dipesh30", label: "GitHub", external: true },
  ];

  return (
    <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-5">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-[#adacac] hover:text-[#5eead4] transition-colors duration-300"
            aria-label={link.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={
              hoveredIndex === index
                ? { scale: 1.2 }
                : { scale: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className="w-[18px] h-[18px]" />
          </motion.a>
        );
      })}
    </div>
  );
}
