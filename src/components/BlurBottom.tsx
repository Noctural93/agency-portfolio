'use client'

import { useEffect, useState } from "react";

const BlurBottom = () => {
  const layers = [
    { z: 1, blur: 0.078125, from: 0, mid1: 12.5, mid2: 25, to: 37.5 },
    { z: 2, blur: 0.15625, from: 12.5, mid1: 25, mid2: 37.5, to: 50 },
    { z: 3, blur: 0.3125, from: 25, mid1: 37.5, mid2: 50, to: 62.5 },
    { z: 4, blur: 0.625, from: 37.5, mid1: 50, mid2: 62.5, to: 75 },
    { z: 5, blur: 1.25, from: 50, mid1: 62.5, mid2: 75, to: 87.5 },
    { z: 6, blur: 2.5, from: 62.5, mid1: 75, mid2: 87.5, to: 100 },
    { z: 7, blur: 5, from: 75, mid1: 87.5, mid2: 100, to: 100 },
    { z: 8, blur: 10, from: 87.5, mid1: 100, mid2: 100, to: 100 },
  ];

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if(!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      console.log("Footer Top:", footerTop);
      const windowHeight = window.innerHeight;
      console.log("Window Height:", windowHeight);

      setIsVisible(footerTop > windowHeight);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  if(!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-[160px] z-10 pointer-events-none">
      {layers.map((layer, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: layer.z,
            opacity: 1,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) ${layer.from}%, rgb(0,0,0) ${layer.mid1}%, rgb(0,0,0) ${layer.mid2}%, rgba(0,0,0,0) ${layer.to}%)`,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,0) ${layer.from}%, rgb(0,0,0) ${layer.mid1}%, rgb(0,0,0) ${layer.mid2}%, rgba(0,0,0,0) ${layer.to}%)`,
          }}
        />
      ))}
    </div>
  );
};

export default BlurBottom;
