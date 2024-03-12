import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <PopularCategoriesSection />
    </main>
  );
};

export default page;
