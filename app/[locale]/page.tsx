import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";

import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";
import test from "@/images/test/test.webp";

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
      <div className="px-5 max-w-[1280px] mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-x-[10px] md:gap-x-[30px] gap-y-[60px]">
        <ProductCardComponent
          rating={5}
          discount={50}
          image={image}
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={image}
          slug={slug}
          name={name}
          price={price}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={image}
          slug={slug}
          name={name}
          price={price}
          options={options}
          small
        />
        <ProductCardComponent
          rating={5}
          image={image}
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
          image={image}
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
        <ProductCardComponent
          rating={5}
          discount={50}
          image={image}
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
        <ProductCardComponent
          rating={5}
          discount={50}
          image={image}
          slug={slug}
          name={name}
          price={price}
          oldPrice={oldPrice}
          options={options}
        />
      </div>
      {/* <PopularCategoriesSection />
      <ServiceSection /> */}
    </main>
  );
};

export default page;
