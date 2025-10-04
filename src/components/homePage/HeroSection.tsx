'use client'

import { motion } from 'framer-motion';

import AnimatedText from "../FramerAnimations/AnimatedText";
import TopCard from "../TopCard";
import {InfiniteSlider} from '../FramerAnimations/InfiniteSlider';
import Image from 'next/image';

import ipsum from '../../../public/InfiniteSliderIcons/ipsum.png';
import logip from '../../../public/InfiniteSliderIcons/logip.png';
import log from '../../../public/InfiniteSliderIcons/log.png';
import myLogo from '../../../public/InfiniteSliderIcons/myLogo.png';
import useMediaQuery from '@/utils/useMediaQuery';


const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section className="relative w-full h-fit overflow-hidden flex flex-col gap-[70px]">
      <div className="h-[85px]"></div>
      <div className="w-full max-w-[1440px] flex flex-col gap-[50px] z-10 text-white h-min mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32">
        <div className='flex flex-col gap-[38px] w-full'>
          <div className='flex flex-col gap-[26px] w-full'>
            <div className='flex flex-col gap-[34px] w-full'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TopCard />
              </motion.div>
              <div className='text-[56px] leading-[55px] text-white md:text-[78px] font-normal md:leading-[90px] w-full tracking-[-3.8px]'>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  Premium Agnecy
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full"
                >
                  for Creatives.
                </motion.h1>
              </div>
            </div>
            <AnimatedText
              text="We specialize in crafting unique digital presence that help businesses grow and stand out in their industries."
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
              <button className='text-black bg-[#efeeec] rounded-lg px-[18px] py-[10px] text-nowrap'>
                Connect with Us
              </button>
              <button className='bg-[#ffffff26] backdrop-blur-[2.5px] rounded-lg px-[18px] py-[10px] text-nowrap'>
                What is MyAgency?
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-full max-w-[400px] overflow-hidden flex flex-col gap-[10px]'
        >
          <div className="w-full h-[1px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)]"/>
          <InfiniteSlider duration={20} itemGap='mx-3' containerClassName='p-[10px]'>
            {[myLogo, log, logip, ipsum].map((img, i) => (
              <Image
                src={img}
                alt={`Slider Image ${i + 1}`}
                key={i}
                width={80}
                height={80}
                loading='lazy'
              />
            ))}
          </InfiniteSlider>
        </motion.div>
      </div>
      <div className='absolute top-0 left-0 h-full w-full z-[1] overflow-hidden backdrop-blur-[15px]'/>
      {!isMobile && (
        <div className='absolute top-0 z-10 h-full w-full max-w-[1440px] left-1/2 -translate-x-1/2'>
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-khVuIoeQ99plGmfLcJgFyPjb/"
            className="h-full absolute top-1/6 -right-1/3 w-full"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
