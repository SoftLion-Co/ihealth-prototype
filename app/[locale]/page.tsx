import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";

import { useTranslations } from "next-intl";
import HeroSection from "@/sections/HeroSection";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <HeroSection />
      {/* <PopularCategoriesSection />
      <ServiceSection /> */}
    </main>
  );
};

export default page;
