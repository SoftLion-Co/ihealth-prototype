import React from "react";

import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <PopularCategoriesSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
