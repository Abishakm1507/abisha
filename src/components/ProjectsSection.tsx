import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@phosphor-icons/react";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { img: project1, title: "3D Interactive Web", desc: "Email platform with Spline 3D integration", tech: ["React", "Spline", "GSAP"] },
  { img: project2, title: "Gaming UI Platform", desc: "Next-level 3D gaming interface design", tech: ["React", "Three.js", "Tailwind"] },
  { img: project3, title: "3D Portfolio", desc: "Immersive developer portfolio with 3D elements", tech: ["CSS", "JS", "Spline"] },
  { img: project4, title: "Gaming Website", desc: "Dynamic gaming landing page with animations", tech: ["HTML", "CSS", "JavaScript"] },
  { img: project5, title: "Animation Tools", desc: "Web animation showcase with Spline & GSAP", tech: ["React", "GSAP", "Tailwind"] },
  { img: project6, title: "Animated Portfolio", desc: "Creative developer portfolio with smooth animations", tech: ["CSS", "JS", "GSAP"] },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    // Title animation
    gsap.fromTo(
      section.querySelector(".projects-title"),
      { opacity: 0, y: 40, filter: "blur(8px)" },
      {
        opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );

    // Cards stagger
    const cards = container.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="projects-title mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="glow-text">Projects</span>
          </h2>
        </div>

        {/* Scrollable on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card glass-card min-w-[300px] md:min-w-0 snap-center group cursor-pointer overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow-sm)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    weight="light"
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-1"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-light mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
