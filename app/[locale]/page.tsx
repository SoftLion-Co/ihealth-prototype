import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";

import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";
import test from "@/images/test.webp";

const page = () => {
  const t = useTranslations("home_page");
  const images = [test, test, test, test];
  const slug = "product-slug"
  const name = "WHEY Protein 100% Gold Standard"
  const price = 20.40

  return (
    <main>
      <h1>{t("title")}</h1>
      <ProductCardComponent rating={5} discount={50} images={images} slug={slug} name={name} price={price} />
      <PopularCategoriesSection />
      <ServiceSection />
    </main>
  );
};

export default page;
