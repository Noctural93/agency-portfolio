"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [waveActive, setWaveActive] = useState(true);

  useEffect(() => {
    const duration = 4000;
    const start = performance.now();

    const updateProgress = () => {
      const elapsed = performance.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(percent));

      if (percent < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setWaveActive(false);
        controls.start({
          scale: 8,
          opacity: 0,
          transition: { duration: 1.8, ease: "easeInOut" },
        });
        setTimeout(() => setIsDone(true), 1800);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [controls]);

  if (isDone) return null;

  const yPercent = -70 + progress;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      // ✅ Non-blocking overlay for FCP/LCP
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000] overflow-hidden pointer-events-none"
      style={{
        willChange: "transform, opacity",
        contain: "layout paint",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)", // GPU compositing
      }}
    >
      <div className="relative">
        <motion.h1
          className={`m-0 p-0 text-[10rem] uppercase font-bold text-transparent leading-none select-none ${
            waveActive ? "animate-wave-scroll" : ""
          }`}
          style={{
            backgroundImage: "url('/wave.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "600px 300px",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundPositionY: `${yPercent}%`,
          }}
        >
          Davi
        </motion.h1>

        <motion.div
          className="absolute -bottom-1 right-0 text-white text-lg font-semibold tracking-wider select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading {progress}%
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes waveScroll {
          0% {
            background-position-x: 0px;
          }
          100% {
            background-position-x: -600px;
          }
        }
        .animate-wave-scroll {
          animation: waveScroll 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
