import ProjectsSection from "@/components/portfolioPage/ProjectsSection";
import FAQSection from "@/components/homePage/FAQSection";
import BGVideo from "@/components/homePage/BGVideo";

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
