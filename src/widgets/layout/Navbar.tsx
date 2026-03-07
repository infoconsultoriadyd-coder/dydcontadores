import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Análisis", href: "#analisis" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logoClass = isScrolled
    ? "text-2xl md:text-3xl font-bold text-blue-700 hover:text-blue-800 transition-colors"
    : "text-2xl md:text-3xl font-bold text-white hover:text-blue-200 transition-colors";

  const linkClass = isScrolled
    ? "text-sm lg:text-base text-blue-700 hover:text-blue-800 transition-colors font-medium"
    : "text-sm lg:text-base text-white hover:text-blue-200 transition-colors font-medium";

  const mobileButtonClass = isScrolled
    ? "md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
    : "md:hidden p-2 rounded-md hover:bg-white/10 transition-colors";

  const mobileIconClass = isScrolled ? "w-6 h-6 text-blue-700" : "w-6 h-6 text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className={`${logoClass} inline-flex items-center`}
          >
            <img src="/images/logo.png" alt="Logo D&D" className="h-12 w-auto max-w-[180px] sm:h-16 sm:max-w-[220px] md:h-20 md:max-w-none ..." />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={linkClass}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={mobileButtonClass}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className={mobileIconClass} />
            ) : (
              <Menu className={mobileIconClass} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
