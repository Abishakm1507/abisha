import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  desc: string;
  fullDescription?: string;
  tech: string[];
  repo: string;
  featured?: boolean;
  accuracy?: string;
  category: string;
  features?: string[];
  challenges?: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Plant Disease Detection",
    desc: "CNN model achieving 97% accuracy for leaf disease classification in sustainable agriculture.",
    fullDescription: "A deep learning system using Convolutional Neural Networks to detect and classify plant leaf diseases from images. The model was trained on a large dataset of diseased and healthy plant leaves, achieving a remarkable 97% accuracy rate. Deployed via Streamlit for real-time predictions.",
    tech: ["TensorFlow", "Keras", "Streamlit", "Python"],
    repo: "https://github.com/Abishakm1507/Plant-Disease-Detection-System-for-Sustainable-Agriculture",
    featured: true,
    accuracy: "97%",
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-1.png",
    features: [
      "97% classification accuracy on test dataset",
      "Real-time image upload and prediction",
      "Data augmentation pipeline for robust training",
      "Interactive Streamlit web interface",
    ],
    challenges: [
      "Handling class imbalance across disease categories",
      "Optimizing model size for deployment",
      "Building an intuitive UI for non-technical farmers",
    ],
  },
  {
    title: "RAG PDF Q&A System",
    desc: "FastAPI-based Retrieval-Augmented Generation for PDF Q&A using FAISS + Groq LLaMA 3.3.",
    fullDescription: "A production-ready RAG system that allows users to upload PDFs and ask natural language questions. Uses FAISS for vector similarity search, SentenceTransformers for embeddings, and Groq's LLaMA 3.3 for generating accurate answers grounded in document context.",
    tech: ["FastAPI", "FAISS", "Docker", "Groq", "Hugging Face"],
    repo: "https://github.com/Abishakm1507/RAG",
    featured: true,
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-2.png",
    features: [
      "PDF parsing and chunking pipeline",
      "FAISS vector store for fast retrieval",
      "Groq LLaMA 3.3 for answer generation",
      "Dockerized for easy deployment",
    ],
    challenges: [
      "Optimizing chunk sizes for retrieval quality",
      "Reducing hallucinations with context grounding",
      "Handling multi-page PDF documents efficiently",
    ],
  },
  {
    title: "AI Fitness Trainer",
    desc: "Real-time posture analysis with TensorFlow MoveNet, auto rep counting, and voice feedback.",
    fullDescription: "An intelligent fitness companion that uses computer vision to analyze workout form in real-time. Leverages TensorFlow MoveNet for pose estimation, automatically counts reps, and provides live voice feedback to correct posture during exercises.",
    tech: ["React", "TensorFlow.js", "Supabase", "TypeScript"],
    repo: "https://github.com/Abishakm1507/ai-fitness-trainer",
    featured: true,
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-3.png",
    features: [
      "Real-time pose estimation with MoveNet",
      "Automatic rep counting with accuracy tracking",
      "Live voice feedback for form correction",
      "Workout history stored in Supabase",
    ],
    challenges: [
      "Achieving low-latency pose detection in browser",
      "Defining angle thresholds for correct form",
      "Implementing text-to-speech feedback without lag",
    ],
  },
  {
    title: "VitalsLens",
    desc: "Touchless vital signs monitoring (HR, SpO₂, respiratory rate) using smartphone camera rPPG.",
    fullDescription: "A groundbreaking health monitoring app that measures vital signs (heart rate, SpO₂, respiratory rate) using only the smartphone camera. Uses remote photoplethysmography (rPPG) and signal processing to extract physiological data from facial video.",
    tech: ["React", "TensorFlow.js", "MediaPipe", "TypeScript"],
    repo: "https://github.com/Abishakm1507/VitalsLens",
    featured: true,
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-4.png",
    features: [
      "Contactless heart rate measurement via camera",
      "SpO₂ estimation using rPPG signals",
      "Respiratory rate detection from subtle movements",
      "Real-time signal processing and visualization",
    ],
    challenges: [
      "Extracting clean PPG signals from noisy video",
      "Calibrating measurements for accuracy",
      "Handling varying lighting conditions",
    ],
  },
  {
    title: "AI Resume Analyzer",
    desc: "ATS score calculation, skill-gap analysis, and improvement suggestions using NLP + TF-IDF.",
    tech: ["React", "Flask", "Scikit-learn", "spaCy"],
    repo: "https://github.com/Abishakm1507/AI-Resume-Analyzer",
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-5.png",
    features: ["ATS score calculation", "Skill gap analysis", "NLP-powered suggestions"],
  },
  {
    title: "GeminiHire",
    desc: "AI job assistant with resume analysis, cover-letter generation, and interview prep.",
    tech: ["React", "Supabase", "Gemini API", "Tailwind"],
    repo: "https://github.com/Abishakm1507/GeminiHire",
    category: "Full-Stack",
    image: "https://ik.imagekit.io/ulajgq5pme/project-6.png",
    features: ["Resume parsing and analysis", "AI cover letter generation", "Mock interview preparation"],
  },
  {
    title: "AI Speaking Coach",
    desc: "Real-time speech analysis and feedback powered by Gemini AI.",
    tech: ["React", "TypeScript", "Gemini API", "Vite"],
    repo: "https://github.com/Abishakm1507/ai-speaking-coach",
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-7.png",
  },
  {
    title: "Real-Time Chat App",
    desc: "Full-stack real-time chat with JWT auth and WebSocket communication.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    repo: "https://github.com/Abishakm1507/chat_app",
    category: "Full-Stack",
    image: "https://ik.imagekit.io/ulajgq5pme/project-8.png",
  },
  {
    title: "AI Metro Scheduler",
    desc: "AI optimizer for Kochi Metro operations using Random Forest + Q-Learning.",
    tech: ["FastAPI", "Streamlit", "Random Forest", "Q-Learning"],
    repo: "https://github.com/Abishakm1507/ai-train-induction-planning-and-scheduling",
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-9.png",
  },
  {
    title: "YouTube Transcriber",
    desc: "Transcript extraction with structured Gemini-powered summaries.",
    tech: ["Python", "Streamlit", "Gemini", "YouTube API"],
    repo: "https://github.com/Abishakm1507/YouTube-Video-Transcriber",
    category: "AI/ML",
    image: "https://ik.imagekit.io/ulajgq5pme/project-10.png",
  },
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
              {project.image && (
                <div className="h-64 w-full overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight size={18} weight="light" className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-1" />
                </div>
                <p className="text-xs text-primary mb-2 tracking-widest uppercase">{project.category}</p>
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
          <div className="glass-card max-w-2xl w-full p-0 relative overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 text-foreground/80 hover:text-foreground transition-colors bg-background/50 rounded-full p-1"><X size={20} /></button>
            {projects[selected].image && (
              <div className="h-96 w-full overflow-hidden bg-muted">
                <img src={projects[selected].image} alt={projects[selected].title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{projects[selected].title}</h3>
                  <p className="text-xs text-primary tracking-widest uppercase">{projects[selected].category}</p>
                </div>
                {projects[selected].accuracy && (
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                    <p className="text-xl font-bold text-primary">{projects[selected].accuracy}</p>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{projects[selected].fullDescription || projects[selected].desc}</p>
              
              <div className="mb-6">
                <p className="text-xs text-primary tracking-widest uppercase mb-3 font-semibold">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {projects[selected].tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>

              {projects[selected].features && projects[selected].features.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs text-primary tracking-widest uppercase mb-3 font-semibold">Key Features</p>
                  <ul className="space-y-2">
                    {projects[selected].features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-3 mt-0.5">➜</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {projects[selected].challenges && projects[selected].challenges.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs text-primary tracking-widest uppercase mb-3 font-semibold">Challenges</p>
                  <ul className="space-y-2">
                    {projects[selected].challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-3 mt-0.5">⚡</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-muted">
                <a href={projects[selected].repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  View Repository
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
