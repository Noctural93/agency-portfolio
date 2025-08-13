'use client';

import { ReactNode } from 'react';
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
  delay = 1500,
  className = '',
}: SlideShowProps) {
  return (
    <Swiper
      loop
      centeredSlides
      slidesPerView='auto'
      spaceBetween={0}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      speed={1500}
      watchSlidesProgress
      onSetTranslate={(swiper: SwiperCore) => {
        swiper.slides.forEach((slideEl) => {
          // @ts-ignore: Swiper adds progress to slide elements
          const progress = slideEl.progress ?? 0;

          // Smoother scale damping
          const scale = 0.9 + (1 - Math.min(Math.abs(progress), 1)) * 0.1;

          (slideEl as HTMLElement).style.transform = `scale(${scale}) translateZ(0)`; // GPU hint
        });
      }}
      modules={[Autoplay]}
      className={`w-full h-full overflow-visible ${className}`}
    >
      {children.map((child, i) => (
        <SwiperSlide
          key={i}
          className={`
            !w-[88%] max-w-sm h-full
            flex justify-center items-center
            transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          `}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
