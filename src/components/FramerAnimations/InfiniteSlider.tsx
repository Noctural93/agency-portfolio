"use client";

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
  direction?: "left" | "right";
};

const InfiniteSlider = ({
  children,
  duration = 10,
  containerClassName,
  itemGap = "mx-3",
  direction = "left",
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateWidth = useCallback(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width;
    const sliderWidth = sliderRef.current?.getBoundingClientRect().width;

    if (containerWidth && sliderWidth && sliderWidth > 0) {
      setMultiplier(Math.ceil(containerWidth / sliderWidth));
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
      const arraySize = isFinite(multiplier) && multiplier >= 0 ? Math.floor(multiplier) : 0;
      return [...Array(arraySize)].map((_, i) => (
        <Fragment key={i}>
          {Children.map(children, (child) => (
            <div className={twMerge("flex-shrink-0 h-full flex items-center", itemGap)}>{child}</div>
          ))}
        </Fragment>
      ));
    },
    [children, itemGap]
  );

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "overflow-x-hidden flex flex-row relative w-full h-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,black_30%,black_70%,rgba(0,0,0,0)_100%)]",
        containerClassName
      )}
    >
      <div
        className={twMerge(
          "flex-shrink-0 flex-grow-0 basis-auto min-w-full h-full flex flex-row items-center hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <div
          ref={sliderRef}
          className="flex-shrink-0 flex-grow-0 basis-auto flex h-full min-w-fit flex-row items-center"
        >
          {Children.map(children, (child) => (
            <div className={twMerge("flex-shrink-0 h-full flex items-center", itemGap)}>{child}</div>
          ))}
        </div>
        {multiplyChildren(multiplier - 1)}
      </div>
      <div
        className={twMerge(
          "flex-shrink-0 flex-grow-0 basis-auto min-w-full h-full flex flex-row items-center hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {multiplyChildren(multiplier)}
      </div>
    </div>
  );
};

export { InfiniteSlider };