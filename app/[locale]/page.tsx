import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <PopularCategoriesSection />
      <ServiceSection />
    </main>
  );
};

export default page;
