"use client";
import Image from "next/image";
import React from "react";
import test from "@/images/test.webp";
import { Rating } from "@mantine/core";
import { Badge } from "@mantine/core";
import starFilled from "@/images/navigation/StarFilled.svg";
import starOutline from "@/images/navigation/StarOutline.svg";

type Props = {
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  discount?: number;
};

const ProductCardComponent = ({ rating, discount }: Props) => {
  return (
    <div>
      <Image src={test} width={390} height={440} alt="Product Image" />
      <Badge color="red" radius="sm" variant="filled" className="bg-danger">
        -{discount}%
      </Badge>
      <Rating
        value={rating}
        readOnly
        emptySymbol={
          <Image
            src={starOutline}
            alt="Empty start"
            width={13}
            height={13}
            sizes="1rem"
          />
        }
        fullSymbol={
          <Image src={starFilled} alt="Filled start" width={13} height={13} />
        }
      />
      <span>Shirt with insertion lace trims</span>
      <span>$20.40</span>
      <span className="">$40.80</span>
    </div>
  );
};

export default ProductCardComponent;
