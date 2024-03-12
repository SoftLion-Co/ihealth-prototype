import Link from "next/link";
import React from "react";

interface ButtonProps {
  type: "toSale" | "toCategory";
  href: string;
  title: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ type, href, title }) => {
  return (
    <Link
      href={href}
      className={`h-full rounded px-5 py-2 lg:px-10 lg:py-2.5 font-bold text-[12px] sm:text-[14px] lg:text-[16px]]  ${
        type === "toSale"
          ? "bg-transparent border border-cyan-800 text-cyan-800"
          : "bg-cyan-800 text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default ButtonComponent;
