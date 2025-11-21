"use client";

import Image from "next/image";
import CalloutSection from "../CalloutSection";
import { InfiniteSlider } from "../FramerAnimations/InfiniteSlider";
import launchImage1_1 from "../../../public/infiniteSliderImages/launchcard1_1.jpeg";
import launchImage1_2 from "../../../public/infiniteSliderImages/launchcard1_2.jpeg";
import launchImage1_3 from "../../../public/infiniteSliderImages/launchcard1_3.jpeg";
import launchImage1_4 from "../../../public/infiniteSliderImages/launchcard1_4.jpeg";
import launchImage2_1 from "../../../public/infiniteSliderImages/launchcard2_1.jpeg";
import launchImage2_2 from "../../../public/infiniteSliderImages/launchcard2_2.jpeg";
import launchImage2_3 from "../../../public/infiniteSliderImages/launchcard2_3.jpeg";
import launchImage2_4 from "../../../public/infiniteSliderImages/launchcard2_4.jpeg";
import useMediaQuery from "@/lib/useMediaQuery";
import SlideShow from "../FramerAnimations/SlideShow";

const firstRow = [
  launchImage1_1,
  launchImage1_2,
  launchImage1_3,
  launchImage1_4,
];
const secondRow = [
  launchImage2_1,
  launchImage2_2,
  launchImage2_3,
  launchImage2_4,
];
const mobileRow = [...firstRow, ...secondRow];

const LaunchYourSite = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative flex flex-col items-center justify-center pt-[70px] gap-[70px] md:gap-[100px] md:pt-[100px] w-full overflow-hidden bg-black z-10">
      <div className="flex flex-col items-center justify-center w-full gap-[60px]">
        <CalloutSection
          sectionIndicatiorText="Launch Your Site"
          title="The Trusted Rise Partner"
          subtitle="For Startups and Agencies"
          description="Get your site live in no time! With professional setup and expert support in an easy way."
          btnText="View About Agency"
        />

        {/* Infinite Slider */}
        <div
          className={`relative max-w-[1440px] 2xl:px-[120px] z-3 w-full h-min ${
            isMobile ? "overflow-visible" : "overflow-hidden"
          }`}
        >
          {!isMobile ? (
            <div className="flex flex-col gap-[12px]">
              <InfiniteSlider duration={35} itemGap="mx-3">
                {firstRow.map((image, index) => (
                  <div 
                    className="w-[416px] h-[326px] rounded-[30px] border border-solid border-[#ffffff0d] p-[6px] bg-[#080808]"
                    key={index}
                  >
                    <Image
                      src={image}
                      alt={`launch_${index}`}
                      className="h-full w-full object-cover object-center rounded-[30px] border border-solid border-[#ffffff0d]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <InfiniteSlider duration={35} itemGap="mx-3" direction="right">
                {secondRow.map((image, index) => (
                  <div
                    className="w-[416px] h-[326px] rounded-[30px] border border-solid border-[#ffffff0d] p-[6px] bg-[#080808]"
                    key={index}
                  >
                    <Image
                      src={image}
                      alt={`launch_${index}`}
                      className="h-full w-full object-cover object-center rounded-[30px] border border-solid border-[#ffffff0d]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          ) : (
            <SlideShow>
              {mobileRow.map((image, index) => (
                <div
                  className="h-[256px] w-full rounded-[30px] border border-solid border-[#ffffff0d] p-[6px]"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`launch_mobile_${index}`}
                    className="w-full h-full object-cover object-center rounded-[30px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </SlideShow>
          )}
        </div>
      </div>

      {/* line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default LaunchYourSite;
