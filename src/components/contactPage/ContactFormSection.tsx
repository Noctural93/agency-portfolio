import FormCard from "./FormCard";

import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlinePushPin } from "react-icons/md";

const ContactFormSection = () => {
  return (
    <div className="relative flex flex-col xl:flex-row h-fit w-full max-w-[1440px] mx-auto gap-[20px] z-10 text-white px-8 lg:px-22 xl:px-20 2xl:px-32 items-center justify-center xl:items-start mb-[15px]">
      <FormCard />

      <div className="h-min w-full grid grid-col-1 md:grid-cols-2 xl:flex xl:flex-col xl:max-w-[292px] gap-[24px] text-[14px]">
        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative px-[38px] py-[30px] flex flex-col gap-[14px]">
            <div className="flex items-center gap-[10px]">
              <MdOutlineEmail size={21}/>
              <p>Email</p>
              <button className="text-[12px] border-[#ffffff26] border-[2px] border-solid bg-[#0055ff] px-[5px] py-[1px] rounded-[6px] flex flex-nowrap cursor-pointer text-center justify-center">
                24/7   
              </button>
            </div>
            <div className="w-full h-[1px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)]" />
            <div>
              <p className="text-[#999999]">{"help [at] MyAgency"}</p>
            </div>
          </div>
        </div>

        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative px-[38px] py-[30px] flex flex-col gap-[14px]">
            <div className="flex items-center gap-[10px]">
              <FiSmartphone size={21}/>
              <p>Phone</p>
            </div>
            <div className="w-full h-[1px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)]" />
            <div>
              <p className="text-[#999999]">{"+1234567890"}</p>
            </div>
          </div>
        </div>

        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative px-[38px] py-[30px] flex flex-col gap-[14px]">
            <div className="flex items-center gap-[10px]">
              <MdOutlinePushPin size={21} className="rotate-[45deg]"/>
              <p>Address</p>
              <button className="border-[#ffffff26] border-[2px] border-solid bg-[#0055ff] px-[5px] py-[1px] rounded-[6px] flex flex-nowrap cursor-pointer text-center justify-center text-[12px]">
                REMOTE  
              </button>
            </div>
            <div className="w-full h-[1px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.2)_50%,rgba(255,255,255,0)_100%)]" />
            <div>
              <p className="text-[#999999]">{"India"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
