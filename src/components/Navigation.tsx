import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import { scrollToSection as scrollToSectionUtil } from "../utils/scrollToSection";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "experience", "projects", "trainings", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    scrollToSectionUtil(id);
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled
          ? "rgba(10, 14, 23, 0.85)"
          : "linear-gradient(0deg, transparent, #0a0e17 70%)",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        height: isScrolled ? "70px" : "100px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none"
            aria-label="Go to home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo />
          </motion.button>

          {/* Center Email - hidden on mobile */}
          <div className="hidden lg:block">
            <a
              href="mailto:dipeshgupta2010@gmail.com"
              className="text-[#ccc] hover:text-[#5eead4] transition-colors duration-300"
              style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "1px" }}
            >
              dipeshgupta2010@gmail.com
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative overflow-hidden group"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: activeSection === item.id ? "#5eead4" : "#ccc",
                  transition: "color 0.3s",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: "#5eead4" }}
              >
                <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                  style={{ color: "#5eead4" }}
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-[#ccc] hover:text-[#5eead4] transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: "500px", opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 rounded-b-2xl" style={{ background: "#0a0e17", borderTop: "1px solid #363636" }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    className="flex items-center w-full text-left px-5 py-3.5 transition-all duration-200"
                    style={{
                      color: activeSection === item.id ? "#5eead4" : "#ccc",
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
