import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col   bg-[#E8E8EA] gap-[25px]'>
      <div className='flex  flex-row mt-[100px]   pt-[68px] pl-[500px] gap-[249px]' >
        <div className='flex flex-col w-[289px]  ' >
            <h6 className='text-lg font-semibold text-[#181A2A]'>About</h6>
          <div className='text-base font-normal text-[#696A75]'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
           
        </div>
        <div className='text-base font-normal text-[#3B3C4A] '>
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>   
        </div>
        <div className=' flex flex-row w-4 h-4 gap-4 '>
          <img src="/facebook.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/insta.png" alt="" />
          <img src="/linked.svg" alt="" />
        </div> 
      </div>
      <div className='flex flex-row pl-[500px] '>
        <img src="/footerlogo.png" alt="" className='w-[231px] h-[54px]' />
        <div className='flex flex-row gap-4 pl-[623px]'>
           <p>Terms of use</p>
           <p>Privacy Policy</p>
           <p>Cookie Policy</p>

        </div>
       
        
      </div>
    

    </div>
   
    
  )
}
