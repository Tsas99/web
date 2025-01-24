"use client";
import { Footer } from '@/components/Footer';
import React from 'react'

export const Contact = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-4xl flex flex-col w-[624px] mt-[214px] justify-center ml-[748px]'>
        <div className='text-2xl font-semibold '>Contact Us</div>
        <p className='mt-[20px] text-base font-normal text-[#696A75]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className='flex flex-row gap-20 mt-[30px]'>
          <div className='w-[294px] h-[133px] text-2xl font-semibold border rounded-xl bg-slate-50 pt-[10px] pl-4'>Adress
            <div className='text-lg font-normal text-[#696A75] mt-[10px] '>1328 Oak Ridge Drive, Saint Louis, Missouri</div>
          </div>
          <div className='w-[294px] h-[133px] text-2xl font-semibold border rounded-xl bg-slate-50 pt-[10px] pl-4' >Contact
            <div className=' text-lg font-normal text-[#696A75] mt-[10px]  ' >313-332-8662 <br />
            info@email.com</div>
          </div>
        </div>
        <div className='flex flex-col w-[643px] h-[440px] bg-slate-100 rounded-xl mt-[49px] mb-[166px]'>
          <div className='text-lg font-semibold text-[#000000] pt-[29px] pl-[35px] '>Leave a message</div>
          <div className='flex flex-row gap-7 mt-6 pl-[35.5px] '>
            <input type="text" placeholder='Your name' className=' text-base font-normal text-[#97989F] w-[225px] h-[35px] rounded-xl pl-[18px]' />
            <input type="text" placeholder='Your Email' className=' text-base font-normal text-[#97989F] w-[225px] h-[35px] rounded-xl pl-[18px]'/>
          </div>
          <div>
            <input type="text" placeholder='Subject' className=' text-base font-normal text-[#97989F] w-[475px] h-[35px] mt-[21px] ml-[35.5px] rounded-xl pl-5' />
          </div>
          <div>
            <input type="text" placeholder='Write a message' className=' text-base font-normal text-[#97989F] flex w-[478px] h-[134px] rounded-xl mt-[20px] ml-[36px] pb-[100px] pl-[20px]' />
          </div>
          <div>
            <button className='w-[130px] h-10 bg-[#4B6BFB] rounded-xl text-white text-sm font-medium mt-[29px] ml-9'>Send a messgae</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Contact




