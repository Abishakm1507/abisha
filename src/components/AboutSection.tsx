import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/profile.png";
import {
  FileHtml,
  FileCss,
  FileJs,
  Atom,
  Brain,
  Lightning,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: FileHtml, label: "HTML" },
  { icon: FileCss, label: "CSS" },
  { icon: FileJs, label: "JavaScript" },
  { icon: Atom, label: "React" },
  { icon: Lightning, label: "GSAP" },
  { icon: Brain, label: "AI / ML" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, filter: "blur(8px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 80%", end: "top 40%", scrub: false },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      }
    );

    const icons = section.querySelectorAll(".skill-icon");
    gsap.fromTo(
      icons,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: icons[0], start: "top 85%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-ring transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src={profileImg}
                  alt="Abisha - AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Passionate <span className="glow-text">AI Engineer</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              I specialize in building intelligent, visually stunning web applications.
              With expertise in AI/ML and modern frontend technologies, I create
              experiences that are both beautiful and functional. Every project is
              backed by clean code, clear communication, and a commitment to excellence.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-4">
              {skills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="skill-icon glass-card p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-all duration-300 group cursor-default"
                >
                  <Icon
                    size={28}
                    weight="light"
                    className="text-primary group-hover:text-foreground transition-colors duration-300"
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
