import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section, { opacity: 0, filter: "blur(8px)" }, {
      opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    gsap.fromTo(imageRef.current, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 75%" },
    });

    gsap.fromTo(contentRef.current, { opacity: 0, x: 60 }, {
      opacity: 1, x: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 75%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div ref={imageRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-ring transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img src={profileImg} alt="Abisha K M - AI Engineer" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Passionate <span className="glow-text">AI Engineer</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4 text-justify">
              I'm a B.Tech student in Artificial Intelligence & Data Science at R.M.K Engineering College, passionate about building intelligent, visually stunning web applications. With hands-on experience in full-stack development and AI/ML, I create experiences that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-justify">
              I specialize in building AI-powered applications, from machine learning prediction systems to computer vision–based solutions. My work focuses on combining intelligent models with seamless user experiences, turning complex ideas into practical, real-world applications. I continuously explore new technologies, refine my skills, and strive to create impactful solutions that solve meaningful problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
