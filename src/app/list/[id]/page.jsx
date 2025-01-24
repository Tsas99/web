import { Footer } from "@/components/Footer";

export default async function Page({ params }) {
  const { id } = params;
  const result = await fetch(`https://dev.to/api/articles/${id}`);
  const onePost = await result.json();
  console.log(onePost);

  return (
    <div>
      <div className="flex flex-col mt-[200px] ml-[558px]">
      <div className="text-4xl font-semibold text-[#181A2A]"> {onePost.title} </div>
      <div className="flex mt-5">
        <div className="flex flex-row gap-2">
          <img src={onePost.user.profile_image} alt="" className="w-7 h-7 rounded-full"/>
          <div className="text-sm font-medium text-[#696A75]"> {onePost.user.username} </div>
          <div className="text-sm font-normal ml-4 text-[#696A75]" >{onePost.published_at}</div>
        </div>
        </div>
        <div className="w-[800px] h-[462px] mt-9 rounded-xl"><img src={onePost.cover_image} alt="" /></div>
         <div className=" w-[800px] text-xl font-normal  text-[#3B3C4A]">{onePost.description}</div>
         </div>
      <div>
        <Footer/>
      </div>

    </div>
    
  );
}
