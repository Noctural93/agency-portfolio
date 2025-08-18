import SectionIndicator from "../SectionIndicator";
import AnimatedText from "../FramerAnimations/AnimatedText";

const BenefitSection = () => {
  return (
    <section>
      <div>
        <SectionIndicator text="Agency Benefits" dot={true} />
        <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
          <AnimatedText
            text="We Just Don't Design, We Build."
            className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
          />
          <AnimatedText
            text="If You Can Dream It, We Can Play It!"
            className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default BenefitSection;
