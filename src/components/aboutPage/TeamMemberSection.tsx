import Bottomvector from "../../../public/Bottomvector";
import CalloutSection from "../CalloutSection";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberData = [
  {
    name: "Daniel Reed",
    role: "Co-Founder, CEO",
  },
  {
    name: "James Turner",
    role: "Developer, Tech Lead",
  },
  {
    name: "Michael Carter",
    role: "Marketing, Organizer",
  },
  {
    name: "William Scott",
    role: "Designer, Art Lead",
  },
  {
    name: "Ethan Mitchell",
    role: "UX/UI Specialist",
  },
  {
    name: "Isabella Hughes",
    role: "Content Creator, Writer",
  },
];

const TeamMemberSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[70px] gap-[60px] md:pt-[100px] w-full overflow-hidden">
      <CalloutSection
        sectionIndicatiorText="Team Members"
        title="Meet the Team Making"
        subtitle="Things Happen Every Day"
        description="Our team is made up of passionate professionals who bring their expertise and creativity to every project."
        btnText="Book a 15-min call"
      />

      <div className="flex h-min w-full max-w-[1440px] mx-auto px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
        <div className="grid gap-[24px] auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {TeamMemberData.map((card, index) => (
            <TeamMemberCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* bottom vector animation */}
      <div className="relative z-3 w-full max-w-[1440px] h-[30px] md:h-[70px] md:mt-[50px]">
        <Bottomvector />
        <div className="absolute z-0 bottom-1 left-1/2 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
        <div className="absolute z-0 bottom-1 left-1/6 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
