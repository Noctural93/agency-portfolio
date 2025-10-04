
const FormCard = () => {
  return (
    <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
      <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative px-[40px] pt-[40px] pb-[30px]">
        <div className="w-full h-min flex justify-between gap-[20px]">
          <div className="w-full h-min">
            <p>First name*</p>
            <input
              type="text"
              defaultValue="Jane"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all"
            />
          </div>

          <div className="w-full h-min">
            <p>Last name*</p>
            <input
              type="text"
              defaultValue="Jane"
              className="w-full p-[18px] bg-[#33333333] outline-none rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
