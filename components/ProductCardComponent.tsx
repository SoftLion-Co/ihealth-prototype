"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Rating } from "@mantine/core";
import { Badge } from "@mantine/core";
import starFilled from "@/images/navigation/StarFilled.svg";
import starOutline from "@/images/navigation/StarOutline.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";
import { Carousel } from "@mantine/carousel";
import arrow from "@/images/vector/ChevronArrow.svg";
import Link from "next/link";
import { useLocale } from "next-intl";

type Props = {
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  discount?: number;
  wishlist?: boolean;
  images: StaticImageData[];
  slug: string;
  name: string;
  price: number;
};

const ProductCardComponent = ({
  rating,
  discount,
  wishlist = false,
  images,
  slug,
  name,
  price,
}: Props) => {
  const [isWishlistActive, setWishlistActive] = useState(wishlist);
  const locale = useLocale();

  const toggleWishlist = () => {
    setWishlistActive(!isWishlistActive);
  };

  const Control = ({ position }: { position: "next" | "prev" }) => (
    <Image
      src={arrow}
      alt="Arrow"
      width={24}
      height={24}
      className={position === "next" ? "-rotate-90" : "rotate-90"}
    />
  );

  return (
    <div className="bg-white w-[390px] group">
      <div className="relative">
        <Carousel
          loop
          classNames={{
            control:
              "border-none shadow-none opacity-0 group-hover:opacity-100 transition",
          }}
          nextControlIcon={<Control position="next" />}
          previousControlIcon={<Control position="prev" />}
        >
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Link href={`/${locale}/${slug}`}>
                <Image
                  src={image}
                  width={390}
                  height={440}
                  alt="Product Image"
                  className="h-[440px] object-cover object-center rounded"
                />
              </Link>
            </Carousel.Slide>
          ))}
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
      <Link href={`/${locale}/${slug}`}>
        <div className="p-4 flex flex-col">
          <h2 className="text-lg text-[#424551]">{name}</h2>
          <div className="flex gap-3">
            <span className="text-2xl	text-danger font-bold	">${price.toFixed(2)}</span>
            {discount && (
              <span className="line-through text-[#787A80] text-lg">
                ${(price / (1 - discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCardComponent;
