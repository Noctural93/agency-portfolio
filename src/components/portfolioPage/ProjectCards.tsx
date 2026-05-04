"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 60); // Offset by half the width of the cursor
      cursorY.set(e.clientY - 30); // Offset by half the height of the cursor
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center w-[120px] h-[60px] bg-white rounded-xl shadow-xl"
      >
        <span className="text-black font-semibold text-sm whitespace-nowrap rounded-xl">
          View Project
        </span>
      </motion.div>

      <div className="relative grid grid-cols-2 h-fit w-full max-w-[1440px] mx-auto gap-[20px] px-[120px]">
        {projectsData.map((project) => {
          return (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.id}
              className="w-full cursor-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className={`h-[480px] w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12] hover:border-[#ffffff33] transition-colors`}
              >
                <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute h-full w-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_91.24%,rgba(0,0,0,0.95)_100%)]" />
                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] mb-[12px] w-[97%] border border-solid border-[#ffffff0d] bg-[#0d0d0d] p-[10px] flex items-center justify-between rounded-[12px] shadow-[2px_4px_24px_10px_rgba(0,0,0,0.35)]">
                    <p>{project.title}</p>
                    <p>{project.year}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCards;
