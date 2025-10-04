'use client'

import ProjectsSection from "@/components/portfolioPage/ProjectsSection";
import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
});

const BGVideo = dynamic
(() => import("@/components/homePage/BGVideo"), {
  ssr: false,
});

const Portfolio = () => {
  return (
    <>
      <BGVideo childrenClass="h-[624px] md:h-[724px]" />
      <ProjectsSection />
      <FAQSection />
    </>
  );
};

export default Portfolio;
