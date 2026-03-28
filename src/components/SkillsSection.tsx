import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Browser, Database, Brain } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    icon: Browser,
    title: "Frontend Technologies",
    skills: ["React", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "scikit-learn", "NLP", "LLMs"],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector(".skills-title"), { opacity: 0, y: 40, filter: "blur(8px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    gsap.fromTo(section.querySelectorAll(".skill-category"), { opacity: 0, y: 50, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 70%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="skills-title mb-12 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical <span className="glow-text">Skills</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category glass-card p-6 hover:border-primary/40 transition-all duration-500 group">
              <cat.icon size={32} weight="light" className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-foreground font-semibold mb-4 text-sm tracking-wide">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
