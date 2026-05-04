"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function SplineModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  const [Spline, setSpline] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const appRef = useRef<any>(null);

  // ✅ Lazy load only once
  useEffect(() => {
    import("@splinetool/react-spline").then((mod) => setSpline(() => mod.default));
  }, []);

  // ✅ Pause/Resume Spline rendering based on visibility
  useEffect(() => {
    if (!appRef.current) return;
    if (isInView) {
      appRef.current.play(); // resume when visible
    } else {
      appRef.current.stop(); // pause when offscreen
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="absolute top-[2%] left-[8%] h-full w-full z-[10] overflow-hidden"
    >
      {Spline && (
        <div className="h-full w-full">
          <Spline
            scene="https://prod.spline.design/NT0jpktJaPOVyFIW/scene.splinecode"
            onLoad={(app) => {
              setLoaded(true);
              appRef.current = app;
            }}
            className="h-full w-full scale-[1.3] origin-center pointer-events-none select-none"
          />
        </div>
      )}

      {!loaded && (
        <div className="h-full w-full flex items-center justify-center bg-transparent" />
      )}
    </div>
  );
}
