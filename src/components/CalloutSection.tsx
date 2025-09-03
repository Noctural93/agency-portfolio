import React from "react";
import LeftGradientCard from "../../public/LeftGradientCard";
import SectionIndicator from "./SectionIndicator";
import AnimatedText from "../components/FramerAnimations/AnimatedText";
import Button from "./Button";
import RightGradientCard from "../../public/RightGradientCard";

interface CalloutSectionProps {
  sectionIndicatiorText: string;
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
}

const CalloutSection = ({
  sectionIndicatiorText,
  title,
  subtitle,
  description,
  btnText,
}: CalloutSectionProps) => {
  return (
    <div className="relative flex items-start justify-center h-fit w-full max-w-[1440px] mx-auto gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
      <div className="relative w-full flex items-start justify-center max-w-[1440px]">
        <div className="absolute -bottom-[67px] md:-bottom-[97px] lg:-bottom-[47px] -left-[125px] md:-left-[185px] xl:-left-[250px] 2xl:-left-[341px]">
          <div className="relative h-[110px] w-[263px] md:h-[170px] md:w-[407px] lg:h-[237px] lg:w-[567px] z-1">
            <LeftGradientCard />
          </div>
        </div>
        <div className="flex grow flex-col items-center justify-center h-min gap-[30px] max-w-[630px] w-[1px] relative z-9">
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
          <div>
            <Button>{btnText}</Button>
          </div>
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
