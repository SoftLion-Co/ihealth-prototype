"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useWindowScroll } from "@mantine/hooks";
import { Button, Text, Group } from "@mantine/core";

import Facebook from "@/images/social-networks/Facebook.svg";
import Instagram from "@/images/social-networks/Instagram.svg";
import Twitter from "@/images/social-networks/Twitter.svg";
import YouTube from "@/images/social-networks/YouTube.svg";
import Pinterest from "@/images/social-networks/Pinterest.svg";

const HelpData = [
  { text: "Delivery & returns", href: "/" },
  { text: "FAQ", href: "/" },
  { text: "Track order", href: "/" },
  { text: "Contacts", href: "/" },
  { text: "Blog", href: "/" },
];

const ShopData = [
  { text: "New arrivals", href: "/" },
  { text: "Trending now", href: "/" },
  { text: "Sales", href: "/" },
  { text: "Brands", href: "/" },
];

const ContactData = [
  { text: "Call", contact: "(405) 555-0128", href: "tel:4055550128" },
  {
    text: "Email",
    contact: "hello@createx.com",
    href: "mailto:hello@createx.com",
  },
];

const SocialData = [
  {
    text: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/",
    target: "_blank",
  },
  {
    text: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    text: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/",
    target: "_blank",
  },
  {
    text: "YouTube",
    icon: YouTube,
    href: "https://www.youtube.com/",
    target: "_blank",
  },
  {
    text: "Pinterest",
    icon: Pinterest,
    href: "https://ru.pinterest.com/",
    target: "_blank",
  },
];

const FooterComponent = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <footer className="bg-gray-900 mt-auto py-[60px]">
      <div className="container flex flex-col gap-[32px] mb-[40px] md:flex-row md:gap-[150px]">
        <div className="text-white flex flex-col items-center gap-[12px] md:items-start">
          <h2 className="text-[16px] uppercase font-bold">HELP</h2>

          <ul className="flex flex-col gap-[4px] text-center md:text-left">
            {HelpData.map((item, index) => (
              <Link className="text-[#ababab]" key={index} href={item.href}>
                {item.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-white flex flex-col items-center gap-[12px] md:items-start">
          <h2 className="text-[16px] uppercase font-bold">Shop</h2>

          <ul className="flex flex-col gap-[4px] text-center md:text-left">
            {ShopData.map((item, index) => (
              <Link className="text-[#ababab]" key={index} href={item.href}>
                {item.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-white flex flex-col items-center gap-[12px] md:items-start">
          <h2 className="text-[16px] uppercase font-bold">Get in touch</h2>

          <div className="flex flex-col gap-[24px]">
            <ul className="flex flex-col gap-[4px] text-center md:text-left">
              {ContactData.map((item, index) => (
                <div key={index}>
                  <span>{item.text}:</span>{" "}
                  <Link className="text-[#ababab]" href={item.href}>
                    {item.contact}
                  </Link>
                </div>
              ))}
            </ul>

            <ul className="flex gap-[12px]">
              {SocialData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.target}
                  className="bg-gray-800 p-[8px] rounded inline-block"
                >
                  <Image
                    className="transition-transform duration-300 ease-in-out transform hover:scale-125"
                    src={item.icon}
                    alt={item.text}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="bg-[#ababab]" />

      <div className="container text-white flex flex-col items-center gap-[12px] mt-[40px] md:justify-between md:flex-row">
        <p className="text-[#ababab]">© All rights reserved. Made with</p>

        <Link
          onClick={() => scrollTo({ y: 0 })}
          className="text-[#ababab]"
          href={"/"}
        >
          Go to top
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
