import React from "react";
import Image from "next/image";
import Arrow from "@/images/vector/ChevronArrow.svg";

interface ControlProps {
  position: "prev" | "next";
  alt: string;
}

const ControlComponent: React.FC<ControlProps> = ({ position, alt }) => {
  return (
    <Image
      src={Arrow}
      alt={alt}
      className={`w-4 h-4 ${
        position == "prev" ? "rotate-[90deg]" : "rotate-[270deg]"
      }`}
    />
  );
};

export default ControlComponent;
