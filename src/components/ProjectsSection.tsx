import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "@phosphor-icons/react";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { img: project1, title: "3D Interactive Web", desc: "Email platform with Spline 3D integration", tech: ["React", "Spline", "GSAP"], details: "A cutting-edge email platform featuring immersive 3D elements powered by Spline. The interface combines smooth GSAP animations with interactive 3D models to create an engaging user experience." },
  { img: project2, title: "Gaming UI Platform", desc: "Next-level 3D gaming interface design", tech: ["React", "Three.js", "Tailwind"], details: "A modern gaming platform UI built with Three.js for stunning 3D graphics. Features responsive layouts with Tailwind CSS and smooth transitions for an immersive gaming experience." },
  { img: project3, title: "3D Portfolio", desc: "Immersive developer portfolio with 3D elements", tech: ["CSS", "JS", "Spline"], details: "An immersive portfolio website showcasing development work through interactive 3D scenes. Built with vanilla technologies enhanced by Spline for 3D model integration." },
  { img: project4, title: "Gaming Website", desc: "Dynamic gaming landing page with animations", tech: ["HTML", "CSS", "JavaScript"], details: "A dynamic landing page for a gaming brand featuring smooth scroll animations, parallax effects, and engaging visual storytelling through pure HTML, CSS, and JavaScript." },
  { img: project5, title: "Animation Tools", desc: "Web animation showcase with Spline & GSAP", tech: ["React", "GSAP", "Tailwind"], details: "A showcase platform demonstrating advanced web animation techniques using GSAP and Spline. Features timeline-based animations, scroll-triggered effects, and interactive 3D elements." },
  { img: project6, title: "Animated Portfolio", desc: "Creative developer portfolio with smooth animations", tech: ["CSS", "JS", "GSAP"], details: "A creative portfolio with smooth page transitions and scroll-based animations. Every interaction is carefully crafted with GSAP to create a memorable browsing experience." },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    gsap.fromTo(section.querySelector(".projects-title"), { opacity: 0, y: 40, filter: "blur(8px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    gsap.fromTo(container.querySelectorAll(".project-card"), { opacity: 0, y: 60, scale: 0.9 }, {
      opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: container, start: "top 80%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="projects-title mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="glow-text">Projects</span>
          </h2>
        </div>

        <div ref={scrollContainerRef} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: "none" }}>
          {projects.map((project, i) => (
            <div key={i} className="project-card glass-card min-w-[300px] md:min-w-0 snap-center group cursor-pointer overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2" onClick={() => setSelected(i)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow-sm)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight size={18} weight="light" className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground font-light mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <div className="glass-card max-w-lg w-full p-0 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 text-foreground/80 hover:text-foreground transition-colors bg-background/50 rounded-full p-1"><X size={20} /></button>
            <div className="aspect-video">
              <img src={projects[selected].img} alt={projects[selected].title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{projects[selected].title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{projects[selected].details}</p>
              <div className="flex flex-wrap gap-2">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
