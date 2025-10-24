import Image, { StaticImageData } from 'next/image';
import React from 'react'

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
    <div className='h-full w-full md:w-[640px] flex flex-col justify-center items-center rounded-[30px] border-[2px] border-solid backdrop-blur-[2px] bg-[#080808] border-[#ffffff2a] p-[10px] overflow-hidden'>
      <div className='h-full w-full gap-[16px]'>
        <Image
            src={img}
            alt='Result Card Background'
            className='w-full min-h-0 flex flex-col grow rounded-[calc(30px)]'
        />
        <div className='w-full h-min bg-[#080808] rounded-[30px] pt-[26px] pb-[16px] px-[16px]'>
          <div className='gap-[10px] flex items-start justify-center flex-col'>
            <div className='flex flex-col items-start justify-center'>
              <div>
                {
                  platformType.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                }
              </div>
              <h1 className='text-[24px] font-bold'>{title}</h1>
              <p className='text-[#ffffff80] text-[16px] -tracking-[0.2px] leading-[26px]'>{description}</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-wrap gap-[10px] text-[#ffffff80] text-[15px]'>
                {/* <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[13px] py-[8px]'>{keyValues[0]}</p>
                <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[12px] py-[7px]'>{keyValues}</p> */}
                {
                  keyValues.map((item, index) => (
                    <p key={index} className='flex place-self-center'>· {item}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCards
