import React from "react";

import HeroSection from "@/sections/HeroSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";

import ProductCardComponent from "@/components/ProductCardComponent";

const page = () => {
  const product = {
    id: 7065603571763,
    title: "Just Whey - GymBeam",
    body_html:
      "<span>Just Whey - це якісний сироватковий багатокомпонентний протеїн з </span><strong>75% -ю часткою першокласного білка з молока корів, що пасуться на зелених луках.</strong><span> Він має </span><strong>чудові смакові якості і підсолоджений стевією</strong><span>. Протеїн збагачений </span><strong>рядом амінокислот</strong><span> з різним ступенем абсорбції, а також </span><strong>вітамінами і мінералами</strong><span>. Крім того, він містить </span><strong>травні ферменти</strong><span> - Бромелайн і DigeZyme®.</span>",
    vendor: "GymBeam",
    product_type: "Protein",
    handle: "just-whey-gymbeam",
    variants: [
      {
        id: 41772335071283,
        product_id: 7065603571763,
        title: "1000 г / білий шоколад - кокос",
        price: "1089.00",
        option1: "1000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557410852915,
      },
      {
        id: 41772335104051,
        product_id: 7065603571763,
        title: "1000 г / шоколадний коктель",
        price: "1090.00",
        option1: "1000 г",
        option2: "шоколадний коктель",
        image_id: 30557410885683,
      },
      {
        id: 41772335136819,
        product_id: 7065603571763,
        title: "1000 г / ванільне морозиво",
        price: "1091.00",
        option1: "1000 г",
        option2: "ванільне морозиво",
        image_id: 30557410918451,
      },
      {
        id: 41772335169587,
        product_id: 7065603571763,
        title: "1000 г / класичне",
        price: "1092.00",
        option1: "1000 г",
        option2: "класичне",
        image_id: 30557410951219,
      },
      {
        id: 41772335202355,
        product_id: 7065603571763,
        title: "1000 г / чорний йогурт",
        price: "1093.00",
        option1: "1000 г",
        option2: "чорний йогурт",
        image_id: 30557410983987,
      },
      {
        id: 41772335235123,
        product_id: 7065603571763,
        title: "1000 г / солона карамель",
        price: "1094.00",
        option1: "1000 г",
        option2: "солона карамель",
        image_id: 30557411016755,
      },
      {
        id: 41772335267891,
        product_id: 7065603571763,
        title: "2000 г / білий шоколад - кокос",
        price: "1859.00",
        option1: "2000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557411049523,
      },
      {
        id: 41772335300659,
        product_id: 7065603571763,
        title: "2000 г / шоколадний коктель",
        price: "1860.00",
        option1: "2000 г",
        option2: "шоколадний коктель",
        image_id: 30557417340979,
      },
      {
        id: 41772335333427,
        product_id: 7065603571763,
        title: "2000 г / ванільне морозиво",
        price: "1861.00",
        option1: "2000 г",
        option2: "ванільне морозиво",
        image_id: 30557417373747,
      },
      {
        id: 41772335366195,
        product_id: 7065603571763,
        title: "2000 г / класичне",
        price: "1862.00",
        option1: "2000 г",
        option2: "класичне",
        image_id: 30557417406515,
      },
      {
        id: 41772335398963,
        product_id: 7065603571763,
        title: "2000 г / чорний йогурт",
        price: "1863.00",
        option1: "2000 г",
        option2: "чорний йогурт",
        image_id: 30557417439283,
      },
      {
        id: 41772335431731,
        product_id: 7065603571763,
        title: "2000 г / солона карамель",
        price: "1864.00",
        option1: "2000 г",
        option2: "солона карамель",
        image_id: 30557417472051,
      },
    ],
    options: [
      {
        id: 9027281748019,
        product_id: 7065603571763,
        name: "Weight",
        position: 1,
        values: ["1000 г", "2000 г"],
      },
      {
        id: 9027281780787,
        product_id: 7065603571763,
        name: "Taste",
        position: 2,
        values: [
          "білий шоколад - кокос",
          "шоколадний коктель",
          "ванільне морозиво",
          "класичне",
          "чорний йогурт",
          "солона карамель",
        ],
      },
    ],
    images: [
      {
        id: 30557411082291,
        alt: null,
        position: 1,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:51:39+02:00",
        updated_at: "2024-03-01T10:51:42+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557411082291",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_103527555.png?v=1709283102",
        variant_ids: [],
      },
      {
        id: 30557410852915,
        alt: null,
        position: 2,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:48:33+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410852915",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_104832638.png?v=1709282914",
        variant_ids: [41772335071283],
      },
    ],
  };

  return (
    <main>
      <HeroSection />
      <div className="w-[400px] mx-auto">
        <ProductCardComponent product={product} discount={20} rating={4} />
      </div>
      <PopularCategoriesSection />
      <ServiceSection />
      <FollowUsSection />
      <SubscribeSection />
    </main>
  );
};

export default page;
