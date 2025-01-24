"use client";

import React, { useState } from "react";
import { BlogCard } from "./BlogCard";

export const  BlogPost= ({posts}) =>{
  const [cutCount, setCutCount] = useState(12);
  return (
    <div>
      <div className="flex flex-wrap  w-[1216px] gap-5 pt-8 ">
    {posts
      .slice(0, cutCount)
      .map(
        ({ id, cover_image, title, tags, published_at, user }, index) => {
          return (
            <BlogCard
              key={index}
              cover_image={cover_image}
              id={id}
              published_at={published_at}
              tags={tags}
              title={title}
              user={user}
            />
          );
        }
      )}
  </div>
  <div className="flex justify-center pb-6">
   
  </div>

    </div>
    
    
  )
}

