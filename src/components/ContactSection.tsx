import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt, FileArrowDown } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector(".contact-title"), { opacity: 0, y: 40, filter: "blur(8px)" }, {
      opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    const inputs = section.querySelectorAll(".contact-input");
    gsap.fromTo(inputs, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: inputs[0], start: "top 85%" },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(".contact-btn");
    if (btn) gsap.fromTo(btn, { scale: 1 }, { scale: 1.1, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.out" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <div className="contact-title text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-light">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's <span className="glow-text">Work Together</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 space-y-5">
          <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="contact-input glass-input w-full" />
          <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="contact-input glass-input w-full" />
          <textarea placeholder="Your Message" required rows={5} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className="contact-input glass-input w-full resize-none" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button type="submit" className="contact-btn glow-button flex items-center gap-2">
              <PaperPlaneTilt size={18} weight="light" />
              Send Message
            </button>
            <div className="flex items-center gap-4">
              <a href="https://ik.imagekit.io/ulajgq5pme/ABISHA%20K%20M.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Download Resume">
                <FileArrowDown size={24} weight="light" />
              </a>
              <a href="https://github.com/Abishakm1507/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <GithubLogo size={24} weight="light" />
              </a>
              <a href="https://www.linkedin.com/in/abisha-k-m-4a4906290/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <LinkedinLogo size={24} weight="light" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
