import React, { FC } from "react";

type MainTitleProps = {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const MainTitleComponent: FC<MainTitleProps> = ({
  text,
  tag = "h2",
  className,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={`${className} text-[32px] font-black first-letter:capitalize mb-[40px] xl:mb-[60px] xl:text-[46px]`}
    >
      {text}
    </Tag>
  );
};

export default MainTitleComponent;
