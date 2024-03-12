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
      className={`h-full rounded px-10 py-2.5 ${
        type === "toSale"
          ? "bg-transparent border border-cyan-800 text-cyan-800"
          : "bg-cyan-800 text-white"
      }`}
    >
      {/* <p className="px-10 py-2">{title}</p> */}
      {title}
    </Link>
  );
};

export default ButtonComponent;
