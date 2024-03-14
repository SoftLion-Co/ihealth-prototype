"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { MantineProvider, Rating } from "@mantine/core";
import { Badge } from "@mantine/core";
import starFilled from "@/images/navigation/StarFilled.svg";
import starOutline from "@/images/navigation/StarOutline.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";
import { Carousel } from "@mantine/carousel";
import arrow from "@/images/vector/ChevronArrow.svg";
import Link from "next/link";
import { useLocale } from "next-intl";
import ButtonComponent from "./ButtonComponent";
import { Chip } from "@mantine/core";

type Props = {
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  discount?: number;
  wishlist?: boolean;
  image: StaticImageData;
  slug: string;
  name: string;
  price: string;
  oldPrice?: string;
  options?: any;
  small?: boolean;
};

const ProductCardComponent = ({
  rating,
  discount,
  wishlist = false,
  image,
  slug,
  name,
  price,
  oldPrice,
  options,
  small = false,
}: Props) => {
  const [isWishlistActive, setWishlistActive] = useState(wishlist);
  const locale = useLocale();
  const toggleWishlist = () => {
    setWishlistActive(!isWishlistActive);
  };

  return (
    <div
      className={`bg-white ${
        small ? "md:max-w-[285px]" : "md:max-w-[390px]"
      } group shadow-card-xl lg:shadow-none lg:hover:shadow-card-xl rounded`}
    >
      <div className="relative">
        <Link href={`/${locale}/${slug}`}>
          <Image
            src={image}
            width={390}
            height={440}
            alt="Product Image"
            className={`rounded ${
              small ? "h-[240px] md:h-[320px]" : "h-[320px] md:h-[440px]"
            } object-cover position-center`}
          />
        </Link>

        {discount && (
          <Badge
            color="red"
            radius="sm"
            variant="filled"
            className="bg-danger px-1 md:px-2 py-0.5 absolute top-0 left-0 flex m-2 md:m-4 text-sm md:text-base md:h-7 font-semibold"
          >
            -{discount}%
          </Badge>
        )}
        {rating && (
          <Rating
            className="absolute top-0 flex right-0 m-2 md:m-4"
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

      <div className="p-2 md:p-4 flex flex-col relative z-10">
        <h2 className="text-sm md:text-lg text-[#424551] md:mb-2">{name}</h2>
        <div className="flex gap-2 md:gap-3 items-center flex-wrap">
          <span
            className={`${
              small ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            } ${discount ? "text-danger" : "text-[#1E212C]"} font-bold`}
          >
            ${price}
          </span>
          {discount && oldPrice && (
            <span
              className={`${
                small ? "text-sm md:text-base" : "text-base	 md:text-lg"
              } line-through text-[#787A80]`}
            >
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
      <div className="relative ">
        <div className="px-4 pb-4 pt-1 w-full hidden lg:group-hover:flex flex-col gap-y-4 absolute top-0 bg-white shadow-card-xl rounded-b z-10">
          {options && (
            <MantineProvider
              theme={{
                colors: {
                  primary: [
                    "#17696A",
                    "#17696A",
                    "#17696A",
                    "#17696A",
                    "#17696A",
                    "#17696A",
                    "#17696A",
                  ],
                },
              }}
            >
              {options.map((option: any) => {
                const [value, setValue] = useState(option.values[0]);

                const handleChange = (newValue: string) => {
                  setValue(newValue);
                };

                return (
                  <div className="flex flex-wrap gap-1">
                    <Chip.Group
                      key={option.id}
                      multiple={false}
                      value={value}
                      onChange={handleChange}
                    >
                      {option.values.map((val: string, index: number) => (
                        <Chip
                          key={index}
                          value={val}
                          classNames={{
                            iconWrapper: "hidden",
                            label:
                              "px-[10px] text-gray-700 text-xs tracking-[0.010rem]",
                          }}
                          radius="sm"
                          color="primary"
                          checked={val === value}
                        >
                          {val}
                        </Chip>
                      ))}
                    </Chip.Group>
                  </div>
                );
              })}
            </MantineProvider>
          )}
          <ButtonComponent
            typeButton="MainCartButton"
            text="Add to cart"
            small={small}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
