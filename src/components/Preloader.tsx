import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 30, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
    );

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
      onUpdate: function () {
        if (percentRef.current) {
          const progress = Math.round(this.progress() * 100);
          percentRef.current.textContent = `${progress}%`;
        }
      },
    });

    tl.to([progressBarRef.current?.parentElement, percentRef.current], {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
        onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Background glow orbs */}
      <div className="float-orb w-96 h-96 bg-glow-primary top-1/4 left-1/4" />
      <div className="float-orb w-72 h-72 bg-glow-secondary bottom-1/4 right-1/4" />

      <div ref={nameRef} className="mb-12 text-center opacity-0">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight glow-text">
          Abisha
        </h1>
        <p className="text-muted-foreground mt-3 text-sm tracking-[0.3em] uppercase">
          AI Engineer
        </p>
      </div>

      <div className="w-64 md:w-80 h-[2px] bg-muted rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-0 rounded-full"
          style={{ background: "var(--gradient-button)" }}
        />
      </div>
      <span
        ref={percentRef}
        className="mt-4 text-sm text-muted-foreground font-light tracking-widest"
      >
        0%
      </span>
    </div>
  );
};

export default Preloader;
