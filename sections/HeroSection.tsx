import DiscountComponent from "@/components/hero-section/DiscountComponent";
import React from "react";

const discountDate = [
  {
    discountTitle: "Up to 70% Off.",
    title: "Shop our latest sale styles",
    href: "№",
  },
  {
    discountTitle: "Up to 20% Off.",
    title: "Shop our latest sale styles",
    href: "№",
  },
  {
    discountTitle: "Up to 80% Off.",
    title: "Shop our latest sale styles",
    href: "№",
  },
  {
    discountTitle: "Up to 50% Off.",
    title: "Shop our latest sale styles",
    href: "№",
  },
];

const HeroSection = () => {
  return (
    <section>
      <DiscountComponent discounts={discountDate} />
    </section>
  );
};

export default HeroSection;
