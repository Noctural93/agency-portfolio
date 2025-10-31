"use client"

import { motion } from "framer-motion";
import TopCard from "../TopCard";
import AnimatedText from "../FramerAnimations/AnimatedText";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-min overflow-hidden flex flex-col gap-[70px] justify-center items-center mb-[30px] md:mb-0">
      <div className="h-[85px]"></div>
      <div className="w-full max-w-[1440px] flex flex-col gap-[50px] z-10 text-white h-min mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32 items-center justify-center">
        <div className="flex flex-col gap-[38px] w-full items-center">
          <div className="flex flex-col gap-[26px] w-full items-center">
            <div className="flex flex-col gap-[34px] w-full items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TopCard heading="2025" subHeading="Explore Our Portfolio" />
              </motion.div>
              <div className="text-[56px] leading-[55px] text-white md:text-[78px] font-normal md:leading-[90px] w-full tracking-[-3.8px] text-center">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  Check Out Some
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  Extra-Ordinary Work.
                </motion.h1>
              </div>
            </div>
            <AnimatedText
              text="From startups to established brands, we create tailored solutions that drive success and make a real impact."
              className="text-[16px] text-[#ffffff99] max-w-[500px] w-full text-center flex justify-center"
              delayAnimation={0.9}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="w-full flex flex-wrap gap-[12px] cursor-pointer items-center">
              <Button>{"Build Your Produt"}</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* blur */}
      <div className="absolute top-0 left-0 h-full w-full z-1 overflow-hidden backdrop-blur-[15px]" />
    </section>
  );
};

export default HeroSection;
