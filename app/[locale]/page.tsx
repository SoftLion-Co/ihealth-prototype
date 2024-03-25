import React from "react";

import HeroSection from "@/app/[locale]/section/HeroSection";
import NewArrivalsSection from "@/app/[locale]/section/NewArrivalsSection";
import TrendingNowSection from "@/app/[locale]/section/TrendingNowSection";
import PopularCategoriesSection from "@/app/[locale]/section/PopularCategoriesSection";
import SaleUpSection from "@/app/[locale]/section/SaleUpSection";
import ServiceSection from "@/app/[locale]/section/ServiceSection";
import FollowUsSection from "@/app/[locale]/section/FollowUsSection";
import SubscribeSection from "./section/SubscribeSection";
import HomeBlogSecrtion from "./section/HomeBlogSection";
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
        price: 1089.1,
        option1: "1000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557410852915,
      },
      {
        id: 41772335104051,
        product_id: 7065603571763,
        title: "1000 г / шоколадний коктель",
        price: 1090.2,
        option1: "1000 г",
        option2: "шоколадний коктель",
        image_id: 30557410885683,
      },
      {
        id: 41772335136819,
        product_id: 7065603571763,
        title: "1000 г / ванільне морозиво",
        price: 1091.3,
        option1: "1000 г",
        option2: "ванільне морозиво",
        image_id: 30557410918451,
      },
      {
        id: 41772335169587,
        product_id: 7065603571763,
        title: "1000 г / класичне",
        price: 1092.4,
        option1: "1000 г",
        option2: "класичне",
        image_id: 30557410951219,
      },
      {
        id: 41772335202355,
        product_id: 7065603571763,
        title: "1000 г / чорний йогурт",
        price: 1093.5,
        option1: "1000 г",
        option2: "чорний йогурт",
        image_id: 30557410983987,
      },
      {
        id: 41772335235123,
        product_id: 7065603571763,
        title: "1000 г / солона карамель",
        price: 1094.6,
        option1: "1000 г",
        option2: "солона карамель",
        image_id: 30557411016755,
      },
      {
        id: 41772335267891,
        product_id: 7065603571763,
        title: "2000 г / білий шоколад - кокос",
        price: 1859.1,
        option1: "2000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557411049523,
      },
      {
        id: 41772335300659,
        product_id: 7065603571763,
        title: "2000 г / шоколадний коктель",
        price: 1860.2,
        option1: "2000 г",
        option2: "шоколадний коктель",
        image_id: 30557417340979,
      },
      {
        id: 41772335333427,
        product_id: 7065603571763,
        title: "2000 г / ванільне морозиво",
        price: 1861.3,
        option1: "2000 г",
        option2: "ванільне морозиво",
        image_id: 30557417373747,
      },
      {
        id: 41772335366195,
        product_id: 7065603571763,
        title: "2000 г / класичне",
        price: 1862.4,
        option1: "2000 г",
        option2: "класичне",
        image_id: 30557417406515,
      },
      {
        id: 41772335398963,
        product_id: 7065603571763,
        title: "2000 г / чорний йогурт",
        price: 1863.5,
        option1: "2000 г",
        option2: "чорний йогурт",
        image_id: 30557417439283,
      },
      {
        id: 41772335431731,
        product_id: 7065603571763,
        title: "2000 г / солона карамель",
        price: 1864.6,
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
      {
        id: 30557410885683,
        alt: null,
        position: 3,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:49:39+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410885683",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_104938942.png?v=1709282980",
        variant_ids: [41772335104051],
      },
      {
        id: 30557410918451,
        alt: null,
        position: 4,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:49:57+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410918451",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_104957225.png?v=1709282999",
        variant_ids: [41772335136819],
      },
      {
        id: 30557410951219,
        alt: null,
        position: 5,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:11+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410951219",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105010819.png?v=1709283012",
        variant_ids: [41772335169587],
      },
      {
        id: 30557410983987,
        alt: null,
        position: 6,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:24+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410983987",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105023603.png?v=1709283025",
        variant_ids: [41772335202355],
      },
      {
        id: 30557411016755,
        alt: null,
        position: 7,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:34+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557411016755",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105034257.png?v=1709283036",
        variant_ids: [41772335235123],
      },
      {
        id: 30557411049523,
        alt: null,
        position: 8,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:47+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557411049523",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105047057.png?v=1709283049",
        variant_ids: [41772335267891],
      },
      {
        id: 30557417340979,
        alt: null,
        position: 9,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:32+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417340979",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105232156.png?v=1709283153",
        variant_ids: [41772335300659],
      },
      {
        id: 30557417373747,
        alt: null,
        position: 10,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:22+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417373747",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105222176.png?v=1709283144",
        variant_ids: [41772335333427],
      },
      {
        id: 30557417406515,
        alt: null,
        position: 11,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:47+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417406515",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105247412.png?v=1709283169",
        variant_ids: [41772335366195],
      },
      {
        id: 30557417439283,
        alt: null,
        position: 12,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:53:01+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417439283",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105301186.png?v=1709283182",
        variant_ids: [41772335398963],
      },
      {
        id: 30557417472051,
        alt: null,
        position: 13,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:53:13+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417472051",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105313084.png?v=1709283194",
        variant_ids: [41772335431731],
      },
    ],
  };

  const product2 = {
    id: 7065603571764,
    title:
      "Just Whey - GymBeam це якісний сироватковий багатокомпонентний протеїн з 75%-ю часткою першокласного білка з молока корів",
    body_html:
      "<span>Just Whey - це якісний сироватковий багатокомпонентний протеїн з </span><strong>75% -ю часткою першокласного білка з молока корів, що пасуться на зелених луках.</strong><span> Він має </span><strong>чудові смакові якості і підсолоджений стевією</strong><span>. Протеїн збагачений </span><strong>рядом амінокислот</strong><span> з різним ступенем абсорбції, а також </span><strong>вітамінами і мінералами</strong><span>. Крім того, він містить </span><strong>травні ферменти</strong><span> - Бромелайн і DigeZyme®.</span>",
    vendor: "GymBeam",
    product_type: "Protein",
    handle: "just-whey-gymbeam",
    variants: [
      {
        id: 41772335071284,
        product_id: 7065603571764,
        title: "1000 г / білий шоколад - кокос",
        price: 1089.1,
        option1: "1000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557410852915,
      },
      {
        id: 41772335104052,
        product_id: 7065603571764,
        title: "1000 г / шоколадний коктель",
        price: 1090.2,
        option1: "1000 г",
        option2: "шоколадний коктель",
        image_id: 30557410885683,
      },
      {
        id: 41772335136820,
        product_id: 7065603571764,
        title: "1000 г / ванільне морозиво",
        price: 1091.3,
        option1: "1000 г",
        option2: "ванільне морозиво",
        image_id: 30557410918451,
      },
      {
        id: 41772335169588,
        product_id: 7065603571764,
        title: "1000 г / класичне",
        price: 1092.4,
        option1: "1000 г",
        option2: "класичне",
        image_id: 30557410951219,
      },
      {
        id: 41772335202356,
        product_id: 7065603571764,
        title: "1000 г / чорний йогурт",
        price: 1093.5,
        option1: "1000 г",
        option2: "чорний йогурт",
        image_id: 30557410983987,
      },
      {
        id: 41772335235124,
        product_id: 7065603571764,
        title: "1000 г / солона карамель",
        price: 1094.6,
        option1: "1000 г",
        option2: "солона карамель",
        image_id: 30557411016755,
      },
      {
        id: 41772335267892,
        product_id: 7065603571764,
        title: "2000 г / білий шоколад - кокос",
        price: 1859.1,
        option1: "2000 г",
        option2: "білий шоколад - кокос",
        image_id: 30557411049523,
      },
      {
        id: 41772335300660,
        product_id: 7065603571764,
        title: "2000 г / шоколадний коктель",
        price: 1860.2,
        option1: "2000 г",
        option2: "шоколадний коктель",
        image_id: 30557417340979,
      },
      {
        id: 41772335333428,
        product_id: 7065603571764,
        title: "2000 г / ванільне морозиво",
        price: 1861.3,
        option1: "2000 г",
        option2: "ванільне морозиво",
        image_id: 30557417373747,
      },
      {
        id: 41772335366196,
        product_id: 7065603571764,
        title: "2000 г / класичне",
        price: 1862.4,
        option1: "2000 г",
        option2: "класичне",
        image_id: 30557417406515,
      },
      {
        id: 41772335398964,
        product_id: 7065603571764,
        title: "2000 г / чорний йогурт",
        price: 1863.5,
        option1: "2000 г",
        option2: "чорний йогурт",
        image_id: 30557417439283,
      },
      {
        id: 41772335431732,
        product_id: 7065603571764,
        title: "2000 г / солона карамель",
        price: 1864.6,
        option1: "2000 г",
        option2: "солона карамель",
        image_id: 30557417472051,
      },
    ],
    options: [
      {
        id: 9027281748020,
        product_id: 7065603571764,
        name: "Weight",
        position: 1,
        values: ["1000 г", "2000 г"],
      },
      {
        id: 9027281780788,
        product_id: 7065603571764,
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
        variant_ids: [41772335071284],
      },
      {
        id: 30557410885683,
        alt: null,
        position: 3,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:49:39+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410885683",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_104938942.png?v=1709282980",
        variant_ids: [41772335104052],
      },
      {
        id: 30557410918451,
        alt: null,
        position: 4,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:49:57+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410918451",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_104957225.png?v=1709282999",
        variant_ids: [41772335136820],
      },
      {
        id: 30557410951219,
        alt: null,
        position: 5,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:11+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410951219",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105010819.png?v=1709283012",
        variant_ids: [41772335169588],
      },
      {
        id: 30557410983987,
        alt: null,
        position: 6,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:24+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557410983987",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105023603.png?v=1709283025",
        variant_ids: [41772335202356],
      },
      {
        id: 30557411016755,
        alt: null,
        position: 7,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:34+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557411016755",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105034257.png?v=1709283036",
        variant_ids: [41772335235124],
      },
      {
        id: 30557411049523,
        alt: null,
        position: 8,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:50:47+02:00",
        updated_at: "2024-03-01T10:51:41+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557411049523",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105047057.png?v=1709283049",
        variant_ids: [41772335267892],
      },
      {
        id: 30557417340979,
        alt: null,
        position: 9,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:32+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417340979",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105232156.png?v=1709283153",
        variant_ids: [41772335300660],
      },
      {
        id: 30557417373747,
        alt: null,
        position: 10,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:22+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417373747",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105222176.png?v=1709283144",
        variant_ids: [41772335333428],
      },
      {
        id: 30557417406515,
        alt: null,
        position: 11,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:52:47+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417406515",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105247412.png?v=1709283169",
        variant_ids: [41772335366196],
      },
      {
        id: 30557417439283,
        alt: null,
        position: 12,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:53:01+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417439283",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105301186.png?v=1709283182",
        variant_ids: [41772335398964],
      },
      {
        id: 30557417472051,
        alt: null,
        position: 13,
        product_id: 7065603571763,
        created_at: "2024-03-01T10:53:13+02:00",
        updated_at: "2024-03-01T10:55:36+02:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/30557417472051",
        width: 700,
        height: 700,
        src: "https://cdn.shopify.com/s/files/1/0589/7528/9395/files/2024-03-01_105313084.png?v=1709283194",
        variant_ids: [41772335431732],
      },
    ],
  };

  return (
    <main>
      <HeroSection />
      <div className="flex max-w-[850px] gap-4 mx-auto">
        <ProductCardComponent
          product={product}
          discount={20}
          rating={4}
          wishlist
        />
        <ProductCardComponent product={product2} rating={5} wishlist />
      </div>
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
