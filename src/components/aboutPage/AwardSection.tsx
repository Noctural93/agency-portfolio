import SectionIndicator from "../SectionIndicator";
import AnimatedText from "../FramerAnimations/AnimatedText";
import awardImg from '../../../public/awardLogo.avif';
import Image from "next/image";
import bg from '../../../public/infocard-bg.png';

const awardsData = [
  {
    title: "CSS Design Awards",
    subtitle: "Site Of The Day",
    count: "16x"
  },
  {
    title: "Awwwards",
    subtitle: "Site Of The Year",
    count: "18x"
  },
  {
    title: "Red Dot Design",
    subtitle: "Best Of The Year",
    count: "07x"
  },
  {
    title: "Framer Awards",
    subtitle: "Site Of The Month",
    count: "12x"
  }
];

const AwardSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[40px] w-full gap-[70px] md:gap-[100px] lg:overflow-visible lg:items-center lg:justify-start bg-[#000000] z-10 -top-[1px]">
      <div className="relative flex flex-col lg:flex-row lg:flex-nowrap h-min w-full max-w-[1440px] gap-[70px] md:gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px] lg:overflow-visible lg:items-start lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-[60px] items-start justify-center w-full">
          <div className="flex flex-col gap-[30px] items-start justify-center w-full max-w-[450px]">
            <div className="flex flex-col gap-[30px] items-start justify-start">
              <SectionIndicator text="Awards" dot={true} className="text-[13px]" />
              <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
                <AnimatedText
                  text="Awards"
                  className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
                <AnimatedText
                  text="& Recognition"
                  className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
              </div>
            </div>
            <p className="text-[#ffffff80]">
              We're proud to have been recognized with several
              <br />
              awards for our hard work and dedication.
            </p>
          </div>

          {/* award cards */}
          <div className="grow w-full grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[700px] overflow-hidden">
            {
                awardsData.map((card, index) => (
                    <div key={index} className="w-full h-min p-[10px] gap-[22px] border-[2px] border-solid border-[#ffffff12] rounded-[20px] bg-[#080808] hover: cursor-pointer z-0">
                        <div className="relative border border-solid border-[#ffffff12] rounded-[20px] w-full h-[120px] flex justify-center items-center">
                            <div className="absolute w-full h-full left-0 top-0">
                                <Image
                                    src={bg}
                                    alt={`bg-${card.title}`}
                                />
                            </div>
                            <Image
                                src={awardImg}
                                alt={card.title}
                                className="h-[26px] w-[88px]"
                            />
                        </div>
                        <div className="flex justify-between pt-[20px] px-[10px] pb-14px items-center">
                            <div>
                                <h3 className="font-bold">{card.title}</h3>
                                <p className="text-[15px]">{card.subtitle}</p>
                            </div>
                            <SectionIndicator
                                dot={false}
                                text={card.count}
                            />
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>

      {/* line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default AwardSection;
