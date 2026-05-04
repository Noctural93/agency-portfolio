"use client"

import { motion } from "framer-motion";

import AnimatedText from "../FramerAnimations/AnimatedText";
import TopCard from "../TopCard";
import Bottomvector from "../../../public/Bottomvector";

interface HeroSectionProps {
    date?: string;
    title?: string;
    desc?: string;
    projectType?: Array<string>;
}

const HeroSection = ({ date, title, desc, projectType }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-fit overflow-hidden flex flex-col gap-[70px]">
      <div className="h-[85px]"></div>
      <div className="w-full max-w-[1440px] flex flex-col justify-between gap-[38px] z-10 text-white h-min mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32 xl:flex-row xl:gap-0">
        <div className="flex flex-col gap-[38px] w-full xl:max-w-[500px]">
          <div className="flex flex-col gap-[26px] w-full">
            <div className="flex flex-col gap-[34px] w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TopCard heading="DATE" subHeading={date}/>
              </motion.div>
              <div className="text-[56px] leading-[55px] text-white md:text-[78px] font-normal md:leading-[90px] w-full tracking-[-3.8px]">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  {title}
                </motion.h1>
                {/* <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  {title}
                </motion.h1> */}
              </div>
            </div>
            <AnimatedText
              text={desc || ""}
              className="text-[16px] text-[#ffffff99] max-w-[500px] w-full"
              delayAnimation={0.9}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex flex-wrap gap-[12px] cursor-pointer">
              {projectType?.map((type) => (
                <button key={type} className="rounded-lg px-[18px] py-[10px] text-nowrap border border-solid border-[#ffffff12] bg-gradient-to-t from-blue-700/15 to-neutral-400/10">
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-[2px] border-solid border-[#ffffff12] rounded-[20px] bg-gradient-to-t from-blue-600/15 to-neutral-600/10 w-full xl:max-w-[486px] p-[40px]">
                  <div>
                    <p>Services</p>
                    <h1>Web design</h1>
                  </div>
                  <div/>
        </div>
      </div>

      {/* blur */}
      <div className="absolute top-0 left-0 h-full w-full z-1 overflow-hidden backdrop-blur-[15px]" />

      {/* bottom vector animation */}
      <div className="relative z-3 w-full max-w-[1440px] h-[30px] md:h-[70px]">
        <Bottomvector />
        <div className="absolute z-0 bottom-1 left-1/2 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
        <div className="absolute z-0 bottom-1 left-1/6 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
      </div>
    </section>
  )
}

export default HeroSection
