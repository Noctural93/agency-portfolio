import dynamic from "next/dynamic";

const BGVideo = dynamic(() => import("@/components/homePage/BGVideo"), {
  ssr: true,
});

const HeroSection = dynamic(
  () => import("@/components/projectsPage/HeroSection"),
  {
    ssr: true,
    loading: () => <div className="h-[100vh] w-full" />,
  }
);

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

interface ProjectPageProps {
  params: { slug: string };
}

const projects = [
  {
    slug: "swacpay",
    date: "16/09/2024",
    title: "Swacy Pay",
    desc: "SwacyPay is a cutting-edge creative website that brings innovative designs and strategic solutions to life.",
    projectType: ["E-Commerce", "Portfolio"],
    services: "Web Design & Web Development",
    category: "Payments Platform",
    client: "ABC"
  },
];

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projects.find((p) => p.slug === params.slug);
  return (
    <>
      <BGVideo />
      <HeroSection
        date={project?.date}
        title={project?.title}
        desc={project?.desc}
        projectType={project?.projectType}

      />
      <FAQSection />
    </>
  );
};

export default ProjectPage;
