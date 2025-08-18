import { motion, useScroll, useTransform } from "framer-motion";
import SectionIndicator from "../SectionIndicator";
import Button from "../Button";
import Image from "next/image";
import rocket from "../../../public/rocket-25.png";
import infobg from "../../../public/infocard-bg.png";
import { useRef } from "react";

interface InfoCardsProps {
  card: {
    title: string;
    description: string;
    features: string[];
    step: string;
    cta?: string;
  };
}

const InfoCards = ({ card }: InfoCardsProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.85 1"], 
  });
  const scale = useTransform(scrollYProgress, [0, 0.85, 1], [0.9, 1, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale }}
        className="relative w-full h-auto rounded-[30px] overflow-hidden z-[1] border border-[#ffffff1c]"
      >
        <div className="absolute inset-0">
          <Image
            src={infobg}
            alt="bg-img"
            className="rounded-[30px] object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="relative p-[30px] flex flex-col gap-[20px] h-min w-full items-start justify-center z-1">
          <div className="w-full flex justify-between">
            <div>
              <Image src={rocket} alt="icon" />
            </div>
            <SectionIndicator
              text="Stage 1"
              dot={false}
              className="text-[12px] px-[12px] py-[10px] md:px-[12px] md:py-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="flex flex-col gap-[14px]">
              <h1>{card.title}</h1>
              <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[230px] self-start" />
            </div>
            <div className="flex flex-col gap-[30px]">
              <p className="text-[#ffffff76] text-[14px]">{card.description}</p>
              <div className="w-full flex text-[14px] text-nowrap gap-[10px] text-[#ffffff99]">
                <p className="border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[12px] py-[7px]">
                  {card.features[0]}
                </p>
                <p className="border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[12px] py-[7px]">
                  {card.features[1]}
                </p>
              </div>
              {card.cta && (
                <div>
                  <Button>{card.cta}</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full backdrop-blur-[10px] z-[-1] overflow-hidden" />
      </motion.div>
    </>
  );
};

export default InfoCards;
