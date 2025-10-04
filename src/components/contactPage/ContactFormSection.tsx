import FormCard from "./FormCard";

const ContactFormSection = () => {
  return (
    <div className="relative flex flex-row h-fit w-full max-w-[1440px] mx-auto gap-[20px] px-[120px]">
      <FormCard />

      <div className="h-min w-full flex flex-col max-w-[292px] gap-[24px]">
        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative">
            <p>Email</p>
          </div>
        </div>

        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative">
            <p>Phone</p>
          </div>
        </div>

        <div className="h-min w-full flex items-center justify-center p-[10px] rounded-[30px] border border-solid bg-[#080808] border-[#ffffff12]">
          <div className="h-full w-full rounded-[30px] border border-solid border-[#ffffff12] overflow-hidden relative">
            <p>Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
