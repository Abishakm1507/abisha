import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, ArrowUpRight, X } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Impacteers, Chennai",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Built a real-time chat application using React, Next.js, Node.js, PostgreSQL, and WebSocket",
      "Implemented JWT authentication with role-based authorization",
      "Optimized API performance using JMeter for load testing",
      "Authored technical documentation and deployment guides",
    ],
    details: "Worked as a full-stack developer building production-grade applications with modern web technologies. Focused on real-time communication systems, secure authentication flows, and performance optimization. Collaborated with cross-functional teams to deliver scalable solutions.",
  },
  {
    role: "AI Engineer",
    company: "TechSaksham",
    period: "Dec 2024 – Jan 2025",
    highlights: [
      "Developed CNN-based Plant Disease Detection system achieving 97% accuracy",
      "Applied image preprocessing and augmentation techniques",
      "Built an interactive Streamlit web interface for deployment",
    ],
    details: "Designed and trained convolutional neural networks for agricultural image classification. Implemented data augmentation pipelines to improve model robustness. Deployed the solution as an accessible web application for real-world use by farmers and agricultural researchers.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bharat Intern",
    period: "Aug 2024 – Sep 2024",
    highlights: [
      "Built secure web applications using HTML, CSS, JavaScript, Node.js, and MongoDB",
      "Created a registration system and personal finance tracker",
      "Implemented full CRUD functionality across applications",
    ],
    details: "Developed multiple full-stack web applications with emphasis on security and user experience. Built RESTful APIs with Node.js and MongoDB backend. Implemented user authentication, data validation, and responsive frontend interfaces.",
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector(".exp-title"), { opacity: 0, y: 40, filter: "blur(8px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    gsap.fromTo(section.querySelectorAll(".exp-card"), { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 70%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="exp-title mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work <span className="glow-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card relative md:pl-16">
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background z-10 hidden md:block" />
                <div className="glass-card p-6 hover:border-primary/40 transition-all duration-500 cursor-pointer group" onClick={() => setSelected(i)}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <Briefcase size={20} weight="light" className="text-primary" />
                      <h3 className="text-foreground font-semibold">{exp.role}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wide">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary/80 mb-3 font-light">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[6px]">●</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View details <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <div className="glass-card max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"><X size={20} /></button>
            <Briefcase size={28} weight="light" className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-1">{experiences[selected].role}</h3>
            <p className="text-sm text-primary/80 mb-1">{experiences[selected].company}</p>
            <p className="text-xs text-muted-foreground mb-4">{experiences[selected].period}</p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{experiences[selected].details}</p>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Contributions</h4>
            <ul className="space-y-1.5">
              {experiences[selected].highlights.map((h, j) => (
                <li key={j} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-[6px]">●</span>{h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
