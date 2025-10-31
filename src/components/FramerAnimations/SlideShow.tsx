'use client';

import { ReactNode, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type SwiperCore from 'swiper';
import 'swiper/css';

interface SlideShowProps {
  children: ReactNode[];
  delay?: number;
  className?: string;
}

export default function SlideShow({
  children,
  delay = 2500,
  className = '',
}: SlideShowProps) {
  // Use a throttled transform update to reduce layout thrashing
  const handleSetTranslate = useCallback((swiper: SwiperCore) => {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    // Only adjust visible slides to reduce reflows
    for (let i = activeIndex - 2; i <= activeIndex + 2; i++) {
      const slide = slides[i];
      if (!slide) continue;
      // @ts-expect-error: progress is added by Swiper
      const progress = slide.progress ?? 0;
      const scale = 0.9 + (1 - Math.min(Math.abs(progress), 1)) * 0.1;
      (slide as HTMLElement).style.transform = `scale(${scale}) translateZ(0)`;
    }
  }, []);

  return (
    <Swiper
      loop
      centeredSlides
      slidesPerView="auto"
      spaceBetween={0}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      speed={1200} // Slightly reduced speed for smoother mobile performance
      watchSlidesProgress
      onSetTranslate={handleSetTranslate}
      modules={[Autoplay]}
      className={`w-full h-full overflow-visible will-change-transform ${className}`}
    >
      {children.map((child, i) => (
        <SwiperSlide
          key={i}
          className="
            !w-[88%] max-w-sm h-full
            flex justify-center items-center
            transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            will-change-transform
          "
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
