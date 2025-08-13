import React from "react";
import AnimatedText from "../FramerAnimations/AnimatedText";
import SectionIndicator from "../SectionIndicator";
import Image from "next/image";
import HomePageAboutSection from "../../../public/HomePageaboutSection.jpeg";

const HowWeWorkSection = () => {
  return (
    <section className="relative flex flex-col justify-center pt-[40px] w-full overflow-hidden gap-[70px] md:gap-[100px]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1440px] gap-[70px] md:gap-[84px] px-[30px] lg:px-[50px] 2xl:px-[70px]">
        <div className="flex flex-col flex-nowrap gap-[50px] h-min w-full">
          <div className="h-min flex grow lg:max-w-[600px] w-full gap-[30px] items-start justify-center flex-col flex-nowrap">
            <div className="flex justify-start items-start flex-col gap-[30px] w-full h-min">
              <SectionIndicator text="How We Work?" />
              <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
                <AnimatedText
                  text="We Simplify The Journey"
                  className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
                <AnimatedText
                  text="From Design To Launch"
                  className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
              </div>
            </div>
            <p className="text-[#ffffff99] text-[16px] leading-[26px] font-[400] -tracking-[0.2px] max-w-[540px]">
              We make it easy to bring your ideas to life, guiding you from
              concept to a fully launched product.
            </p>
          </div>

          {/* cards */}
          <div className="h-[1000px] w-full"></div>
        </div>

        {/* Image */}
        <div className="h-[340px] md:h-auto grow lg:max-w-[528px] w-full">
          <div className="relative gap-[10px] flex items-center justify-center h-full md:h-[534px] max-w-full w-full p-0 z-2">
            <div className="relative h-full w-full p-[10px] rounded-[30px] border border-solid backdrop-blur-[2px] border-[#ffffff0d] bg-[#080808] overflow-hidden z-2">
              <div className="w-full h-full z-2 border-[#ffffff1a] border border-solid rounded-[30px]">
                <Image
                  src={HomePageAboutSection}
                  alt="About Agency Section Image"
                  className="w-full h-full object-center object-cover rounded-[30px] z-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute z-10 w-[31%] h-[1px] left-1/2 -translate-x-1/2 -bottom-0 bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)]" />
            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-[#0055ff] blur-[40px] rounded-[100%] w-[285px] h-[53px] z-1 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.02)_100%)] h-[1px] w-full m-w-[1300px]" />
    </section>
  );
};

export default HowWeWorkSection;
