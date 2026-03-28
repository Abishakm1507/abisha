import { useState, useEffect, useRef } from "react";
import { List, X } from "@phosphor-icons/react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("a"),
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, stagger: 0.08, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (isOpen) handleClose();
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl font-bold glow-text tracking-tight">
            Abisha
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="glow-button text-sm !px-6 !py-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-foreground p-2"
            aria-label="Open menu"
          >
            <List size={24} weight="light" />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          style={{ transform: "translateX(100%)" }}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-foreground p-2"
            aria-label="Close menu"
          >
            <X size={28} weight="light" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-light text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="glow-button mt-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
