import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

type BlogCardProps = {
  blogId: string;
  title: string;
  image: string;
  text: string;
  date: string;
  category: string;
  comment: string;
  displayName: string;
};

const BlogCardComponent = ({
  blogId,
  title,
  text,
  category,
  date,
  comment,
  image,
  displayName,
}: BlogCardProps) => {
  const locale = useLocale();

  return (
    <Link
      className="w-[100%] lg:w-[49%] flex flex-col border rounded drop-shadow-lg"
      href={`/${locale}/blog/${displayName}`}
    >
      <Image
        src={image}
        alt="blog image"
        width={602}
        height={306}
        className="object-cover w-auto"
      />

      <div className="flex flex-col gap-[12px] px-[24px] pt-[24px] pb-[20px]">
        <h3 className="text-[16px] font-bold hover:text-[#17696A] md:text-[18px] lg:text-[20px]">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-[12px] text-[#787A80] text-[14px] md:text-[16px]">
          <p>{category}</p>
          <span>|</span>
          <p>{date}</p>
          <span>|</span>
          <svg
            className="fill-[#787A80] w-[16px] h-[16px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.75 14.75L20.75 6.25002C20.75 4.59317 19.4069 3.25003 17.75 3.25002L6.25001 3.25C4.59315 3.25 3.25 4.59314 3.25 6.25L3.25 20.5568L7.17953 17.75L17.75 17.75C19.4069 17.75 20.75 16.4068 20.75 14.75ZM22.75 6.25002L22.75 14.75C22.75 17.5114 20.5114 19.75 17.75 19.75L7.82046 19.75L4.41247 22.1843C3.08873 23.1298 1.25 22.1835 1.25 20.5568L1.25 6.25C1.25 3.48857 3.48858 1.24999 6.25001 1.25L17.75 1.25002C20.5114 1.25003 22.75 3.4886 22.75 6.25002Z"
            />
          </svg>
          <p>{comment}</p>
        </div>

        <p className="text-[14px] md:text-[16px] line-clamp-2">{text}</p>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
