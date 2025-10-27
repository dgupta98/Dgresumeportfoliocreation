import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "projects", "trainings", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      // Prevent body scroll when menu is open
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
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Trainings", id: "trainings" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 ${
        isScrolled
          ? "shadow-2xl shadow-blue-500/10 border-b border-slate-800"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
            aria-label="Go to home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium">
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-lg border border-blue-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
                
                {/* Glow effect on active */}
                {activeSection === item.id && (
                  <motion.span
                    className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`relative ${
                isScrolled ? "text-slate-300" : "text-white"
              } hover:text-blue-400 hover:bg-slate-800 transition-colors touch-manipulation`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: "500px", opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-800 rounded-b-2xl max-w-full">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`flex items-center justify-between w-full text-left px-5 py-3.5 rounded-lg mx-2 transition-all duration-200 relative group touch-manipulation active:scale-98 ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                        : "text-slate-300 active:text-white active:bg-slate-800/50"
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    type="button"
                  >
                    <span className="relative z-10 font-medium">{item.label}</span>
                    
                    <ChevronRight 
                      className={`h-4 w-4 transition-all duration-300 ${
                        activeSection === item.id 
                          ? "text-blue-400 translate-x-1" 
                          : "text-slate-500 group-hover:translate-x-1 group-hover:text-slate-300"
                      }`}
                    />
                    
                    {/* Mobile active indicator */}
                    {activeSection === item.id && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"
                      />
                    )}
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
