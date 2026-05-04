import React from "react";
import Bottomvector from "../../../public/Bottomvector";
import dynamic from "next/dynamic";

import ContactFormSection from "./ContactFormSection";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-[70px] w-full">
      <HeroSection 
        topCardHeading="24/7"
        topCardSubHeading="Let's Work Together"
        heading_1="Any Questions Rising?"
        heading_2="We are All Here."
        description="Whether you have a question, need assistance, or want to start a new project, our team is here to help."
        btnText="Fill The Form Out!"
      />

      <ContactFormSection/>

      {/* bottom vector animation */}
      <div className="relative z-3 w-full max-w-[1440px] h-[30px] md:h-[70px]">
        <Bottomvector />
        <div className="absolute z-0 bottom-1 left-1/2 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
        <div className="absolute z-0 bottom-1 left-1/6 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
      </div>
    </section>
  );
};

export default ContactSection;
