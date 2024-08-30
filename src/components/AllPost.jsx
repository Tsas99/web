"use client";
import React, { useState } from "react";
import Link from "next/link";

export const AllPost = ({ posts }) => {
  const [cutCount, setCutCount] = useState(9);

  return (
    <div className="mt-[112px]">
      <div>
        All Blog Post
      </div>
      <div className="flex flex-row justify-between pt-8">
        <div className="flex flex-row gap-5">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <div>View all</div>

      </div>
      
      <div className="flex flex-wrap  w-[1216px] gap-5 pt-8 ">
        {posts
          .slice(0, cutCount)
          .map(({ id, cover_image, title, tags, published_at }, index) => {
            return (
              <Link
                href={`SingleList/${id}`}
                className=" w-[392px] h-[476px] border rounded-xl border-slate-300 gap-4  "
              >
                <div key={index} className="pl-6 pt-5  w-[360px] h-[240px]">
                  <img
                    src={cover_image}
                    alt=""
                    className="w-full h-full object-cover justify-center rounded-md "
                  />
                  <div className="text-[#4B6BFB]  pt-6 ">{tags}</div>
                  <div className="text-2xl font-semibold  pr-6 pt-4">
                    {title}
                  </div>
                  <div className="text-base font-normal text-[#97989F] pt-6">
                    {published_at}{" "}
                  </div>
                </div>
              </Link>
            );
          })}
      </div> 
      <div className="flex justify-center pb-6">
        <button className="w-[123px] h-12 border rounded-md items-center justify-center text-base font-medium  text-[ #696A75]" onClick={() => setCutCount((prev) => prev + 3)}>Load more</button>
    </div>  
  </div>
  );
};
