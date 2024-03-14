"use client";
import React, { useState } from "react";
import Image from "next/image";

import Cart from "@/images/goods/Cart.svg";
import Filter from "@/images/goods/Filter.svg";

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  tag?: "a" | "button";
  type?: "submit" | "button" | "reset";
  typeButton:
    | "MainButton"
    | "MainArrowButton"
    | "MainCartButton"
    | "MainBorderButton"
    | "FollowButton"
    | "FilterButton"
    | "WishButton";
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  className,
  disabled,
  onClick,
  href,
  target,
  tag = "button",
  type = "submit",
  typeButton,
}) => {
  const [isActive, setIsActive] = useState(false);
  const Tag = tag;

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  const buttonContent = () => {
    if (typeButton === "MainCartButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} flex flex-row items-center justify-center px-[24px] py-[9px] rounded font-bold text-[#ffffff] text-[12px] bg-[#17696A] active:bg-[#145C5D] hover:bg-[#145C5D] disabled:bg-[#17696A] disabled:opacity-50 disabled:text-[#ffffff] md:px-[32px] md:py-[11px] md:text-[14px] lg:px-[40px] lg:py-[14px]  lg:text-[16px]`}
        >
          <Image
            className="filter brightness-0 invert mr-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
            src={Cart}
            alt="Cart"
            width={24}
            height={24}
          />
          {text}
        </Tag>
      );
    } else if (typeButton === "MainArrowButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} group flex flex-row items-center justify-center px-[24px] py-[9px] bg-transparent rounded border solid border-1 border-[#17696A] font-bold text-[12px] text-[#17696A] active:bg-[#17696A] active:text-[#ffffff] hover:text-[#ffffff] hover:bg-[#17696A] hover:fill-[#ffffff] active:fill-[#ffffff] disabled:border-[#17696A] disabled:opacity-50 disabled:text-[#17696A] md:px-[32px] md:py-[11px] md:text-[14px] lg:px-[40px] lg:py-[14px] lg:text-[16px]`}
        >
          {text}
          <svg
            className="fill-[#17696A] ml-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] group-hover:fill-[#ffffff] group-active:fill-[#ffffff]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
            />
          </svg>
        </Tag>
      );
    } else if (typeButton === "FilterButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className}  flex flex-row items-center justify-center rounded font-bold bg-[#17696A] px-[24px] py-[9px] text-[#ffffff] text-[12px] active:bg-[#145C5D] hover:bg-[#145C5D] disabled:bg-[#17696A] disabled:opacity-50 disabled:text-[#ffffff] md:px-[32px] md:py-[11px] md:text-[14px] lg:px-[40px] lg:py-[14px]  lg:text-[16px]`}
        >
          <Image
            className="filter brightness-0 invert mr-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] "
            src={Filter}
            alt="Filter"
            width={24}
            height={24}
          />
          {text}
        </Tag>
      );
    } else if (typeButton === "FollowButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} group  flex flex-row items-center justify-center bg-transparent font-bold text-[12px] rounded border solid border-1 border-[#17696A] text-[#17696A] px-[24px] py-[9px] hover:bg-[#17696A] hover:text-[#ffffff] hover:fill-[#ffffff] active:bg-[#17696A] active:text-[#ffffff] active:fill-[#ffffff] disabled:border-[#17696A] disabled:opacity-50 disabled:text-[#17696A] md:text-[14px]  md:px-[32px] md:py-[11px] lg:px-[40px] lg:py-[14px] lg:text-[16px]`}
        >
          <svg
            className="fill-[#17696A] mr-[8px] w-[16px] h-[16px] text-[#17696A] group-hover:fill-[#ffffff] group-active:fill-[#ffffff] lg:w-[24px] lg:h-[24px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.9804 7.88005C21.9336 6.81738 21.7617 6.0868 21.5156 5.45374C21.2616 4.78176 20.8709 4.18014 20.359 3.68002C19.8589 3.1721 19.2533 2.77743 18.5891 2.52745C17.9524 2.28127 17.2256 2.10943 16.163 2.06257C15.0923 2.01175 14.7525 2 12.0371 2C9.32172 2 8.98185 2.01175 7.9152 2.05861C6.85253 2.10546 6.12195 2.27746 5.48904 2.52348C4.81691 2.77743 4.2153 3.16814 3.71517 3.68002C3.20726 4.18014 2.81274 4.78573 2.5626 5.44992C2.31643 6.0868 2.14458 6.81341 2.09773 7.87609C2.04691 8.9467 2.03516 9.28658 2.03516 12.002C2.03516 14.7173 2.04691 15.0572 2.09376 16.1239C2.14061 17.1865 2.31261 17.9171 2.55879 18.5502C2.81274 19.2221 3.20726 19.8238 3.71517 20.3239C4.2153 20.8318 4.82088 21.2265 5.48507 21.4765C6.12195 21.7226 6.84856 21.8945 7.91139 21.9413C8.97788 21.9883 9.31791 21.9999 12.0333 21.9999C14.7486 21.9999 15.0885 21.9883 16.1552 21.9413C17.2178 21.8945 17.9484 21.7226 18.5813 21.4765C19.9254 20.9568 20.9881 19.8941 21.5078 18.5502C21.7538 17.9133 21.9258 17.1865 21.9726 16.1239C22.0195 15.0572 22.0312 14.7173 22.0312 12.002C22.0312 9.28658 22.0273 8.9467 21.9804 7.88005ZM20.1794 16.0457C20.1364 17.0225 19.9723 17.5499 19.8355 17.9015C19.4995 18.7728 18.808 19.4643 17.9367 19.8004C17.585 19.9372 17.0538 20.1012 16.0808 20.1441C15.026 20.1911 14.7096 20.2027 12.0411 20.2027C9.37255 20.2027 9.0522 20.1911 8.00113 20.1441C7.02437 20.1012 6.49693 19.9372 6.1453 19.8004C5.71171 19.6402 5.31704 19.3862 4.9967 19.0541C4.6646 18.7298 4.41065 18.3391 4.2504 17.9055C4.11365 17.5539 3.94959 17.0225 3.9067 16.0497C3.8597 14.9948 3.8481 14.6783 3.8481 12.0097C3.8481 9.34122 3.8597 9.02087 3.9067 7.96995C3.94959 6.99319 4.11365 6.46575 4.2504 6.11412C4.41065 5.68038 4.6646 5.28586 5.00067 4.96536C5.32483 4.63327 5.71553 4.37931 6.14927 4.21921C6.5009 4.08247 7.03231 3.9184 8.00509 3.87537C9.05999 3.82851 9.37652 3.81676 12.0449 3.81676C14.7174 3.81676 15.0337 3.82851 16.0848 3.87537C17.0616 3.9184 17.589 4.08247 17.9406 4.21921C18.3742 4.37931 18.7689 4.63327 19.0892 4.96536C19.4213 5.28967 19.6753 5.68038 19.8355 6.11412C19.9723 6.46575 20.1364 6.99701 20.1794 7.96995C20.2262 9.02484 20.238 9.34122 20.238 12.0097C20.238 14.6783 20.2262 14.9908 20.1794 16.0457Z" />
            <path d="M12.0371 6.86423C9.20069 6.86423 6.89937 9.1654 6.89937 12.002C6.89937 14.8385 9.20069 17.1397 12.0371 17.1397C14.8736 17.1397 17.1748 14.8385 17.1748 12.002C17.1748 9.1654 14.8736 6.86423 12.0371 6.86423ZM12.0371 15.3347C10.197 15.3347 8.70438 13.8422 8.70438 12.002C8.70438 10.1617 10.197 8.66924 12.0371 8.66924C13.8774 8.66924 15.3698 10.1617 15.3698 12.002C15.3698 13.8422 13.8774 15.3347 12.0371 15.3347Z" />
            <path d="M18.5776 6.6611C18.5776 7.32346 18.0405 7.86053 17.378 7.86053C16.7156 7.86053 16.1785 7.32346 16.1785 6.6611C16.1785 5.99858 16.7156 5.46167 17.378 5.46167C18.0405 5.46167 18.5776 5.99858 18.5776 6.6611Z" />
          </svg>

          {text}
        </Tag>
      );
    } else if (typeButton === "WishButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          href={href}
          onClick={handleButtonClick}
          className={`${className} flex flex-row items-center justify-center bg-transparent rounded border font-bold solid text-[12px]  border-1 border-[#17696A] text-[#17696A] px-[24px] py-[9px] hover:bg-[transparent] active:bg-[transparent] disabled:border-[#17696A] disabled:opacity-50 disabled:text-[#17696A] md:text-[14px]  md:px-[32px] md:py-[11px] lg:text-[16px] lg:px-[40px] lg:py-[14px]`}
        >
          {isActive ? (
            <svg
              className="fill-[#17696A] mr-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9994 4.10638C8.47019 0.752766 3.26381 2.13881 1.35872 5.87633C0.313178 7.92755 0.298896 10.5787 1.84178 13.3885C3.37099 16.1735 6.41989 19.113 11.5156 21.9295L11.9993 22.1969L12.4831 21.9295C17.579 19.113 20.6281 16.1735 22.1574 13.3886C23.7004 10.5787 23.6861 7.92756 22.6406 5.87633C20.7355 2.13874 15.5289 0.752817 11.9994 4.10638Z"
              />
            </svg>
          ) : (
            <svg
              className="fill-[#17696A] mr-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9994 19.9077C7.4003 17.2883 4.83525 14.6848 3.59488 12.4259C2.32537 10.1139 2.43614 8.16664 3.14059 6.78459C4.58857 3.94386 8.70616 3.03548 11.2149 6.20846L11.9993 7.20051L12.7837 6.20851C15.2929 3.0354 19.4108 3.94392 20.8587 6.78459C21.5632 8.16662 21.6739 10.1139 20.4043 12.4259C19.1638 14.6848 16.5986 17.2883 11.9994 19.9077ZM11.9994 4.10638C8.47019 0.752766 3.26381 2.13881 1.35872 5.87633C0.313178 7.92755 0.298896 10.5787 1.84178 13.3885C3.37099 16.1735 6.41989 19.113 11.5156 21.9295L11.9993 22.1969L12.4831 21.9295C17.579 19.113 20.6281 16.1735 22.1574 13.3886C23.7004 10.5787 23.6861 7.92756 22.6406 5.87633C20.7355 2.13874 15.5289 0.752817 11.9994 4.10638Z"
              />
            </svg>
          )}

          {text}
        </Tag>
      );
    } else if (typeButton === "MainButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} flex flex-row items-center justify-center px-[24px] py-[9px] rounded font-bold text-[#ffffff] text-[12px] bg-[#17696A] active:bg-[#145C5D] hover:bg-[#145C5D] disabled:bg-[#17696A] disabled:opacity-50 disabled:text-[#ffffff] md:px-[32px] md:py-[11px] md:text-[14px] lg:px-[40px] lg:py-[14px] lg:text-[16px]`}
        >
          {text}
        </Tag>
      );
    } else if (typeButton === "MainBorderButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} flex flex-row items-center justify-center bg-transparent rounded border solid border-1 border-[#17696A] font-bold text-[#17696A] active:bg-[#17696A] active:text-[#ffffff] focus:bg-[#17696A] focus:text-[#ffffff] hover:text-[#ffffff] hover:bg-[#17696A] disabled:border-[#17696A] disabled:opacity-50 disabled:text-[#17696A] px-[24px] py-[9px] md:px-[32px] md:py-[11px] lg:px-[40px] lg:py-[14px]`}
        >
          {text}
        </Tag>
      );
    } else {
      return null;
    }
  };

  return <>{buttonContent()}</>;
};

export default ButtonComponent;
