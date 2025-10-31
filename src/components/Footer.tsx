"use client";

import Image from "next/image";
import SectionIndicator from "./SectionIndicator";
import { useState } from "react";
import Button from "./Button";

const Footer = () => {
  const [enterEmail, setEnterEmail] = useState<string>("");
  return (
    <footer
      id="footer"
      className="relative w-full h-min flex items-center justify-center pt-[120px]"
    >
      <div className="relative flex flex-col items-center gap-[90px] pt-[100px] pb-[24px] h-min w-full border-t border-solid border-[#ffffff1a]">
        <div className="absolute top-0 left-0 h-full w-full z-1">
          <Image
            src="/fotter_img.avif"
            alt="Footer Image"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative px-[30px] lg:px-[50px] xl:px-[70px] flex items-start justify-start xl:justify-between flex-nowrap max-w-[1440px] w-full z-10 flex-col gap-[50px] xl:flex-row ">
          <div className="flex flex-col gap-[26px] h-min w-full max-w-[360px]">
            <Image src="/logo.svg" alt="logo" width={78} height={78} priority />
            <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[230px] self-start" />
            <p>
              Made remotely with 💙 and passion
              <br />- MyAgency
            </p>
            <div className="flex w-full max-w-[500px] border border-solid rounded-[15px] p-[6px] gap-[10px] items-center h-min justify-center border-[#ffffff1a]">
              <input
                id="email"
                type="text"
                placeholder="Enter Your Email..."
                value={enterEmail}
                onChange={(e) => setEnterEmail(e.target.value)}
                className="bg-transparent flex-grow h-full pl-[12px] py-[10px] pr-[10px] rounded-[15px] text-[#999999] border border-transparent focus:outline-none focus:ring-0 focus:border-[#0099ff] placeholder-[#666] w-full"
              />
              <Button childrenClass="whitespace-nowrap px-[15px] py-[7px] text-[14px]">
                Subscribe Us
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] md:gap-0 md:flex-row w-full justify-between xl:justify-end xl:gap-[100px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[17px]">Template Pages</h1>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Home</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">About</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Porfolio</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Contact</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">FAQ</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[17px]">Social</h1>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">{`Twitter (X)`}</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Instagram</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Youtube</p>
              <p className="text-[15px] text-[#ffffff] opacity-[0.6]">Framer</p>
            </div>
            <div>
              <SectionIndicator text="Sales - 7,360,109" />
            </div>
          </div>
        </div>
        <div className="relative opacity-[0.6] z-10 flex justify-between items-center w-full px-[70px] flex-col gap-[10px] md:gap-0 md:flex-row text-[13px] md:text-[14px]">
          <div>© {new Date().getFullYear()} MyAgency</div>
          <div className="flex flex-nowrap items-center w-min h-min gap-[30px] text-[#ffffff]">
            <p className="whitespace-nowrap">Terms & Conditions</p>
            <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[26px] w-[1px] self-start" />
            <p className="whitespace-nowrap">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
