import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, Envelope, MapPin } from "@phosphor-icons/react";
import { FileArrowDown } from "@phosphor-icons/react/dist/ssr/FileArrowDown";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.children,
      { opacity: 0, y: 40, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.12,
        duration: 0.8,
        scrollTrigger: {
          trigger: footer,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-border px-6 md:px-12 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="glow-text font-semibold">Abisha</span>. All rights reserved.
        </div>

        {/* Center - Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">

          <div className="flex items-center gap-2">
            <Envelope size={16} />
            <a
              href="mailto:abishakm1507@gmail.com"
              className="hover:text-primary transition-colors"
            >
              abishakm1507@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Chennai, India</span>
          </div>

        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <a href="https://ik.imagekit.io/ulajgq5pme/ABISHA%20K%20M.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Resume">
            <FileArrowDown size={20} weight="light" />
          </a>
          <a
            href="https://github.com/Abishakm1507/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubLogo size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/abisha-k-m-4a4906290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinLogo size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;