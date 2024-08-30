"use client";
import { useRouter } from "next/navigation";
import React from "react";

const routers = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const { push } = useRouter();

  const handleRouter = (href) => {
    push(href);
  };

  return (
    <div className="flex flex-row   w-[1130px] h-[36px] mt-8 ml-[350px] mr-[440px] ">
      <img className="w-[158px] h-[36px]" src="./Logo.png" alt="" />
      <div className="flex flex-row w-[667px] h-[24px] ml-[118px] mr-[21px] gap-10 items-center justify-center text-normal text-base text-[#3B3C4A] ">
        {routers.map(({ href, title }) => (
          <button key={title} onClick={() => handleRouter(href)}>
            {title}
          </button>
        ))}
      </div>
      <div className="flex relative w-[166px] h-[36px] ml-2">
        <input
          type="text"
          className="flex pl-4 text-sm bg-[ #F4F4F5]"
          placeholder="Search"
        />
        <img
          className="flex absolute w-4 h-4  mb-[10px] mr-2 ml-[142px] mt-2  "
          src="./search-outline.png"
          alt=""
        />
      </div>
    </div>
  );
};
