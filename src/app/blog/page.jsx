"use client";
import React from 'react'
import {BlogPost} from  '@/components/ BlogPost'
import { Footer } from '@/components/Footer';

export default async function Blog(){
  const result = await fetch("https://dev.to/api/articles");
  const posts = await result.json();
  return (
    <div>
      <div className="mt-[148px] ml-[552px]">
         <div className="text-2xl font-bold">All Blog Post</div>
       <div>
       <BlogPost posts={posts}/>
       </div>
       <button
        className="w-[123px] h-12 border rounded-md items-center justify-center text-base font-medium  mt-8 ml-[552px] text-[ #696A75]"
        onClick={() => setCutCount((prev) => prev + 3)}
        >Load more</button>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
    
  );
};


