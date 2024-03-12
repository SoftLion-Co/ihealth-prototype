import DiscountComponent from "@/components/hero-section/DiscountComponent";
import SliderComponent from "@/components/hero-section/SliderComponent";
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

const slides = [
  {
    id: 1,
    title: "Menswear 2022",
    subTitle: "new collection",
    img: "https://img.freepik.com/premium-photo/lavender-field-at-sunset-valensole_268835-3722.jpg?w=1380",
    btnSale: { href: "#", title: "Shop sale" },
    btnShop: { href: "#", title: "Shop the menswear" },
  },
  {
    id: 2,
    title: "Menswear 2021",
    subTitle: "new collection",
    img: "",
    btnSale: { href: "#", title: "Shop sale" },
    btnShop: { href: "#", title: "Shop the menswear" },
  },
  {
    id: 3,
    title: "Menswear 2020",
    subTitle: "new collection",
    img: "",
    btnSale: { href: "#", title: "Shop sale" },
    btnShop: { href: "#", title: "Shop the menswear" },
  },
  {
    id: 4,
    title: "Menswear 2024",
    subTitle: "new collection",
    img: "",
    btnSale: { href: "#", title: "Shop sale" },
    btnShop: { href: "#", title: "Shop the menswear" },
  },
];

const HeroSection = () => {
  return (
    <section className="h-auto w-auto">
      <DiscountComponent discounts={discountDate} />
      <SliderComponent slides={slides} />
    </section>
  );
};

export default HeroSection;
