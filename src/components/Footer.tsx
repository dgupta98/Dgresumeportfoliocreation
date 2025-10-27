export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm">
            © {currentYear} Dipesh Gupta. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React, Tailwind CSS & Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
