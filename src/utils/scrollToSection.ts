/**
 * Scrolls to a section by ID, handling lazy-loaded components
 * @param id - The ID of the section to scroll to
 */
export function scrollToSection(id: string) {
  const scrollToElement = () => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      return true;
    }
    return false;
  };
  
  // Try to scroll immediately
  if (!scrollToElement()) {
    // If element not found (lazy-loaded), scroll to bottom to trigger lazy loading
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
    
    // Wait for lazy load and then scroll to the actual element
    setTimeout(() => {
      scrollToElement();
    }, 500);
  }
}
