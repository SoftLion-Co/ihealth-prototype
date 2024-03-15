import React from "react";

import HeroSection from "@/sections/HeroSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <HeroSection />
      <ProductCardComponent
        image={"https://content1.rozetka.com.ua/goods/images/preview/370402141.jpg"}
        name="Test Product"
        price="40.50"
        slug="test-product"
        rating={5}
        wishlist
        price_id="hello"
      />
      <PopularCategoriesSection />
      <ServiceSection />
      <FollowUsSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
