import React, { useRef } from "react";

import { InfiniteSlider } from "../FramerAnimations/InfiniteSlider";
import useMediaQuery from "@/utils/useMediaQuery";
import SlideShow from "../FramerAnimations/SlideShow";
import CalloutSection from "../CalloutSection";
import ResultCards from "./ResultCards";
import Bottomvector from "../../../public/Bottomvector";

const ResultCardsData = [
  {
    title: "OSIO",
    subtitle: "Sling Interactive Tech",
    description:
      "Expanded market reach, tapping into new demographics with a driven approach.",
    keyValues_1: "20% Market Share",
    keyValues_2: "45% Enhanced visibility",
  },
  {
    title: "Basel",
    subtitle: "Crimson Studio",
    description:
      "Achieved a 30% increase in user engagement through innovative design and strategic content.",
    keyValues_1: "30% Increase in Sales",
    keyValues_2: "40% Boost in Retention",
  },
  {
    title: "London",
    subtitle: "Raven Company",
    description:
      "Streamlined operations, reducing costs by with our automation solutions.",
    keyValues_1: "25% Conversion Rates",
    keyValues_2: "50% Reduced in CPA",
  },
  {
    title: "Manila",
    subtitle: "Gotham Wonder",
    description:
      "Boosted customer engagement with a digital presence and targeted campaigns.",
    keyValues_1: "60% Increased Traffic",
    keyValues_2: "35% Growth in Sales",
  },
];

const ResultSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col items-center justify-center pt-[70px] gap-[60px] md:pt-[100px] w-full overflow-hidden">
      <CalloutSection
        sectionIndicatiorText="Results"
        title="Delivering Tangible Results"
        subtitle="That Propel Your Success"
        description="At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success."
        btnText="Book a 15-min call"
      />

      {/* Inifinte slider */}
      <div
        className={`relative z-3 w-full h-[530px] ${
          isMobile ? "overflow-visible" : "overflow-hidden"
        }`}
        ref={containerRef}
      >
        {!isMobile ? (
          <InfiniteSlider
            duration={20}
            itemGap="mx-3"
            containerClassName="p-[10px]"
          >
            {ResultCardsData.map((item) => (
              <ResultCards
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                keyValues_1={item.keyValues_1}
                keyValues_2={item.keyValues_2}
              />
            ))}
          </InfiniteSlider>
        ) : (
          <SlideShow>
            {ResultCardsData.map((item) => (
              <ResultCards
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                keyValues_1={item.keyValues_1}
                keyValues_2={item.keyValues_2}
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
