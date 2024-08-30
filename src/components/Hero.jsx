"use client";
import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col relative  mt-[132px]   '>
        <img className='w-[1216px] h-[600px] rounded-sm ' src="./hero.png" alt="" />
        <div className=' flex absolute pl-10 pt-10 mt-[335px]  ml-[11px]  flex-col w-[598px] h-[252px] bg-white rounded-xl'>
            <div className= 'w-[77px] h-[20px] text-sm bg-[#4B6BFB] text-white rounded-md items-center justify-center text-normal '>Technology</div>
            <div className=' w-[518px] h-20 text-3xl mt-4 font-semibold text-[#181A2A]'>Grid system for better <br /> Design User Interface</div>
            <div className='mt-6 text-[#97989F] text-base text-normal' >August 20, 2022</div>
        </div>
        <div className=' flex flex-row mt-[11px] justify-end '>
            <img src="./back.png" alt="" />
            <img src="./forward.png" alt="" />
        </div>
    </div>
    
  )
}
