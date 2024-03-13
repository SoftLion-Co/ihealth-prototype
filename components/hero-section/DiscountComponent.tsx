"use client";
import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import ControlComponent from "./ControlComponent";

interface DiscountProps {
  discounts: { discountTitle: string; title: string; href: string }[];
}

const DiscountComponent: React.FC<DiscountProps> = ({ discounts }) => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <div className="bg-cyan-800 h-8">
      <Carousel
        slideSize={"100%"}
        align="start"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        draggable={false}
        previousControlIcon={
          <ControlComponent section="discount" position="prev" alt="Previous" />
        }
        nextControlIcon={
          <ControlComponent section="discount" position="next" alt="Next" />
        }
        classNames={{
          root: "relative h-full flex flex-row items-center justify-center container w-min w-[350px] sm:w-[380px] lg:w-[500px] xl:w-[50%]",
          control: "border-none text-white lg:px-[180px]",
          slide: "w-full flex justify-center",
        }}
      >
        {discounts.map((discount, index) => (
          <Carousel.Slide key={index}>
            <Link
              href={discount.href}
              className="inline-flex flex-row items-center gap-2 text-[12px] md:text-[14px]"
            >
              <p className="text-white font-black">{discount.discountTitle}</p>
              <p className="text-white underline">{discount.title}</p>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default DiscountComponent;
