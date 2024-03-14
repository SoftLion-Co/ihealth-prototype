import React from "react";

import HeroSection from "@/sections/HeroSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";
import test from "@/images/test/test.webp";
import test2 from "@/images/test/test2.webp";
import test3 from "@/images/test/test3.webp";

const page = () => {
  const t = useTranslations("home_page");
  const image = test;
  const slug = "product-slug";
  const name = "Shirt with insertion lace trims";
  const price = "20.40";
  const oldPrice = "40.80";
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
      <h1>{t("title")}</h1>
      <HeroSection />
      <div className="px-5 max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-[30px] gap-y-[60px]">
        <ProductCardComponent
          rating={5}
          discount={50}
          image={
            "https://content.rozetka.com.ua/goods/images/preview/292674687.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={
            "https://content2.rozetka.com.ua/goods/images/preview/204574706.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={
            "https://content1.rozetka.com.ua/goods/images/preview/283394630.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={
            "https://content2.rozetka.com.ua/goods/images/preview/417115072.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          options={options}
          small
        />
      </div>

      <div className="px-5 max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-[30px] gap-y-[60px]">
        <ProductCardComponent
          rating={5}
          discount={50}
          image={
            "https://content1.rozetka.com.ua/goods/images/preview/307006788.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
        <ProductCardComponent
          rating={5}
          discount={50}
          image={
            "https://content2.rozetka.com.ua/goods/images/preview/374945696.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
        <ProductCardComponent
          rating={5}
          discount={50}
          image={
            "https://content2.rozetka.com.ua/goods/images/preview/351227894.jpg"
          }
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
      </div>

      <PopularCategoriesSection />
      <ServiceSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
