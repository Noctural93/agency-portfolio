import SelectInContact from "./SelectInContact";

const FormCard = () => {
  return (
    <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12] text-[13px]">
      <div className="h-full w-full flex flex-col gap-[20px] md:gap-[30px] rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative px-[40px] pt-[40px] pb-[30px]">
        <div className="w-full h-min flex flex-col md:flex-row md:justify-between gap-[20px]">
          <div className="flex flex-col w-full h-min gap-[14px]">
            <p>First name*</p>
            <input
              type="text"
              placeholder="Jane"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all placeholder:text-[#999999]"
            />
          </div>

          <div className="flex flex-col w-full h-min gap-[14px]">
            <p>Last name*</p>
            <input
              type="text"
              placeholder="Smith"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all placeholder:text-[#999999]"
            />
          </div>
        </div>

        <div className="w-full h-min flex justify-between gap-[20px]">
          <div className="flex flex-col w-full h-min gap-[14px]">
            <p>How can we reach you?*</p>
            <input
              type="text"
              placeholder="jane@agency.com"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all placeholder:text-[#999999]"
            />
          </div>
        </div>

        <div className="w-full h-min flex flex-col md:flex-row md:justify-between gap-[20px]">
          <div className="flex flex-col w-full h-min gap-[14px]">
            <p>here Are you from*</p>
            <input
              type="text"
              placeholder="India"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all placeholder:text-[#999999]"
            />
          </div>

          <div className="relative flex flex-col w-full h-min gap-[14px]">
            <p>What's the type of your company?*</p>
            <SelectInContact />
          </div>
        </div>

        <div className="w-full h-min flex justify-between gap-[20px]">
          <div className="flex flex-col w-full h-min gap-[14px]">
            <p>Message*</p>
            <textarea
              placeholder={"Type your message..."}
              className="w-full h-[90px] p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all placeholder:text-[#999999]"
            />
          </div>
        </div>

        <div className="w-full h-min flex justify-between gap-[20px]">
          <div className="flex flex-col w-full h-min gap-[14px]">
            <button className="text-[15px] border-[#ffffff26] border-[2px] border-solid bg-[#0055ff] rounded-[6px] flex flex-nowrap cursor-pointer text-center justify-center items-center h-[50px]">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
