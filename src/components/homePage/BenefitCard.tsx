import Image, { StaticImageData } from "next/image";
import Button from "../Button";

interface BenefitCardProps {
  imgString: StaticImageData;
  title: string;
  isNew?: boolean;
  description: string;
  cta_1?: string;
  cta_2?: string;
  imgClass?: string;
  extraClass?: string;
}

const BenefitCard = ({ imgString, title, isNew=false, description, cta_1, cta_2, imgClass, extraClass }: BenefitCardProps) => {
  return (
    <div className={`relative w-full border border-solid border-[#ffffff12] flex flex-col items-start justify-start pt-[20px] pb-[40px] pl-[20px] pr-[20px] backdrop-blur-[4px] rounded-[30px] gap-[22px] overflow-hidden`}>
      {
        title !== 'Requests & Revisions' ? (
          <div className={`absolute -z-[1] rounded-[100%] pointer-events-none blur-[322px] h-full w-full ${extraClass}`} />
        ) : null
      }
      <Image
        src={imgString}
        alt={title}
        className={`w-full ${imgClass} rounded-[30px] object-cover object-center`}
      />
      <div className="w-full h-full flex flex-col items-start flex-nowrap justify-center pl-[12px] pr-[12px] gap-[14px]">
        <div className="flex flex-col gap-[14px] items-start justify-center w-full">
          <h1>
            {title}
          </h1>
          <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[230px] m-w-[1300px] self-start" />
        </div>

        <div className="flex flex-col gap-[36px] flex-nowrap">
          <p>{description}</p>
          {
            (cta_1 || cta_2)
            ? (
              <div className="flex gap-[10px]">
                {cta_1 && <Button>{cta_1}</Button>}
                {cta_2 && <button className="border-solid backdrop-blur-[2.5px] rounded-[10px] bg-[#ffffff26] px-[18px] py-[10px]">{cta_2}</button>}
              </div>)
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default BenefitCard
