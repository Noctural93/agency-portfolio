"use client";

import { motion, TargetAndTransition } from "framer-motion";
import {
  Children,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  duration?: number;
  containerClassName?: string;
  itemGap?: string;
};

const InfiniteSlider = ({ children, duration, containerClassName, itemGap }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateWidth = useCallback(() => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const sliderRect = sliderRef.current?.getBoundingClientRect();
    const containerWidth = containerRect?.width;
    const sliderWidth = sliderRect?.width;

    if (containerWidth && sliderWidth) {
      setMultiplier(sliderWidth < containerWidth ? Math.ceil(containerWidth / sliderWidth) : 1);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    calculateWidth();
    if (sliderRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => calculateWidth());
      resizeObserver.observe(sliderRef.current);
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [calculateWidth, isMounted]);

  useEffect(() => {
    calculateWidth();
  }, [children, calculateWidth]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const multiplyChildren = useCallback(
    (multiplier: number) => {
      const arraySize = multiplier >= 0 ? multiplier : 0;
      return [...Array(arraySize)].map((_, i) => (
        <Fragment key={i}>
          {Children.map(children, (child) => (
            <div className={itemGap}>{child}</div>
          ))}
        </Fragment>
      ));
    },
    [children]
  );

  const scroll: TargetAndTransition = {
    x: ["0%", "-100%"],
    transition: {
      duration: duration || 10,
      ease: "linear",
      repeat: Infinity,
    },
  };

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={twMerge("overflow-x-hidden flex flex-row relative w-full h-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,black_30%,black_70%,rgba(0,0,0,0)_100%)]", containerClassName)}
    >
      <motion.div
        animate={scroll}
        className="flex-shrink-0 flex-grow-0 basis-auto min-w-full flex flex-row items-center"
      >
        <div
          ref={sliderRef}
          className="flex-shrink-0 flex-grow-0 basis-auto flex min-w-fit flex-row items-center"
        >
          {Children.map(children, (child) => (
            <div className={itemGap}>{child}</div>
          ))}
        </div>
        {multiplyChildren(multiplier - 1)}
      </motion.div>
      <motion.div
        animate={scroll}
        className="flex-shrink-0 flex-grow-0 basis-auto min-w-full flex flex-row items-center"
      >
        {multiplyChildren(multiplier)}
      </motion.div>
    </div>
  );
};

export { InfiniteSlider };
