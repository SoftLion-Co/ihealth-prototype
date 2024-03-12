"use client";
import Image from "next/image";
import React, { useState } from "react";
import test from "@/images/test.webp";
import { Rating } from "@mantine/core";
import { Badge } from "@mantine/core";
import starFilled from "@/images/navigation/StarFilled.svg";
import starOutline from "@/images/navigation/StarOutline.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";
import { Carousel } from "@mantine/carousel";
import arrow from "@/images/vector/ChevronArrow.svg";
type Props = {
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  discount?: number;
  wishlist?: boolean;
};

const ProductCardComponent = ({
  rating,
  discount,
  wishlist = false,
}: Props) => {
  const [isWishlistActive, setWishlistActive] = useState(wishlist);

  const toggleWishlist = () => {
    setWishlistActive(!isWishlistActive);
  };
  return (
    <div className="bg-white w-[390px] group">
      <div className="relative">
        <Carousel
          loop
          classNames={{
            control:
              "border-none shadow-none opacity-0 group-hover:opacity-100 transition",
          }}
          nextControlIcon={
            <Image
              src={arrow}
              alt="Arrow"
              width={24}
              height={24}
              className="-rotate-90"
            />
          }
          previousControlIcon={
            <Image
              src={arrow}
              alt="Arrow"
              width={24}
              height={24}
              className="rotate-90"
            />
          }
        >
          <Carousel.Slide>
            <Image
              src={test}
              width={390}
              height={440}
              alt="Product Image"
              className="h-[440px] object-cover object-center rounded"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={test}
              width={390}
              height={440}
              alt="Product Image"
              className="h-[440px] object-cover object-center rounded"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={test}
              width={390}
              height={440}
              alt="Product Image"
              className="h-[440px] object-cover object-center rounded"
            />
          </Carousel.Slide>
        </Carousel>

        <div className="absolute top-0 flex items-center justify-between w-full p-4">
          {discount && (
            <Badge
              color="red"
              radius="sm"
              size="xl"
              variant="filled"
              className="bg-danger px-2 py-0.5"
            >
              -{discount}%
            </Badge>
          )}
          {rating && (
            <Rating
              value={rating}
              readOnly
              emptySymbol={
                <Image
                  src={starOutline}
                  alt="Empty start"
                  width={14}
                  height={14}
                  sizes="1rem"
                />
              }
              fullSymbol={
                <Image
                  src={starFilled}
                  alt="Filled start"
                  width={14}
                  height={14}
                />
              }
            />
          )}
        </div>
        <button
          className="absolute bottom-0 right-0 m-4 bg-white rounded-full size-8"
          onClick={toggleWishlist}
        >
          <Image
            src={isWishlistActive ? wishFilled : wishOutline}
            alt="Wishlist"
            width={16}
            height={16}
            className="m-2 w-4 h-4"
          />
        </button>
      </div>

      <div className="p-4 flex flex-col">
        <h2 className="text-lg text-[#424551]">
          Shirt with insertion lace trims
        </h2>
        <div className="flex gap-3">
          <span className="text-2xl	text-danger font-bold	">$20.40</span>
          <span className="line-through text-[#787A80] text-lg">$40.80</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
