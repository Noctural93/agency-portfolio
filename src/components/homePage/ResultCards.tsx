import Image from 'next/image';
import React from 'react'
import resultCardBg from '../../../public/resultCardBg.jpeg'

interface ResultCardsProps {
    title: string;
    subtitle: string;
    description: string;
    keyValues_1: string;
    keyValues_2: string;
}

const ResultCards = ({
    title,
    subtitle,
    description,
    keyValues_1,
    keyValues_2
}: ResultCardsProps) => {
  return (
    <div className='h-[530px] w-full md:w-[462px] flex justify-center items-center rounded-[30px] border border-solid backdrop-blur-[2px] bg-[#080808] border-[#ffffff14] p-[10px]'>
      <div className='relative h-full w-full border-[#ffffff14] border border-solid rounded-[30px]'>
        <Image
            src={resultCardBg}
            alt='Result Card Background'
            className='object-cover object-center h-full w-full rounded-[30px]'
        />
        <div className='absolute left-1/2 -translate-x-1/2 bottom-2 w-[95%] h-min bg-[#080808] rounded-[19px] pt-[26px] pb-[16px] px-[16px]'>
            <div className='gap-[10px] flex items-start justify-center flex-col'>
              <div className='flex flex-col items-start justify-center gap-[20px]'>
                <h1 className='text-[24px] font-bold'>{title}</h1>
                <h1 className='text-[18px] font-[600]'>{subtitle}</h1>
              </div>
              <div className='bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[230px]'/>
              <div className='flex flex-col items-start justify-center gap-[22px]'>
                <p className='text-[#ffffff80] text-[16px] -tracking-[0.2px] leading-[26px]'>{description}</p>
                <div className='flex flex-wrap gap-[10px] text-[#ffffff80] text-[15px]'>
                  <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[13px] py-[8px]'>{keyValues_1}</p>
                  <p className='border-[#ffffff14] rounded-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(-7.642439925348299e-8deg,_rgba(255,255,255,0.05)_0%,_rgba(97,97,97,0.09)_100%)] px-[12px] py-[7px]'>{keyValues_2}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCards
