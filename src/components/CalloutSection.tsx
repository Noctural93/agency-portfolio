import React from "react";
import LeftGradientCard from "../../public/LeftGradientCard";
import SectionIndicator from "./SectionIndicator";
import AnimatedText from "../components/FramerAnimations/AnimatedText";
import Button from "./Button";
import RightGradientCard from "../../public/RightGradientCard";

import ipsum from "../../public/InfiniteSliderIcons/ipsum.png";
import logip from "../../public/InfiniteSliderIcons/logip.png";
import log from "../../public/InfiniteSliderIcons/log.png";
import myLogo from "../../public/InfiniteSliderIcons/myLogo.png";
import Image from "next/image";
import { InfiniteSlider } from "./FramerAnimations/InfiniteSlider";

interface CalloutSectionProps {
  sectionIndicatiorText: string;
  title: string;
  subtitle: string;
  description: string;
  btnText?: string;
  showSlider?: boolean;
}

const CalloutSection = ({
  sectionIndicatiorText,
  title,
  subtitle,
  description,
  btnText,
  showSlider = false,
}: CalloutSectionProps) => {
  return (
    <div className="relative flex items-start justify-center h-min w-full max-w-[1440px] mx-auto gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px] overflow-hidden">
      <div className="relative w-full flex items-start justify-center max-w-[1440px]">
        <div className="absolute -bottom-[67px] md:-bottom-[97px] lg:-bottom-[47px] -left-[125px] md:-left-[185px] xl:-left-[250px] 2xl:-left-[341px]">
          <div className="relative h-[110px] w-[263px] md:h-[170px] md:w-[407px] lg:h-[237px] lg:w-[567px] z-1">
            <LeftGradientCard />
          </div>
        </div>
        <div className="flex grow flex-col items-center justify-center h-min gap-[30px] max-w-[630px] w-[1px] relative z-10 py-3">
          <div className="flex flex-col items-center justify-start gap-[30px] w-full h-min">
            <SectionIndicator text={sectionIndicatiorText} />
            <div className="flex flex-col justify-center items-center">
              <AnimatedText
                text={title}
                className="text-[45px] -tracking-[2px] leading-[42px] md:text-[52px] md:leading-[55px] font-[400] md:-tracking-[1.9px] justify-center"
              />
              <AnimatedText
                text={subtitle}
                className="text-[#ffffff99] text-[45px] -tracking-[2px] leading-[42px] md:text-[52px] md:leading-[55px] font-[400] md:-tracking-[1.9px] justify-center"
              />
            </div>
          </div>
          <p className="text-[#ffffff99] text-center text-[16px] leading-[26px] font-[400] -tracking-[0.2px]">
            {description}
          </p>
          {showSlider ? (
            <InfiniteSlider
              duration={20}
              itemGap="mx-3"
              containerClassName="w-[70%]"
            >
              {[myLogo, log, logip, ipsum].map((img, i) => (
                <Image
                  src={img}
                  alt={`Slider Image ${i + 1}`}
                  key={i}
                  loading="lazy"
                  className="w-[80px] h-[75px]"
                />
              ))}
            </InfiniteSlider>
          ) : null}
          {btnText && (
            <div>
              <Button>{btnText}</Button>
            </div>
          )}
        </div>
        <div className="absolute -bottom-[67px] md:-bottom-[97px] lg:-bottom-[47px] -right-[125px] md:-right-[185px] xl:-right-[250px] 2xl:-right-[341px]">
          <div className="relative h-[110px] w-[263px] md:h-[170px] md:w-[407px] lg:h-[237px] lg:w-[567px] z-1">
            <RightGradientCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
