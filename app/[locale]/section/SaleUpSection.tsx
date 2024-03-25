"use client";
import React from "react";
import Title from "@/components/MainTitleComponent";
import Button from "@/components/ButtonComponent";
import ProductCardComponent from "@/components/ProductCardComponent";
import ControlComponent from "@/components/hero-section/ControlComponent";

import Image from "@/images/test/test-photo/Complex.png";

import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import testProduct from "@/hooks/testProductData";

const product = testProduct;

const ProductCardData = [
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist />,
  },
];

const SaleUpSection = () => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  return (
    <section>
      <Title className="container" text="Sale up to 70%" />

      <div className="container flex flex-col items-center">
        <Carousel
          slideGap="xl"
          slideSize={isMobile ? "100%" : "33.33%"}
          align={isMobile ? "center" : "start"}
          loop
          previousControlIcon={
            <ControlComponent
              className="group-hover:filter group-hover:invert-[100%] group-hover:sepia-[0] group-hover:saturate-[0] group-hover:hue-rotate-[240deg] group-hover:brightness-[200%] group-hover:contrast-[300%]"
              section="slider"
              position="prev"
              alt="Previous"
            />
          }
          nextControlIcon={
            <ControlComponent
              className="group-hover:filter group-hover:invert-[100%] group-hover:sepia-[0] group-hover:saturate-[0] group-hover:hue-rotate-[240deg] group-hover:brightness-[200%] group-hover:contrast-[300%]"
              section="slider"
              position="next"
              alt="Next"
            />
          }
          className="w-[100%] mb-[80px]"
          classNames={{
            control:
              "bg-[transparent] color-[#fff] w-[48px] h-[48px] border-hidden shadow-none transition duration-300 ease-in-out group hover:bg-[#17696A] hover:bg-[#17696A]",
            controls: "absolute flex justify-end gap-[12px] top-[-80px] p-[0]",
            indicator: "before:hidden",
          }}
        >
          {ProductCardData.map((item, index) => (
            <Carousel.Slide key={index}>
              {isMobile ? <div className="w-full">{item.card}</div> : item.card}
            </Carousel.Slide>
          ))}
        </Carousel>

        <Button text="See all sale products" typeButton="MainBorderButton" />
      </div>
    </section>
  );
};

export default SaleUpSection;
