import Link from "next/link";

export const BlogCard = ({
  id,
  cover_image,
  tags,
  title,
  published_at,
  user = "",
}) => {
  const hidden = (user) => {};
  return (
    <Link
      href={`/list/${id}`}
      className=" w-[392px] h-[476px] border rounded-xl border-slate-300 gap-4  "
    >
      <div className="pl-6 pt-5  w-[360px] h-[240px]">
        <img
          src={cover_image}
          alt=""
          className="w-full h-full object-cover justify-center rounded-md "
        />
        <div className="text-[#4B6BFB]  pt-6 ">{tags}</div>
        <div className="text-2xl font-semibold  pr-6 pt-4">{title}</div>
        <div className="text-base font-normal text-[#97989F] pt-6"></div>
        <div className="flex items-center">
          {user && (
            <div className="flex flex-row gap-3 mt-3 ">
              <img
                src={user.profile_image}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="text-base font-medium text-[#97989F]  ">
                {user.username}{" "}
              </div>
            </div>
          )}
          <div className="mt-2 ml-3 text-[#97989F] text-base font-normal">
            {" "}
            {published_at.slice(0, 10)}
          </div>
        </div>
      </div>
    </Link>
  );
};
