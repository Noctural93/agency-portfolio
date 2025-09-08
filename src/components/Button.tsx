import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  childrenClass?: string;
}

const Button = ({children, childrenClass}: ButtonProps) => {
  return (
    <>
        <button className={twMerge("border-[#ffffff26] border-[3px] border-solid bg-[#0055ff] shadow-[0_8px_40px_0_rgba(0,85,255,0.7),_0_0_10px_1px_rgba(255,255,255,0.3)_inset,_0_0_0_5px_rgba(0,85,255,0.2)] px-[18px] py-[10px] rounded-[10px] flex flex-nowrap cursor-pointer text-center justify-center", childrenClass)}>
            {children}    
        </button> 
    </>
  )
}

export default Button
