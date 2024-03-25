"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Button } from "@mantine/core";
import { useLocale } from "next-intl";

import MainTitleComponent from "@/components/MainTitleComponent";
import ParagraphsComponent from "@/components/article-section/ParagraphsComponent";

import Twitter from "@/images/social-networks/Twitter.svg";
import Facebook from "@/images/social-networks/Facebook.svg";
import LinkedIn from "@/images/social-networks/LinkedIn.svg";
import Instagram from "@/images/social-networks/Instagram.svg";
import Blog from "@/images/test/article-section/Top 10 of This Season’s Hottest Sneakers.png";

interface ShareSocialLinksProps {
  isFirstCall: boolean;
}

interface BlogData {
  [locale: string]: {
    category: string;
    title: string;
    date: string;
    description: string;
    displayName: string; 
    image: {
      id: number;
      alt: string;
      position: number;
      product_id: number;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      width: number;
      height: number;
      src: string;
      variant_ids: never[];
    };
    paragraphs: Paragraph[];
  };
}

interface Paragraph {
  type: string;
  id?: string;
  text?: string;
  subheading?: string;
  image?: {
    id: string;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: never[];
  };
  blog_post_id?: string;
}


const BlogData = {
  ua: {
    category: "Краса",
    title: "Топ-10 найгарячіших кросівок цього сезону",
    date: "2024-03-07",
    description:
      "Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.",
    dislpay_name: "",
    image: {
      id: 30557411082291,
      alt: "sdfgtyuiop[",
      position: 1,
      product_id: 7065603571763,
      created_at: "2024-03-01T10:51:39+02:00",
      updated_at: "2024-03-01T10:51:42+02:00",
      admin_graphql_api_id: "gid://shopify/ProductImage/30557411082291",
      width: 1000,
      height: 360,
      src: Blog,
      variant_ids: [],
    },
    paragraphs: [
      {
        type: "text",
        text: "Цей препарат є справжнім чудом для спортсменів, які прагнуть виняткових результатів у своїй діяльності. Його унікальна формула призначена максимально підтримувати і покращувати фізичні можливості організму. Інноваційні компоненти препарату прискорюють процеси росту м'язів, забезпечують оптимальний рівень енергії та допомагають підтримувати загальний стан здоров'я. Завдяки цьому препарату ви зможете трансформувати своє тіло та досягти неймовірних висот у своїй спортивній кар'єрі.",
        subheading: "Чому це?",
        blog_post_id: "6347834629"
      },
      {
        type: "text",
        text: "Цей препарат є справжнім чудом для спортсменів, які прагнуть виняткових результатів у своїй діяльності. Його унікальна формула призначена максимально підтримувати і покращувати фізичні можливості організму. Інноваційні компоненти препарату прискорюють процеси росту м'язів, забезпечують оптимальний рівень енергії та допомагають підтримувати загальний стан здоров'я. Завдяки цьому препарату ви зможете трансформувати своє тіло та досягти неймовірних висот у своїй спортивній кар'єрі.",
        subheading: "Чому це?",
        blog_post_id: "6347834629"
      },
      {
        id: "67483689346",
        type: "quote",
      text: "Цей препарат - моя секретна зброя для досягнення неймовірних результатів у світі фітнесу. Він не тільки допомагає мені виглядати сильним і мускулистим, але також дає потужний заряд енергії та мотивації під час кожного тренування. Цей препарат робить мене непереможним на тренувальному полі і готовим перебороти будь-які виклики, що поставлені переді мною!",
        blog_post_id: "6347834629"
      },
      {
        id: "3672648689",
        type: "list",
        text: "Швидке збільшення маси та сили м'язів.\\tПідвищення стійкості та витривалості під час тренувань.\\tПокращення рівня енергії та почуття життєвості.\\tЗбільшення мотивації та уваги під час тренувань.\\tПокращений відновлення після фізичних навантажень.\\tПідтримка здоров'я та оптимізація метаболізму.\\tМаксимальна ефективність у досягненні спортивних цілей.",
        subheading: "Ось деякі переваги цього препарату:",
        blog_post_id: "6347834629"
      }
    ],
  },
  en: {
    category: "Beauty",
    title: "Top 10 of This Season’s Hottest Sneakers",
    date: "2024-03-07",
    description:
      "Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.",
    dislpay_name: "",
    image: {
      id: 30557411082291,
      alt: "sdfgtyuiop[",
      position: 1,
      product_id: 7065603571763,
      created_at: "2024-03-01T10:51:39+02:00",
      updated_at: "2024-03-01T10:51:42+02:00",
      admin_graphql_api_id: "gid://shopify/ProductImage/30557411082291",
      width: 1000,
      height: 360,
      src: Blog,
      variant_ids: [],
    },
    paragraphs: [
      {
        type: "text",
        text: "This drug is a real miracle for athletes who strive for exceptional results in their activities. Its unique formula is designed to maximally support and improve the body's physical capabilities. Innovative components of the drug accelerate the processes of muscle growth, provide optimal energy levels and help maintain overall health. Thanks to this drug, you will be able to transform your body and reach incredible heights in your sports career.",
        subheading: "Why is this?",
        blog_post_id: "6347834629",
      },
      {
        type: "text",
        text: "This drug is a real miracle for athletes who strive for exceptional results in their activities. Its unique formula is designed to maximally support and improve the body's physical capabilities. Innovative components of the drug accelerate the processes of muscle growth, provide optimal energy levels and help maintain overall health. Thanks to this drug, you will be able to transform your body and reach incredible heights in your sports career.",
        subheading: "Why is this?",
        blog_post_id: "6347834629",
      },
      {
        id: "67483689346",
        type: "quote",
        text: "This drug is my secret weapon for achieving incredible results in the world of fitness. It not only helps me look strong and muscular, but also gives me a powerful boost of energy and motivation during every workout. This drug makes me feel invincible on the training ground and ready to overcome any what challenges are set before me!",
        blog_post_id: "6347834629",
      },
      {
        id: "3672648689",
        type: "list",
        text: "Rapid increase in muscle mass and strength.\\tIncreasing resistance and endurance during training.\\tImprovement of energy level and feeling of vitality.\\tIncreasing motivation and focus during training.\\tImproved recovery after exercise.\\tHealth support and optimization of metabolism.\\tMaximum efficiency in achieving sports goals.",
        subheading: "So, here are some of the benefits of this drug:",
        blog_post_id: "6347834629",
      },
    ],
  },
};

const SocialLinks = [
  {
    image: {
      src: Facebook,
      alt: "Facebook",
    },
  },
  {
    image: {
      src: Instagram,
      alt: "Instagram",
    },
  },
  {
    image: {
      src: Twitter,
      alt: "Twitter",
    },
  },
  {
    image: {
      src: LinkedIn,
      alt: "LinkedIn",
    },
  },
];

const ArticleSection: FC = () => {
  const locale = useLocale();
  const blogData = BlogData[locale as keyof typeof BlogData];
  

  const ShareSocialLinks: FC<ShareSocialLinksProps> = ({ isFirstCall }) => {
    return (
      <div
        className={`flex flex-wrap gap-[12px] ${
          isFirstCall ? "justify-end" : ""
        }`}
      >
        {isFirstCall && <span className="text-[16px] font-bold">Share: </span>}
        {SocialLinks.map((item, index) => (
          <div key={index}>
            <Button className="px-[10px] bg-[#787A80] opacity-[12%] hover:bg-[#17696A] hover:opacity-[12%]">
              <Image src={item.image.src} alt={item.image.alt} />
            </Button>
          </div>
        ))}
      </div>
    );
  };

  const ArticleDescription: FC = () => {
    return (
      <div className="pt-[32px] flex flex-col items-center gap-[32px] ">
        <Image
          className="object-cover"
          src={blogData.image.src}
          alt={blogData.image.alt}
          width={blogData.image.width}
          height={blogData.image.height}
        />
        <div className="text-[18px] mb-[24px] font-bold lg:text-[20px]">
          {blogData.description}
        </div>
      </div>
    );
  };

  const ArticleInformation: FC = () => {
    return (
      <div className="flex flex-wrap items-center gap-[5px] md:gap-[10px] text-[#787A80] text-[14px] md:text-[16px]">
        <p>{blogData.category}</p>
        <span>|</span>
        <p>{blogData.date}</p>
        <span>|</span>
        <svg
          className="fill-[#787A80] w-[16px] h-[16px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.75 14.75L20.75 6.25002C20.75 4.59317 19.4069 3.25003 17.75 3.25002L6.25001 3.25C4.59315 3.25 3.25 4.59314 3.25 6.25L3.25 20.5568L7.17953 17.75L17.75 17.75C19.4069 17.75 20.75 16.4068 20.75 14.75ZM22.75 6.25002L22.75 14.75C22.75 17.5114 20.5114 19.75 17.75 19.75L7.82046 19.75L4.41247 22.1843C3.08873 23.1298 1.25 22.1835 1.25 20.5568L1.25 6.25C1.25 3.48857 3.48858 1.24999 6.25001 1.25L17.75 1.25002C20.5114 1.25003 22.75 3.4886 22.75 6.25002Z"
          />
        </svg>
        <p>3 comments</p>
      </div>
    );
  };

  return (
    <section className="container mt-[15px] flex flex-col items-center md:mt-[20px] lg:mt-[32px]">
      <div className=" md:w-[74%]">
        <MainTitleComponent
          className="text-[28px] sm:text-[28px] mb-[18px] sm:mb-[20px] md:text-[38px] md:mb-[24px] lg:text-[46px] lg:mb-[30px] xl:mb-[29px] 2xl:mb-[32px]"
          tag="h1"
          text={blogData.title}
        />
        <div className="pb-[32px] flex flex-col justify-start gap-[20px] lg:flex-row md:justify-between">
          <ArticleInformation />
          <ShareSocialLinks isFirstCall={false} />
        </div>
        <hr className="" />
        <ArticleDescription />
        <div className="flex flex-col gap-[15px] mb-[60px] md:gap-[24px]">
          {blogData.paragraphs.map((paragraph:Paragraph, index:number) => (
            <ParagraphsComponent key={index} paragraph={paragraph} />
          ))}
        </div>
        <ShareSocialLinks isFirstCall={true} />
      </div>
    </section>
  );
};

export default ArticleSection;
