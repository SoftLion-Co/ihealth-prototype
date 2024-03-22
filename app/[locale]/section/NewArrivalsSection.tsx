"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Title from "@/components/MainTitleComponent";
import ProductCardComponent from "@/components/ProductCardComponent";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

import Image from "@/images/test/test-photo/Complex.png";

const ProductCardData = [
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="1.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="2.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="3.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="4.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="5.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="6.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="7.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="8.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="9.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="10.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="11.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="12.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="13.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="14.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="15.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="16.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="17.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
  {
    card: (
      <ProductCardComponent
        image={Image}
        name="Test photo"
        price="18.50"
        slug="#17696A"
        rating={5}
      />
    ),
  },
];

const NewArrivalsSection = () => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  return (
    <section className="pb-[80px]">
      <div className="flex flex-col items-center mb-[60px]">
        <Title text="New arrivals" className="mb-5 xl:mb-6" />

        <p className="text-[18px] text-center">
          Check out our latest arrivals for the upcoming season <br />
          <Link
            href=""
            className="text-[#17696A] border-b-[1px] border-[#17696A]"
          >
            See the collection here
          </Link>
        </p>
      </div>

      <Carousel
        loop
        dragFree
        withIndicators
        withControls={false}
        slidesToScroll={6}
        slideSize="16.55%"
        align="start"
        slideGap="lg"
        className="max-w-[1900px] px-[40px] mx-0"
        classNames={{
          indicator: "bg-[#17696A] before:hidden",
          indicators: "bottom-[-80px]",
        }}
      >
        {ProductCardData.map((item, index) => (
          <Carousel.Slide key={index} className="flex">
            {isMobile ? <div className="w-full">{item.card}</div> : item.card}
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default NewArrivalsSection;
