import Image from "next/image";
import AnimatedText from "../FramerAnimations/AnimatedText";
import star from "../../../public/star.png";
import SectionIndicator from "../SectionIndicator";
import Button from "../Button";
import VerifiedIcon from "../../../public/verifiedIcon";
import SplineModel from "../SplineModel";

const AboutAgencySection = () => {
  return (
    <section className="relative flex flex-col justify-center pt-[20px] md:pt-[120px] gap-[100px] w-full overflow-hidden z-20">
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
      <div className="flex flex-col-reverse items-start justify-center h-fit w-full max-w-[1440px] mx-auto gap-[84px] px-8 lg:px-22 xl:px-20 2xl:px-32 lg:flex-row lg:items-center">
        <div className="h-[350px] min-[480px]:h-[480px] grow lg:max-w-[528px] w-full lg:w-[1px] relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(52,112,255,0.95)_0%,_rgba(26,60,255,0.5)_25%,_rgba(10,15,40,0.25)_65%,_rgba(0,0,0,0.05)_100%)]">
          {/* <div className="relative gap-[10px] flex items-center justify-center h-full md:h-[534px] max-w-full w-full p-0 z-2">
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
            <div className="absolute z-10 w-[31%] h-[1px] left-1/2 -translate-x-1/2 -bottom-0 bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)]"/>
            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-[#0055ff] blur-[40px] rounded-[100%] w-[285px] h-[53px] z-1 pointer-events-none" />
          </div> */}
          {
            <SplineModel />
          }
          <div className="absolute bottom-0 right-0 h-[23px] w-[170px] z-[11] bg-black" />
        </div>
        <div className="h-min flex grow max-w-[700px] w-full lg:w-[1px] gap-[30px] items-start justify-center flex-col flex-nowrap">
          <div className="flex justify-start items-start flex-col gap-[30px] w-full h-min">
            <SectionIndicator text="About Davi" />
            <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
              <AnimatedText
                text="Building Stronger Brands"
                className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
              />
              <AnimatedText
                text="Creating Lasting Impressions"
                className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
              />
            </div>
          </div>
          <p className="text-[#ffffff99] text-[16px] leading-[26px] font-[400] -tracking-[0.2px]">
            We are a passionate team of creators, developers, and strategists
            turning bold ideas into impactful digital solutions. With a blend of
            creativity and technology, we empower businesses to grow smarter,
            faster, and stronger.
          </p>
          <div className="gap-[50px] flex flex-col w-full h-min items-start justify-center">
            <div className="gap-[30px] flex items-start flex-col h-min justify-center w-full">
              <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)] h-[1px] w-[230px]" />
              <div className="gap-[20px] flex flex-col items-start justify-center max-w-[500px] flex-nowrap p-0">
                <div className="flex items-center w-full gap-[10px]">
                  <VerifiedIcon />
                  <p className="text-[#ffffff99] leading-[26px] -tracking-[0.2px] font-medium text-[16px]">
                    From $0 to $500,000 in revenue.
                  </p>
                </div>
                <div className="flex items-center w-full gap-[10px]">
                  <VerifiedIcon />
                  <p className="text-[#ffffff99] leading-[26px] -tracking-[0.2px] font-medium text-[16px]">
                    47% growth in new customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-[10px] items-start md:items-center justify-start h-min w-full">
              <Button>View About</Button>
              <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)] h-[1px] w-[40px] rotate-90" />
              <div className="flex flex-col items-start justify-center w-[180px] gap-[3px] h-min">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Image
                      key={item}
                      src={star}
                      alt="star-icon"
                      width={20}
                      loading="lazy"
                    />
                  ))}
                </div>
                <p className="text-[#ffffff99] text-[16px] leading-[26px] -tracking-[0.2px] font-medium">
                  200+ Agencies Rated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default AboutAgencySection;
