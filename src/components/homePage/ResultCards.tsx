import Image, { StaticImageData } from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

interface ResultCardsProps {
  platformType: Array<string>;
  title: string;
  img: StaticImageData;
  description: string;
  keyValues: Array<string>;
}

const ResultCards = ({
  platformType,
  title,
  img,
  description,
  keyValues,
}: ResultCardsProps) => {
  return (
    <div className="h-full w-full md:w-[640px] flex flex-col justify-center items-center rounded-[30px] border-[2px] border-solid backdrop-blur-[2px] bg-[#080808] border-[#ffffff2a] p-[10px] overflow-hidden">
      <div className="h-full w-full gap-[16px]">
        <div className="h-[70%] w-full">
          <Image
            src={img}
            alt="Result Card Background"
            className="w-full h-full object-cover object-top rounded-[calc(30px)]"
            loading="lazy"
          />
        </div>
        <div className="w-full h-min bg-[#080808] rounded-[30px] pt-[26px] pb-[16px] px-[16px]">
          <div className="gap-[15px] flex items-start justify-center flex-col">
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <div>
                {platformType.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <h1 className="text-[18px]">{title}</h1>
              <p className="text-[#ffffff80] text-[14px] -tracking-[0.2px]">
                {description}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-wrap gap-[10px] text-[#ffffff80] text-[15px]">
                {keyValues.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center font-[700] leading-none"
                  >
                    <span className="inline-block text-lg translate-y-[1px] mr-1">
                      ·
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[2px]">
                <p>Read case study</p>
                <BsArrowRightCircle/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCards;

{
  /* <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[13px] py-[8px]'>{keyValues[0]}</p>
                <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[12px] py-[7px]'>{keyValues}</p> */
}
