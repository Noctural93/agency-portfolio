import dynamic from "next/dynamic";

const ProjectsSection = dynamic(
  () => import("@/components/portfolioPage/ProjectsSection"),
  {
    ssr: true,
    loading: () => <div className="h-[100vh] w-full" />,
  }
);

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const BGVideo = dynamic
(() => import("@/components/homePage/BGVideo"), {
  ssr: true,
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
