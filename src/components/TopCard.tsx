import React from 'react'

interface TopCardProps {
    heading?: string;
    subHeading?: string;
}

const TopCard = ({ heading = 'New', subHeading = 'No. 1 Studio of 2025' }: TopCardProps) => {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.05)] pt-[6px] pr-[14px] pb-[6px] pl-[6px] rounded-[10px] w-fit flex items-center gap-2">
        <div className="bg-[rgb(0,85,254)] backdrop-blur-[2px] rounded-[6px] px-2 py-1 font-bold text-[11px]">
            {heading}
        </div>
        <p className='text-[14px] font-extralight'>{subHeading}</p>
    </div>
  )
}

export default TopCard
