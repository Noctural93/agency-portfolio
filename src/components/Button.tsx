import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({children}: ButtonProps) => {
  return (
    <>
        <button className='border-[#ffffff26] border-[3px] border-solid bg-[#0055ff] shadow-[0_8px_40px_0_rgba(0,85,255,0.7),_0_0_10px_1px_rgba(255,255,255,0.3)_inset,_0_0_0_5px_rgba(0,85,255,0.2)] px-[18px] py-[10px] rounded-[10px] flex flex-nowrap cursor-pointer'>
            {children}    
        </button> 
    </>
  )
}

export default Button
