"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import MainTitleComponent from "@/components/MainTitleComponent";

import imageTops from "@/images/test/popular/imageTops.png";
import imageTshirts from "@/images/test/popular/imageTshirts.png";
import imageCaps from "@/images/test/popular/imageCaps.png";
import imageSandals from "@/images/test/popular/imageSandals.png";
import imageJackets from "@/images/test/popular/imageJackets.png";
import imageCoats from "@/images/test/popular/imageCoats.png";

import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mui/material";
import { Carousel } from "@mantine/carousel";
import { useTranslations } from "next-intl";

const PopularCategoriesData = [
  { href: "/", image: imageTops, text: "Tops" },
  { href: "/", image: imageTshirts, text: "T-shirts" },
  { href: "/", image: imageCaps, text: "Caps" },
  { href: "/", image: imageSandals, text: "Sandals" },
  { href: "/", image: imageJackets, text: "Jackets" },
  { href: "/", image: imageCoats, text: "Coats" },
];

const PopularCategoriesSection = () => {
  const t = useTranslations("home_page");
  const isScreenSmall = useMediaQuery("(max-width: 1440px)");
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <div className="container flex flex-col items-center ">
      <MainTitleComponent text="popular categories" />

      {isScreenSmall ? (
        <Carousel
          withIndicators
          loop
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className="flex justify-center w-[100%] xl:"
          classNames={{
            indicator: "bg-[#17696A] before:hidden",
            indicators: "bottom-[-22px]",
          }}
        >
          {PopularCategoriesData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Link
                href={item.href}
                className="flex flex-col items-center gap-[24px] xl:group"
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  className="rounded-[50%] xl:transition-transform xl:duration-300 xl:ease-in-out xl:transform xl:group-hover:scale-110"
                />
                <p className="font-black">{item.text}</p>
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div className="flex justify-between w-[100%]">
          {PopularCategoriesData.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex flex-col items-center gap-[24px] group"
            >
              <Image
                src={item.image}
                alt={item.text}
                className="rounded-[50%] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <p className="font-black">{item.text}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularCategoriesSection;
