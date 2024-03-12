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
      <div className="container h-full w-auto flex justify-center">
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          draggable={false}
          previousControlIcon={
            <ControlComponent
              section="discount"
              position="prev"
              alt="Previous"
            />
          }
          nextControlIcon={
            <ControlComponent section="discount" position="next" alt="Next" />
          }
          classNames={{
            root: "h-full w-[400px] flex justify-center items-center",
            control: "border-none text-white",
            container: "w-auto",
            slide: "w-full flex justify-center items-center",
          }}
        >
          {discounts.map((discount, index) => (
            <Carousel.Slide key={index}>
              <Link
                href={discount.href}
                className="inline-flex items-center gap-2 text-[12px]"
              >
                <p className="text-white font-black">
                  {discount.discountTitle}
                </p>
                <p className="text-white underline">{discount.title}</p>
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DiscountComponent;
