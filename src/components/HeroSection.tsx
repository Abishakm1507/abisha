import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GithubLogo, LinkedinLogo, FileArrowDown } from "@phosphor-icons/react";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });
    tl.fromTo(headlineRef.current, { opacity: 0, y: 50, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" });
    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
    tl.fromTo(ctaRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

    if (orbsRef.current) {
      orbsRef.current.querySelectorAll(".float-orb").forEach((orb, i) => {
        gsap.to(orb, { y: -20 + i * 5, x: 10 - i * 8, duration: 3 + i * 0.5, repeat: -1, yoyo: true, ease: "power1.inOut" });
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe src="https://my.spline.design/orbscrolltriggerforhero-omTp1cYstbFesH2IQkvUBygy/" frameBorder="0" width="100%" height="100%" className="absolute inset-0" style={{ pointerEvents: "none" }} title="3D Background" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div ref={orbsRef} className="absolute inset-0 z-[1] pointer-events-none">
        <div className="float-orb w-80 h-80 bg-glow-primary top-[10%] right-[10%]" />
        <div className="float-orb w-64 h-64 bg-glow-secondary bottom-[20%] left-[5%]" />
        <div className="float-orb w-48 h-48 bg-glow-accent top-[60%] right-[30%]" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">✦ Introducing</p>
          <h1 ref={headlineRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] opacity-0">
            <span className="text-foreground">Hi, I'm </span>
            <span className="glow-text">Abisha</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg font-light leading-relaxed opacity-0">
            AI Engineer & Full Stack Developer crafting intelligent digital experiences through innovative design and cutting-edge technology.
          </p>
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-10 opacity-0">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="glow-button inline-flex items-center gap-2 animate-pulse-glow">
              Hire Me
            </a>
            <a href="https://ik.imagekit.io/ulajgq5pme/ABISHA%20K%20M.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-primary/50 transition-all duration-300 text-sm font-medium">
              <FileArrowDown size={18} weight="light" />
              Download Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/Abishakm1507/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <GithubLogo size={24} weight="light" />
              </a>
              <a href="https://www.linkedin.com/in/abisha-k-m-4a4906290/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <LinkedinLogo size={24} weight="light" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
