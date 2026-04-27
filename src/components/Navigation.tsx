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
      const sections = ["home", "about", "experience", "hackathons", "projects", "trainings", "education", "contact"];
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
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Hackathons", id: "hackathons" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E8E5E0",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.04)" : "none",
        height: "72px",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none"
            aria-label="Go to home"
          >
            <Logo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: "36px" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative pb-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: activeSection === item.id ? "#92400E" : "#4A4A4A",
                  transition: "color 0.2s",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "#92400E", borderRadius: "1px" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(!isMobileMenuOpen); }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{ color: "#1A1A1A", WebkitTapHighlightColor: "transparent" }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: "400px", opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E5E0" }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => { e.stopPropagation(); scrollToSection(item.id); }}
                    className="flex items-center w-full text-left px-5 py-3"
                    style={{
                      color: activeSection === item.id ? "#92400E" : "#4A4A4A",
                      fontSize: "15px",
                      fontWeight: 500,
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
    </nav>
  );
}
