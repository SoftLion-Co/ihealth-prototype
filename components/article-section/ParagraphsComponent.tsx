import Image from "next/image";
import React, { FC } from "react";

import Quotes from "@/images/other/Quotes.svg";

interface Paragraph {
  type: string;
  id?: string;
  text?: string;
  subheading?: string;
  image?: {
    id: string;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: never[];
  };
  blog_post_id?: string;
}

interface ParagraphsProps {
  paragraph: Paragraph;
}

const ParagraphsComponent: FC<ParagraphsProps> = ({ paragraph }) => {
  const paragraphContent = () => {
    if (paragraph.type === "text") {
      return <div>{paragraph.text}</div>;
    } else if (paragraph.type === "quote") {
      return (
        <div className="flex py-[12px] items-start gap-[30px] text-[16px] font-bold md:text-[18px] md:py-[24px] lg:text-[20px]">
          <Image src={Quotes} alt="Quotation marks" width={28} height={28} />
          <p>{paragraph.text}</p>
        </div>
      );
    } else if (paragraph.type === "image") {
      return paragraph.image ? (
        <Image
          src={paragraph.image}
          alt="Paragraph Image"
          width={300}
          height={200}
        />
      ) : null;
    } else if (paragraph.type === "list") {
      const listItems = paragraph.text?.split("\\t").map((item, index) => (
        <div className="flex flex-row items-center gap-[12px] md:flex-wrap lg:gap-[16px]">
          <svg
          className="fill-[#17696A]"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 23C18.0651 23 23 18.0655 23 12C23 10.9531 22.8539 9.92139 22.5645 8.93333C22.4219 8.44747 21.9146 8.1684 21.4274 8.31095C20.9411 8.45306 20.6629 8.9622 20.805 9.44806C21.0447 10.2689 21.1667 11.1279 21.1667 12C21.1667 17.0544 17.0544 21.1667 12 21.1667C6.94558 21.1667 2.83333 17.0544 2.83333 12C2.83333 6.94558 6.94558 2.83333 12 2.83333C13.8369 2.83333 15.6042 3.37044 17.1108 4.38625C17.5302 4.66935 18.1004 4.55813 18.3831 4.13873C18.666 3.71889 18.5556 3.14911 18.1358 2.86623C16.3253 1.64543 14.2037 1 12 1C5.93492 1 1 5.93447 1 12C1 18.0655 5.93492 23 12 23Z"
              fill=""
            />
            <path
              d="M22.2928 2.29279L11.9998 12.5853L8.70685 9.29279C8.31622 8.9024 7.68341 8.9024 7.29279 9.29279C6.9024 9.68341 6.9024 10.3162 7.29279 10.7068L11.2928 14.7068C11.4883 14.9024 11.7437 14.9998 11.9998 14.9998C12.2559 14.9998 12.5113 14.9024 12.7068 14.7068L23.7068 3.70685C24.0972 3.31622 24.0972 2.68341 23.7068 2.29279C23.3162 1.9024 22.6834 1.9024 22.2928 2.29279Z"
              fill=""
            />
          </svg>
          <li className="pb-[4px]" key={index}>{item}</li>
        </div>
      ));
      return (
        <div className="flex flex-col gap-[15px] md:gap-[24px]">
          <p>{paragraph.subheading}</p>
          <ul>{listItems}</ul>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div>{paragraphContent()}</div>
    </>
  );
};

export default ParagraphsComponent;
