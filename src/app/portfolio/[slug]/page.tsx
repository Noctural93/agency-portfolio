import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/projectsData";

import BGVideo from "@/components/homePage/BGVideo";
import HeroSection from "@/components/projectsPage/HeroSection";
import FAQSection from "@/components/homePage/FAQSection";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <BGVideo />
      <HeroSection
        date={project.year}
        title={project.title}
        desc={project.description}
        projectType={project.platformType}
        services={project.services}
        client={project.client}
        image={project.image}
        externalLink={project.externalLink}
      />
      
      <section className="w-full max-w-[1440px] mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32 py-[70px] text-white flex flex-col gap-20">
        
        {/* Analysis Section */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-medium">Analysis – Performance and Responsiveness</h2>
          <p className="text-[#ffffff99] leading-relaxed max-w-4xl text-lg">
            The initial analysis of performance and responsiveness revealed areas of friction that significantly impacted user engagement and retention metrics across mobile and web platforms. Addressing these issues was paramount for establishing trust and reliability.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-lg">Performance</span>
              <span className="px-3 py-1 bg-[#0055ff] rounded-md text-sm font-semibold">95%</span>
            </div>
            <p className="text-[#ffffff99]">We utilized advanced caching techniques, lazy loading, and edge computing to accelerate content delivery, resulting in a 40% improvement in load times and a smoother user experience.</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <span className="font-medium text-lg">Responsiveness</span>
            <p className="text-[#ffffff99]">Adaptive layouts and fluid typography were implemented across all breakpoints, ensuring an optimal viewing experience from the smallest mobile screens up to 4K desktop displays.</p>
          </div>
        </div>

        {/* Small Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="h-[300px] md:h-[400px] w-full rounded-[30px] border border-solid border-[#ffffff12] bg-[#111] overflow-hidden relative group">
            <Image 
              src={project.image} 
              alt={`${project.title} detail 1`}
              fill
              className="object-cover object-left group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
          </div>
          <div className="h-[300px] md:h-[400px] w-full rounded-[30px] border border-solid border-[#ffffff12] bg-[#1a1a1a] overflow-hidden relative group">
            <Image 
              src={project.image} 
              alt={`${project.title} detail 2`}
              fill
              className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-medium">Problem – Site and Service Improvement</h2>
          <p className="text-[#ffffff99] leading-relaxed max-w-4xl text-lg">
            Identifying bottlenecks in the user journey allowed us to streamline the checkout process and reorganize complex service offerings into a more intuitive, user-friendly hierarchical structure.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-lg">Service Improvement</span>
              <span className="px-3 py-1 bg-[#0055ff] rounded-md text-sm font-semibold">88%</span>
            </div>
            <p className="text-[#ffffff99]">A thorough UX audit highlighted areas where user drop-off was highest. We re-engineered the core workflows, minimizing friction and simplifying complex decision matrices for a clearer conversion path.</p>
          </div>
        </div>

        {/* Large Secondary Image */}
        <div className="w-full h-[400px] md:h-[600px] rounded-[30px] border border-solid border-[#ffffff12] bg-[#151515] overflow-hidden relative group">
          <Image 
            src={project.image} 
            alt={`${project.title} overview`}
            fill
            className="object-cover object-bottom group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        </div>

        {/* Solution Section */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-medium">Solution – Communication and Deployment</h2>
          <p className="text-[#ffffff99] leading-relaxed max-w-4xl text-lg">
            What we needed was a robust backend architecture paired with an intuitive frontend that allowed for real-time state synchronization, enabling users to interact seamlessly with dynamic content blocks.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-lg">Communication</span>
              <span className="px-3 py-1 bg-[#0055ff] rounded-md text-sm font-semibold">100%</span>
            </div>
            <p className="text-[#ffffff99]">Continuous integration and automated deployment pipelines were set up using modern DevOps practices, ensuring that updates are rolled out rapidly and reliably without compromising system stability.</p>
          </div>
        </div>

      </section>

      <section className="w-full max-w-[1440px] mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32 py-[70px] text-white flex flex-col gap-10">
        <div className="flex justify-between items-end w-full border-b border-[#ffffff12] pb-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">More Other cases</h2>
          <Link href="/portfolio" className="px-6 py-3 bg-[#0055ff] hover:bg-[#0044cc] text-white font-medium rounded-full transition-colors text-sm md:text-base">
            View More Works
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
          {projectsData.filter(p => p.slug !== project.slug).slice(0, 2).map((otherProject) => (
            <Link href={`/portfolio/${otherProject.slug}`} key={otherProject.id} className="w-full group">
              <div className="h-[300px] md:h-[400px] w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative bg-[#080808]">
                <Image
                  src={otherProject.image}
                  alt={otherProject.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute h-full w-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.9)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <p className="text-lg font-medium">{otherProject.title.split('|')[0].trim()}</p>
                  <p className="px-4 py-1 border border-solid border-[#ffffff33] rounded-full text-sm backdrop-blur-sm">{otherProject.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <FAQSection />
    </>
  );
};

export default ProjectPage;
