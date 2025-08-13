"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.07, // controls how much it eases to the target (smaller = smoother stop)
      duration: 1.2, // overall timing feel
      easing: (t) => 1 - Math.pow(1 - t, 4), // strong ease-out for slower stop
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
