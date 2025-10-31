"use client";

import React, { useState } from "react";
import TeamMember from "../../../public/teamMember.avif";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

interface TeamMemberProps {
  card: {
    name: string;
    role: string;
  };
}

const TeamMemberCard = ({ card }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className="relative w-full h-min p-[10px] gap-[22px] border-[2px] border-solid border-[#ffffff12] rounded-[20px] bg-gradient-to-t from-blue-600/15 to-neutral-600/10 hover: cursor-pointer z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex rounded-[20px]">
        <Image
          src="/teamMember.avif"
          alt={card.name}
          fill
          className="rounded-[20px] object-cover object-center"
        />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center border border-solid border-[#0055ff26] backdrop-blur-[2px] bg-[#000e2b] p-[16px] rounded-[12px] shadow-[rgba(0,0,0,0.35)_2px_4px_24px_10px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(43%_50%,rgba(9,9,18,0.15)_0%,rgb(9,9,18)_100%)] shadow-[rgba(0,85,255,0.1)_0px_10px_10px_-1px_inset] rounded-[12px] z-0" />
          <div className="flex flex-col z-10">
            <h3 className="font-[600] text-[13px]">{card.name}</h3>
            <p className="text-[12px] text-[#ffffff80]">{card.role}</p>
          </div>
          <div
            className={`relative inline-block text-[18px] font-extralight transition-colors duration-700 ease-in-out p-[10px] border border-solid border-[#0055ff26] shadow-[rgba(0,85,255,0.25)_0px_5px_25px_0px,rgba(255,255,255,0.08)_0px_10px_10px_-1px_inset] rounded-[10px] z-10 overflow-hidden ${
              isHovered ? "text-white" : "text-[#ffffff3f]"
            }`}
          >
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%,rgba(0,153,255,0.15)_0%,rgb(9,9,18)_100%)] shadow-[rgba(0,85,255,0.1)_0px_10px_10px_-1px_inset] rounded-[10px] w-full h-full z-[-1] overflow-visible"/>
            <FaXTwitter className="relative z-10"/>
          </div>
        </div>
      </div>
      <div className="absolute bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)] top-0 left-1/2 -translate-1/2 h-[1px] w-[62%]" />
    </div>
  );
};

export default TeamMemberCard;
