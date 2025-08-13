import React from 'react'

interface SectionIndicatorProps {
    text: string
}

const SectionIndicator = ({text}: SectionIndicatorProps) => {
  return (
    <div className="relative border bprder-solid border-[#ffffff1f] rounded-[10px] px-[20px] py-[8px] md:px-[14px] md:py-[6px] flex items-center justify-center gap-[10px] backdrop-blur-[2.5px] bg-[linear-gradient(0.07383128568086761deg,_rgba(0,85,255,0.08)_0%,_rgba(153,153,153,0.1)_100%)] w-fit">
        <div>·</div>
        <p className="text-[16px] leading-[1.2em] font-extralight">{text}</p>
        <div className="absolute bg-[linear-gradient(90deg,_rgba(0,85,255,0)_0%,_rgb(0,85,255)_50%,_rgba(0,85,255,0)_100%)] top-0 left-1/2 -translate-1/2 h-[1px] w-[62%]"/>
    </div>
  )
}

export default SectionIndicator
