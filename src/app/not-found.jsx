import { Footer } from "@/components/Footer";
import React from "react";

const NotFound = () => {
  return  (
    <div>
      <div className="flex flex-row  mt-[200px] pl-[639px] gap-[117px]">
          <div className="text-7xl font-normal text-[#000000]">404</div>
           <div className=" flex flex-col gap-5">
             <div className="text-2xl font-semibold text-[#000000] ">Page Not Found</div>
             <div className="text-lg font-normal text-[#696A75]">We're sorry, This page is unknown or does not exist the page you are looking for.</div>
             <button className="w-[130px] h-10 bg-[#4B6BFB] rounded-md text-sm font-medium text-[#FFFFFF]">Back To Home</button>
            </div>
        </div>
       <div>
       <Footer/>
       </div>
     
    </div>
    
  )
   
};

export default NotFound;
