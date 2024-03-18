import SliderComponent from "@/components/hero-section/SliderComponent";
import React from "react";

const slides = [
  {
    id: 1,
    title: "Menswear 2022",
    subTitle: "new collection",
    img: "",
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
      <SliderComponent slides={slides} />
    </section>
  );
};

export default HeroSection;