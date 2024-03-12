import React from "react";
import { useTranslations } from "next-intl";
import ProductCardComponent from "@/components/ProductCardComponent";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <h1>{t("title")}</h1>
      <ProductCardComponent rating={5} discount={20} />
    </main>
  );
};

export default page;
