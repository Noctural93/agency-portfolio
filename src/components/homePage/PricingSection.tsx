import useMediaQuery from "@/utils/useMediaQuery";
import LongRigtBox from "../../../public/LongRigtBox";
import AnimatedText from "../FramerAnimations/AnimatedText";
import SectionIndicator from "../SectionIndicator";
import PricingCards from "./PricingCards";

const PricingSection = () => {
  const isMobile = useMediaQuery("(max-width: 1112px)");
  return (
    <section className="relative flex flex-col items-center justify-center pt-[70px] md:pt-[100px] gap-[70px] md:gap-[100px] w-full overflow-hidden">
      <div className="flex items-center flex-col flex-nowrap h-min w-full gap-[40px] md:gap-[70px] max-w-[1440px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
        <div className="flex items-center justify-start h-min w-full">
          <div className="flex items-center justify-center max-w-[860px] grow flex-col gap-[40px] w-[1px]">
            <div className="flex flex-col flex-nowrap gap-[40px] h-min w-full">
              <SectionIndicator text="Pricing" dot={true} />
              <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap gap-[10px]">
                <AnimatedText
                  text="Plans for all businesses, Suitable for"
                  className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
                <AnimatedText
                  text="Personal, Agencies, Startups."
                  className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
              </div>
              <p className="text-[#ffffff99] text-start text-[16px] leading-[26px] font-[400] -tracking-[0.2px]">
                Our pricing plans are designed to make getting started as
                effortless as possible. With
                <br />
                flexible options tailored to suit a variety of needs and
                budgets.
              </p>
            </div>
          </div>
        </div>

        {/* pricing cards */}
        <PricingCards/>
      </div>

      {/* right box */}
      {isMobile ? null : (
        <div className="absolute -right-[183px] top-[199px] w-[1409px] h-[237px]">
          <LongRigtBox />
        </div>
      )}

      {/* Line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] m-w-[1300px] self-center" />
    </section>
  );
};

export default PricingSection;
