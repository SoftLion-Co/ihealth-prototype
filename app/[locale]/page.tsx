import React from "react";

import HeroSection from "@/sections/HeroSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";

const page = () => {
  const options = [
    {
      id: 9027281748019,
      product_id: 7065603571763,
      name: "Weight",
      position: 1,
      values: ["1000 г", "2000 г"],
    },
    {
      id: 9027281780787,
      product_id: 7065603571763,
      name: "Taste",
      position: 2,
      values: [
        "білий шоколад - кокос",
        "шоколадний коктель",
        "ванільне морозиво",
        "класичне",
        "чорний йогурт",
        "солона карамель",
      ],
    },
  ];

  return (
    <main>
      <HeroSection />
      <ProductCardComponent
        image={
          "https://content1.rozetka.com.ua/goods/images/preview/370402141.jpg"
        }
        name="Test Product"
        price="40.50"
        oldPrice="70.20"
        slug="test-product"
        rating={5}
        price_id="hello"
        options={options}
      />
      <ProductCardComponent
        image={
          "https://content1.rozetka.com.ua/goods/images/big_tile/383375998.jpg"
        }
        name="Test Product"
        price="40.50"
        slug="test-product"
        rating={5}
        wishlist
        price_id="hello1"
        options={options}
      />
      <PopularCategoriesSection />
      <ServiceSection />
      <FollowUsSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
