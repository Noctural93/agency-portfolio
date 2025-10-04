import React from "react";
import Bottomvector from "../../../public/Bottomvector";
import HeroSection from "./HeroSection";
import ContactFormSection from "./ContactFormSection";

const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-[70px] w-full">
      <HeroSection />

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
