import React from "react";
import { useTranslations } from "next-intl";
import HeroSection from "@/sections/HeroSection";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <h1>{t("title")}</h1>
      <HeroSection />
    </main>
  );
};

export default page;
