import React from "react";

import HeroSection from "@/sections/HeroSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import SubscribeSection from "@/app/[locale]/section/SubscribeSection";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <HeroSection />
      <PopularCategoriesSection />
      <ServiceSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
