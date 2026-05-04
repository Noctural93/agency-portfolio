"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export default function StackingCards() {
  return (
    <div className="relative flex flex-col items-start justify-center h-fit w-full max-w-[1440px] mx-auto gap-[24px] md:gap-[70px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
      {projectsData.map((project, i) => {
        return (
          <Link href={`/portfolio/${project.slug}`} key={project.id} className="w-full">
            <motion.div
              style={{ top: `${40 + project.id * 14}px`, zIndex: i + 1 }}
              className={`sticky h-[340px] md:h-[490px] lg:h-[580px] w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12] cursor-pointer hover:border-[#ffffff33] transition-colors`}
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
  );
}
