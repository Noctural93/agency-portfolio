import dollar from "../../../public/dollar.svg";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

interface FeatureCardProps {
  card: {
    title: string;
    subtitle: string;
    description: string;
    cta?: string;
    pro?: boolean;
  };
}

const FeatureCard = ({ card }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full h-min p-[30px] gap-[22px] border-[2px] border-solid border-[#ffffff12] rounded-[20px] bg-gradient-to-t from-blue-600/15 to-neutral-600/10 hover: cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-[22px]">
        <div className="flex justify-between items-center">
          <Image src={dollar} className="h-[32px] w-[32px]" alt="dollar" />
          <div
            className={`inline-block text-[16px] font-extralight rotate-[135deg] transition-colors duration-700 ease-in-out ${
              isHovered ? "text-white" : "text-[#ffffff3f]"
            }`}
          >
            <FaArrowLeftLong />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[16px]">{card.title}</h1>
            {card?.cta 
              ? <span className="bg-[#0055ff] rounded-[8px] border-[2px] border-[#ffffff26] border-solid px-[8px] py-[2px] text-[11px]">{card.cta}</span> 
              : null
            }
          </div>
          <h1 className="text-[16px] text-[#ffffff99]">{card.subtitle}</h1>
        </div>
        <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[60%]" />
        <p className="text-[16px] text-[#ffffff80]">{card.description}</p>
      </div>
      <div className="absolute bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)] top-0 left-1/2 -translate-1/2 h-[1px] w-[62%]" />
    </div>
  );
};

export default FeatureCard;
