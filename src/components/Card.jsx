"use client";

import { Technology } from "@/components/Technology";

export const Card = ({image,text}) =>{
    const images = [
     {image: "/t1.png"},
     {image: "/t2.png"},
     {image: "/t3.png"},
     {image: "/t4.png"},
    ];
    return (
        <div className="flex flex-row gap-6">
            {images.map(({image}, index)=> (
              <div key={index} className="relative" >
                <img src={image} alt="" className="w-[289px] h-[320px] rounded-xl" /> 
                <div className=" flex flex-col text-white gap-4 absolute bottom-3 left-3">
                    <Technology text="Technology"/>
                    <div className="text-lg font-semibold">
                        The Impact of Technology <br />
                        on the Workplace:how <br />
                        Technology is Changing
                    </div>
                </div>
              </div>  
            ))}
        </div>
    );
};