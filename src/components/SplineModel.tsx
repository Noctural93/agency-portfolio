"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const SplineModel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });
  const [Spline, setSpline] = useState<any>(null);

  useEffect(() => {
    if (isInView && !Spline) {
      import("@splinetool/react-spline").then((mod) =>
        setSpline(() => mod.default)
      );
    }
  }, [isInView, Spline]);

  return (
    <div ref={ref} className="absolute top-[2%] left-[8%] h-full w-full z-[10]">
      {!isInView && <div className="h-full w-full bg-transparent" />}
      
      {isInView && Spline && (
        <Spline
          scene="https://prod.spline.design/NT0jpktJaPOVyFIW/scene.splinecode"
          className="h-full w-full scale-[1.3] origin-center"
        />
      )}
    </div>
  );
};
export default SplineModel;
