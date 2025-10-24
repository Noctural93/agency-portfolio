import React, { useRef } from "react";

import { InfiniteSlider } from "../FramerAnimations/InfiniteSlider";
import useMediaQuery from "@/utils/useMediaQuery";
import SlideShow from "../FramerAnimations/SlideShow";
import CalloutSection from "../CalloutSection";
import ResultCards from "./ResultCards";
import Bottomvector from "../../../public/Bottomvector";
import swacpayImg from '../../../public/projects/swacpay.jpg'

const ResultCardsData = [
  {
    id: 1,
    platformType: ["🪙 FinTech"],
    title: "Swacpay The Next Generation Payment Method",
    image: swacpayImg,
    description:
      "Little byline about the casestudy with main keywords and a little writeup about the project which should only ideally lenght 2 lines",
    keyValues: ["web"],
  },
  {
    id: 2,
    platformType: ["🪙 FinTech"],
    title: "Swacpay The Next Generation Payment Method",
    image: swacpayImg,
    description:
      "Little byline about the casestudy with main keywords and a little writeup about the project which should only ideally lenght 2 lines",
    keyValues: ["web"],
  },
  {
    id: 3,
    platformType: ["🪙 FinTech"],
    title: "Swacpay The Next Generation Payment Method",
    image: swacpayImg,
    description:
      "Little byline about the casestudy with main keywords and a little writeup about the project which should only ideally lenght 2 lines",
    keyValues: ["web"],
  },
  {
    id: 4,
    platformType: ["🪙 FinTech"],
    title: "Swacpay The Next Generation Payment Method",
    image: swacpayImg,
    description:
      "Little byline about the casestudy with main keywords and a little writeup about the project which should only ideally lenght 2 lines",
    keyValues: ["web"],
  }
];

const MemoResultCard = React.memo(ResultCards);

const ResultSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col items-center justify-center pt-[70px] gap-[60px] md:pt-[100px] w-full overflow-hidden">
      <CalloutSection
        sectionIndicatiorText="Results"
        title="Driven by Impact"
        subtitle="Measured by Results"
        description="Our success is defined by yours. From startups to enterprises, we’ve helped brands increase visibility, boost engagement, and scale revenue with innovative strategies and powerful digital products."
        btnText="Book a 15-min call"
      />

      {/* Inifinte slider */}
      <div
        className={`max-w-[1440px] 2xl:px-[120px] z-3 w-full h-[630px] py-[10px] ${
          isMobile ? "overflow-visible" : "overflow-hidden"
        }`}
        ref={containerRef}
      >
        {!isMobile ? (
          <InfiniteSlider
            duration={45}
            itemGap="mx-3"
            containerClassName="p-[10px]"
          >
            {ResultCardsData.map((item) => (
              <MemoResultCard
                key={item.id}
                platformType={item.platformType}
                img={item.image}
                title={item.title}
                description={item.description}
                keyValues={item.keyValues}
              />
            ))}
          </InfiniteSlider>
        ) : (
          <SlideShow>
            {ResultCardsData.map((item) => (
              <MemoResultCard
                key={item.id}
                platformType={item.platformType}
                img={item.image}
                title={item.title}
                description={item.description}
                keyValues={item.keyValues}
              />
            ))}
          </SlideShow>
        )}
      </div>
      <div className="relative z-3 w-full max-w-[1440px] h-[30px] md:h-[70px]">
        <Bottomvector />
        <div className="absolute z-0 bottom-1 left-1/2 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
        <div className="absolute z-0 bottom-1 left-1/6 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
      </div>
    </section>
  );
};

export default ResultSection;
