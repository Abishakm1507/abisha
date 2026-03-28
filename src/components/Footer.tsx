import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, Heart, FileArrowDown } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    gsap.fromTo(footer.children, { opacity: 0, y: 40, filter: "blur(6px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.8,
      scrollTrigger: { trigger: footer, start: "top 95%" },
    });
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t border-border px-6 md:px-12 py-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-orb w-32 h-32 bg-glow-primary top-0 left-1/4 opacity-10" />
        <div className="float-orb w-24 h-24 bg-glow-secondary top-4 right-1/3 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>© 2026 Made with</span>
          <Heart size={14} weight="fill" className="text-primary" />
          <span>by <span className="glow-text font-semibold">Abisha</span></span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {["Home", "About", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">{link}</a>
          ))}
        </div>

        <div className="flex gap-4">
          <a href="https://ik.imagekit.io/ulajgq5pme/ABISHA%20K%20M.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Resume">
            <FileArrowDown size={20} weight="light" />
          </a>
          <a href="https://github.com/Abishakm1507/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <GithubLogo size={20} weight="light" />
          </a>
          <a href="https://www.linkedin.com/in/abisha-k-m-4a4906290/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <LinkedinLogo size={20} weight="light" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
