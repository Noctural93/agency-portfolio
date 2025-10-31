"use client"

import Image from "next/image";
import portfolio1 from "../../../public/portfolio_1.jpg";
import portfolio2 from "../../../public/portfolio_2.jpg";
import portfolio3 from "../../../public/portfolio_3.jpg";
import { motion } from "framer-motion";

const ProjectCards = () => {
  const cards = [
    {
      id: 1,
      heading: "Way Fields",
      img: portfolio1,
      year: '2024'
    },
    {
      id: 2,
      heading: "Reven Studio",
      img: portfolio2,
      year: '2025'
    },
    {
      id: 3,
      heading: "White Stag",
      img: portfolio3,
      year: '2024'
    },
  ];
  return (
    <div className="relative grid grid-cols-2 h-fit w-full max-w-[1440px] mx-auto gap-[20px] px-[120px]">
      {cards.map((card) => {
        return (
          <motion.div
            key={card.id}
            className={`h-[480px] w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]`}
          >
            <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative">
              <Image
                src={card.img}
                alt={card.heading}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_91.24%,rgba(0,0,0,0.95)_100%)]" />
              <div className="absolute bottom-0 left-[50%] -translate-x-[50%] mb-[12px] w-[97%] border border-solid border-[#ffffff0d] bg-[#0d0d0d] p-[10px] flex items-center justify-between rounded-[12px] shadow-[2px_4px_24px_10px_rgba(0,0,0,0.35)]">
                <p>{card.heading}</p>
                <p>{card.year}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
