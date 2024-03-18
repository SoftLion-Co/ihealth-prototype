import React from "react";

import HeroSection from "@/app/[locale]/section/HeroSection";
import TrendingNowSection from "@/app/[locale]/section/TrendingNowSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import SaleUpSection from "@/app/[locale]/section/SaleUpSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <HeroSection />
      <TrendingNowSection />
      <PopularCategoriesSection />
      <SaleUpSection />
      <ServiceSection />
      <FollowUsSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
