"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BlogCard } from "./BlogCard";

export const AllPost = ({ posts }) => {
  const [cutCount, setCutCount] = useState(9);
  console.log(posts[0].user);

  return (
    <div className="mt-[112px]">
      <div>All Blog Post</div>
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
              <BlogCard
                key={index}
                cover_image={cover_image}
                id={id}
                published_at={published_at}
                tags={tags}
                title={title}
              />
            );
          })}
      </div>
      <div className="flex justify-center pb-6">
        <button
          className="w-[123px] h-12 border rounded-md items-center justify-center text-base font-medium  text-[ #696A75]"
          onClick={() => setCutCount((prev) => prev + 3)}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
