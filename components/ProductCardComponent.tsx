"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MantineProvider, Chip, Badge, Rating } from "@mantine/core";
import ButtonComponent from "./ButtonComponent";
import { useShoppingCart } from "use-shopping-cart";

import starFilled from "@/images/navigation/StarFilled.svg";
import starOutline from "@/images/navigation/StarOutline.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";

type Props = {
  product: {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    handle: string;
    variants: Array<{
      id: number;
      product_id: number;
      title: string;
      price: string;
      option1: string;
      option2: string;
      image_id: number;
    }>;
    options: Array<{
      id: number;
      product_id: number;
      name: string;
      position: number;
      values: string[];
    }>;
    images: Array<{
      id: number;
      alt: string | null;
      position: number;
      product_id: number;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      width: number;
      height: number;
      src: string;
      variant_ids: number[];
    }>;
  };
  small?: boolean;
  discount?: number;
  oldPrice?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

const ProductCardComponent = ({
  product,
  small,
  discount,
  oldPrice,
  rating,
}: Props) => {
  const [isWishlistActive, setWishlistActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [price, setPrice] = useState<string>("N/A");
  const locale = useLocale();
  const { handleCartClick } = useShoppingCart();

  const toggleWishlist = () => {
    setWishlistActive(!isWishlistActive);
  };

  useEffect(() => {
    updatePrice();
  }, [selectedOptions]);

  const updatePrice = () => {
    const selectedVariant = findVariantByOptions();
    if (selectedVariant) {
      setPrice(selectedVariant.price);
    } else {
      setPrice("N/A");
    }
  };

  const handleOptionChange = (optionIndex: number, value: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionIndex]: value,
    }));
  };

  useEffect(() => {
    updatePrice();
    const selectedVariant = findVariantByOptions();
    if (selectedVariant) {
      console.log(selectedVariant.id);
    }
  }, [selectedOptions]);

  const findVariantByOptions = () => {
    console.log(selectedOptions);
    return product.variants.find((variant) => {
      return Object.entries(selectedOptions).every(
        ([optionId, selectedValue]) => {
          return (variant as any)[`option${optionId}`] === selectedValue;
        }
      );
    });
  };

  return (
    <div className={`bg-white group rounded w-full`}>
      <div className="relative">
        {/* Card Image */}
        <Link
          href={`/${locale}/${product.handle}`}
          className={`${
            small
              ? "h-[180px] md:h-[220px] lg:h-[260px] xl:h-[280px] 2xl:h-[320px]"
              : "h-[260px] md:h-[300px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px]"
          } relative block`}
        >
          <Image
            src={product.images[0].src}
            width={390}
            height={440}
            alt="Product Image"
            className="rounded object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 w-4/5"
          />
        </Link>

        {/* Discount badge */}
        {discount && (
          <Badge
            radius="sm"
            className="bg-danger px-1 md:px-2 py-0.5 absolute top-0 left-0 flex m-2 md:m-4 text-sm md:text-base md:h-7 font-semibold text-white"
          >
            -{discount}%
          </Badge>
        )}

        {/* Product rating */}
        {rating && (
          <Rating
            className="absolute top-0 right-0 m-2 md:m-4"
            value={rating}
            readOnly
            emptySymbol={
              <Image
                src={starOutline}
                alt="Empty start"
                width={14}
                height={14}
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

        {/* Add to wishlist button */}
        <button
          className="absolute bottom-0 right-0 m-2 md:m-4 bg-white rounded-full size-8"
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

        {/* Product description */}
        <div className="p-2 md:p-4 flex flex-col">
          <h2 className="text-sm md:text-lg text-[#424551] md:mb-2">
            {product.title}
          </h2>
          <div className="flex gap-2 md:gap-3 items-center flex-wrap">
            <span
              className={`${
                small ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              } ${
                oldPrice || discount ? "text-danger" : "text-[#1E212C]"
              } font-bold`}
            >
              $
              {discount
                ? (parseFloat(price) * (1 - discount / 100)).toFixed(2)
                : price}
            </span>
            {discount && (
              <span
                className={`${
                  small ? "text-sm md:text-base" : "text-base md:text-lg"
                } line-through text-[#787A80]`}
              >
                ${price}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Product hover */}
      <div className="relative ">
        <div className="px-4 pb-4 pt-1 w-full hidden lg:group-hover:flex flex-col gap-y-4 absolute top-0 bg-white shadow-card-xl rounded-b z-20">
          {product.options && (
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
              {product.options.map((option: any) => (
                <div key={option.id} className="flex flex-wrap gap-1">
                  <Chip.Group
                    key={option.id}
                    multiple={false}
                    value={selectedOptions[option.position] || option.values[0]}
                    onChange={(value) =>
                      handleOptionChange(option.position, value)
                    }
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
                        checked={val === selectedOptions[option.id]}
                      >
                        {val}
                      </Chip>
                    ))}
                  </Chip.Group>
                </div>
              ))}
            </MantineProvider>
          )}
          <ButtonComponent
            typeButton="MainCartButton"
            text="Add to cart"
            small={small}
            onClick={() => {
              handleCartClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
