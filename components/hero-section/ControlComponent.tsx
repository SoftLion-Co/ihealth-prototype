import React from "react";
import Image from "next/image";
import Arrow from "@/images/vector/ChevronArrow.svg";
import NextPrev from "@/images/vector/OrdinaryArrow.svg";

interface ControlProps {
  section: "discount" | "slider";
  position: "prev" | "next";
  alt: string;
  className?: string;
}

const ControlComponent: React.FC<ControlProps> = ({
  section,
  position,
  alt,
  className,
}) => {
  return (
    <Image
      src={section == "discount" ? Arrow : NextPrev}
      alt={alt}
      className={`${
        section == "discount"
          ? position == "prev"
            ? "rotate-[90deg]"
            : "rotate-[270deg]"
          : position == "prev"
          ? "rotate-[180deg]"
          : null
      } ${section == "discount" ? "w-4 h-4" : "h-6 w-6"} ${className}`}
    />
  );
};

export default ControlComponent;
