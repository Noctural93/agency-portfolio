import AnimatedText from "../FramerAnimations/AnimatedText";
import SectionIndicator from "../SectionIndicator";
import Image from "next/image";
import HomePageAboutSection from "../../../public/HomePageaboutSection.jpeg";
import InfoCards from "./InfoCards";

"use client"

const InfoCardsData = [
  {
    title: "Kickoff",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequuntur explicabo omnis, obcaecati quos fugiat ipsum esse cumque quibusdam labore possimus aperiam dignissimos harum quia doloremque neque, quis totam. Sequi.",
    features: ["Comprehensive Consultation", "Project Roadmap"],
    step: "Stage 1",
  },
  {
    title: "Execution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur explicabo omnis, obcaecati quos fugiat ipsum esse cumque quibusdam labore possimus aperiam dignissimos harum quia doloremque neque, quis totam. Sequi.",
    features: ["Seamless Integration", "Real Time Collaboration"],
    step: "Stage 2",
  },
  {
    title: "Handoff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur explicabo omnis, obcaecati quos fugiat ipsum esse cumque quibusdam labore possimus aperiam dignissimos harum quia doloremque neque, quis totam. Sequi.",
    features: ["Ongoing Support", "Documentation"],
    step: "Stage 3",
    cta: "Book an Appointment",
  },
];

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "../new/radialOrbitalTimeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

// const HowWeWorkSection = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center pt-10 w-full gap-[70px] md:gap-[100px] lg:overflow-visible lg:items-center lg:justify-start bg-[#000000] z-10 -top-px">
//       <div className="relative flex flex-col lg:flex-row lg:flex-nowrap h-min w-full max-w-[1440px] gap-[70px] md:gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px] lg:overflow-visible lg:items-start lg:justify-center">
//         <div className="flex flex-col flex-nowrap gap-[50px] h-min w-full">
//           <div className="h-min flex grow lg:max-w-[600px] w-full gap-[30px] items-start justify-center flex-col flex-nowrap">
//             <div className="flex justify-start items-start flex-col gap-[30px] w-full h-min">
//               <SectionIndicator text="How We Work?" />
//               <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
//                 <AnimatedText
//                   text="A Process That Works for You"
//                   className="text-[32px] -tracking-[2px] leading-8 md:text-[52px] md:leading-[50px] font-normal md:-tracking-[1.9px]"
//                 />
//                 {/* <AnimatedText
//                   text="From Design To Launch"
//                   className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
//                 /> */}
//               </div>
//             </div>
//             <p className="text-[#ffffff99] text-[16px] leading-[26px] font-noraml -tracking-[0.2px] max-w-[540px]">
//               From discovery to launch, our agile workflow keeps things transparent, collaborative, and efficient. We listen, prototype, test, and deliver—ensuring every solution is tailored to your goals.
//             </p>
//           </div>

//           {/* cards */}
//           <div className="h-min w-full flex flex-col items-center justify-center gap-6">
//             {
//               InfoCardsData.map((card, index) => (
//                 <InfoCards 
//                   key={index}
//                   card={card}
//                 />
//               ))
//             }
//           </div>
//         </div>

//         {/* Image */}
//         <div className="contents">
//           <div className="lg:sticky lg:top-[100px] z-1 lg:max-w-[528px] w-full self-start">
//           <div className="relative gap-2.5 flex items-center justify-center h-full md:h-[534px] max-w-full w-full p-0 z-2">
//             <div className="relative h-full w-full p-2.5 rounded-[30px] border border-solid backdrop-blur-[2px] border-[#ffffff0d] bg-[#080808] overflow-hidden z-2">
//               <div className="w-full h-full z-2 border-[#ffffff1a] border border-solid rounded-[30px]">
//                 <Image
//                   src={HomePageAboutSection}
//                   alt="About Agency Section Image"
//                   className="w-full h-full object-center object-cover rounded-[30px] z-2"
//                   loading="lazy"
//                 />

//               </div>
//             </div>
//             <div className="absolute z-10 w-[31%] h-px left-1/2 -translate-x-1/2 bottom-0 bg-[linear-gradient(90deg,rgba(0,85,255,0)_0%,rgb(0,85,255)_50%,rgba(0,85,255,0)_100%)]" />
//             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#0055ff] blur-2xl rounded-[100%] w-[285px] h-[53px] z-1 pointer-events-none" />
//           </div>
//         </div>
//         </div>
//       </div>

//       {/* line */}
//       <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-px w-[85%] self-center m-w-[1300px]" />
//     </section>
//   );
// };

const HowWeWorkSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-10 w-full gap-[70px] md:gap-[100px] lg:overflow-visible lg:items-center lg:justify-start bg-[#000000] z-10 -top-px">
      <div className="relative flex flex-col lg:flex-row lg:flex-nowrap h-min w-full max-w-[1440px] gap-[70px] md:gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px] lg:overflow-visible lg:items-start lg:justify-center">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>

      {/* line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-px w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default HowWeWorkSection;
