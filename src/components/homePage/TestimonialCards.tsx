import Image from "next/image";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import userImg from "../../../public/user_img.png";
import star from '../../../public/star.png';

const TestimonialsData = [
  {
    rating: 5,
    description: `"They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence."`,
    title: "John Smith · CEO",
    subtitle: "Innovate Solutions",
  },
  {
    rating: 5,
    description: `"The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market."`,
    title: "Emily Davis · Product Manager",
    subtitle: "Nexus Digital",
  },
  {
    rating: 5,
    description: `"Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning."`,
    title: "DavidLee · Founder",
    subtitle: "GreenLeaf Enterprises",
  },
  {
    rating: 5,
    description: `"We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning websites."`,
    title: "Mark Thompson · Creative Director",
    subtitle: "PixelWorks Studio",
  },
  {
    rating: 5,
    description: `"They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience."`,
    title: "Brain Clark · Team Lead",
    subtitle: "Mandro Designs",
  },
  {
    rating: 5,
    description: `"The team’s dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand."`,
    title: "Daniel Carter · Founder",
    subtitle: "Fusion Studios",
  },
];

const TestimonialCards = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return (
    <div className="flex h-min w-full max-w-[1440px] mx-auto px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
      <div className="grid gap-[24px] auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {TestimonialsData.map((card, index) => (
          <div
            className="relative w-full h-min p-[30px] gap-[22px] border-[2px] border-solid border-[#ffffff12] rounded-[20px] bg-gradient-to-t from-blue-600/15 to-neutral-600/10 hover: cursor-pointer"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            key={index}
          >
            <div className="flex flex-col gap-[22px]">
              <div className="flex justify-between items-center">
                <Image
                  src={userImg}
                  className="h-[48px] w-[48px]"
                  alt="dollar"
                />
                <div
                  className={`inline-block text-[20px] font-extralight transition-colors duration-700 ease-in-out ${
                    isHovered == index ? "text-white" : "text-[#ffffff3f]"
                  }`}
                >
                  <FaXTwitter />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                <div className="flex items-center">
                  {
                    Array.from({ length: card.rating }).map((_, starIndex) => (
                      <Image 
                          key={starIndex} 
                          src={star} 
                          alt="star-icon"
                          width={19}
                          loading="lazy"
                        />
                    ))
                  }
                </div>
                <p className="text-[14px] tracking-[0.3px] text-[#ffffff80]">{card.description}</p>
              </div>
              <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[60%]" />
              <div className="flex flex-col justify-start">
                <h3 className="font-[600] text-[15px]">{card.title}</h3>
                <p className="text-[14px] text-[#ffffff80]">{card.subtitle}</p>
              </div>
            </div>
            <div className="absolute bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)] top-0 left-1/2 -translate-1/2 h-[1px] w-[62%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;
