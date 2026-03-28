import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Medal, Certificate, ArrowUpRight, X, GraduationCap } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: Trophy, place: "1st Place", title: "AI in Education Hackathon", org: "Impacteers, 19 Apr 2025", project: "MindSpark – Gamified Kids Learning Platform", team: "Sasiya Elangovan, Sangeetha K", details: "Developed an innovative gamified learning platform for children that leverages AI to personalize educational content. The platform adapts difficulty levels based on student performance and engagement metrics." },
  { icon: Medal, place: "Finalist", title: "HackWithMagnus 2026", org: "Chennai Institute of Technology, 2 Feb 2026", project: "VitalsLens", team: "Divya K", details: "Built VitalsLens, a health monitoring solution that uses computer vision to extract vital signs from video feeds. Competed against top teams and reached the finals." },
  { icon: Trophy, place: "3rd Place", title: "GRITX 8.0 – WEB VIBE", org: "Sri Sairam Engineering College", project: "", team: "Kaviya Priya Sivananthan", details: "Competed in the WEB VIBE web development challenge, building a modern web application under time constraints and securing 3rd place." },
  { icon: Medal, place: "Top 21 / 100+ teams", title: "Innovate-X National Hackathon", org: "SSN College of Engineering", project: "SignSpeak – AI Sign Language Interpreter", team: "Austin Joe T, Barath Kumar S", details: "Developed SignSpeak, an AI-powered sign language interpreter that translates sign language gestures to text and speech in real-time using deep learning models." },
  { icon: Medal, place: "Runner-Up", title: "DesignX – UI/UX Challenge", org: "Avinyaa'25, RMD Engineering College, 17 Mar 2025", project: "", team: "Kavya S", details: "Designed intuitive user interfaces and presented compelling UX solutions in a competitive design challenge." },
  { icon: Certificate, place: "Participant", title: "NeXathon'25", org: "VIT Chennai, 10–11 Feb 2025", project: "SereniFI – Mental Health Platform", team: "Harshini S, Divya Priya, Tarun", details: "Built SereniFI, a mental health platform offering mood tracking, guided meditation, and AI-powered emotional support chatbot." },
  { icon: Certificate, place: "Participant", title: "ImpactX 2.0", org: "St. Joseph's Institute of Technology, 24–25 Jan 2025", project: "Gamified Mental Health Platform", team: "Harshini S, Divya Priya, Surya Shree", details: "Created a gamified approach to mental health support, encouraging positive habits through reward systems and community engagement." },
];

const certifications = [
  "Oracle Cloud AI Foundations Associate",
  "Oracle Data Science Professional",
  "Oracle AI Vector Search Professional",
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "JLPT N5 – Japanese Language",
  "Cloud Computing",
];

const education = [
  { degree: "B.Tech in Artificial Intelligence & Data Science", school: "R.M.K Engineering College", period: "Sep 2023 – Jun 2027 (Expected)" },
  { degree: "Higher Secondary (HSC) – Computer Science with Mathematics", school: "Velammal Matric Higher Secondary School", period: "Completed 2023" },
];

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector(".ach-title"), { opacity: 0, y: 40, filter: "blur(8px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    gsap.fromTo(section.querySelectorAll(".ach-card"), { opacity: 0, y: 40, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.6, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 70%" },
    });

    gsap.fromTo(section.querySelectorAll(".cert-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, stagger: 0.08, duration: 0.5,
      scrollTrigger: { trigger: section.querySelector(".cert-section"), start: "top 85%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="ach-title mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Achievements & <span className="glow-text">Certifications</span>
          </h2>
        </div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {achievements.map((ach, i) => (
            <div key={i} className="ach-card glass-card p-5 hover:border-primary/40 transition-all duration-500 cursor-pointer group" onClick={() => setSelected(i)}>
              <div className="flex items-center gap-3 mb-3">
                <ach.icon size={22} weight="light" className="text-primary" />
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">{ach.place}</span>
              </div>
              <h3 className="text-foreground font-semibold text-sm mb-1">{ach.title}</h3>
              <p className="text-xs text-muted-foreground font-light mb-2">{ach.org}</p>
              {ach.project && <p className="text-xs text-primary/70 font-light">{ach.project}</p>}
              <div className="flex items-center gap-1 mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View details <ArrowUpRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={24} weight="light" className="text-primary" />
            Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <div key={i} className="ach-card glass-card p-5">
                <h4 className="text-foreground font-semibold text-sm mb-1">{edu.degree}</h4>
                <p className="text-xs text-primary/80 font-light">{edu.school}</p>
                <p className="text-xs text-muted-foreground font-light mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cert-section">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Certificate size={24} weight="light" className="text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="cert-item glass-card px-4 py-3 text-sm text-muted-foreground font-light hover:text-foreground hover:border-primary/30 transition-all duration-300">
                {cert}
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
            <div className="flex items-center gap-3 mb-4">
              {(() => { const Icon = achievements[selected].icon; return <Icon size={28} weight="light" className="text-primary" />; })()}
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">{achievements[selected].place}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{achievements[selected].title}</h3>
            <p className="text-sm text-muted-foreground mb-1">{achievements[selected].org}</p>
            {achievements[selected].project && <p className="text-sm text-primary/80 mb-3">{achievements[selected].project}</p>}
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{achievements[selected].details}</p>
            {achievements[selected].team && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Team</h4>
                <p className="text-sm text-muted-foreground font-light">{achievements[selected].team}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
