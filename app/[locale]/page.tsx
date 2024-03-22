import React from "react";

import HeroSection from "@/app/[locale]/section/HeroSection";
import NewArrivalsSection from "@/app/[locale]/section/NewArrivalsSection";
import TrendingNowSection from "@/app/[locale]/section/TrendingNowSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import SaleUpSection from "@/app/[locale]/section/SaleUpSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";

import { useTranslations } from "next-intl";
import HomeBlogSecrtion from "./section/HomeBlogSection";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <HeroSection />
      <NewArrivalsSection />
      <TrendingNowSection />
      <PopularCategoriesSection />
      <SaleUpSection />
      <ServiceSection />
      <FollowUsSection />
      <HomeBlogSecrtion />
      <SubscribeSection />
    </main>
  );
};

export default page;
