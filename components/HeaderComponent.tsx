"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Menu } from "@mantine/core";

import BurgerMenu from "@/images/navigation/BurgerMenu.svg";
import WishOutline from "@/images/navigation/WishOutline.svg";
import Cart from "@/images/goods/Cart.svg";
import Profile from "@/images/navigation/Profile.svg";
import Search from "@/images/navigation/Search.svg";

// import UA from "@/images/flags/UA.svg";
import UK from "@/images/flags/UK.svg";
import LoginModal from "./LoginModal";
import { type } from "os";
import store from "@/store/store";
import { Context } from "@/store/ContextProvider";

const ImageLanguage = [
  // { country: "UA", icon: UA },
  { country: "UK", icon: UK },
];

const NavigationItem = [
  { text: "Delivery & returns", href: "/" },
  { text: "Track order", href: "/" },
  { text: "Blog", href: "/" },
  { text: "Contacts", href: "/" },
];

const NavigationStaticCategories = [
  { text: "New collection", href: "/" },
  { text: "Best Sellers", href: "/" },
  { text: "Plus Size", href: "/" },
  { text: "Sale up to 70%", href: "/" },
];

const NavigationCategories = [
  {
    text: "Health and Care",
    href: "/",
    title: "Men",
    subOne: [
      { subText: "Мультивітаміни для чоловіків", href: "/" },
      { subText: "Тестостерон", href: "/" },
      { subText: "ДГЕА", href: "/" },
      { subText: "Засоби для чоловіків", href: "/" },
      { subText: "Чоловіча фертильність", href: "/" },
      { subText: "Якірці", href: "/" },
    ],
    subTwo: [
      { subText: "Healthcare", href: "/" },
      { subText: "Personal Care", href: "/" },
    ],
    subThree: [
      { subText: "Healthcare", href: "/" },
      { subText: "Personal Care", href: "/" },
    ],
  },
  // {
  //   text: "Supplements and Tools",
  //   href: "/",
  //   subcategories: [
  //     { subText: "Vitamins", href: "/vitamins" },
  //     { subText: "Tools", href: "/tools" },
  //   ],
  // },
  // {
  //   text: "Sports and Beauty",
  //   href: "/",
  //   subcategories: [
  //     { subText: "Sport Equipment", href: "/" },
  //     { subText: "Beauty Products", href: "/" },
  //   ],
  // },
];

const CartAndWishlist = [
  { image: WishOutline, href: "/" },
  { image: Cart, href: "/" },
];

const HeaderComponent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [type, setType] = useState<"none" | "signup" | "signin">("none");

  return (
    <header className="">
      <div className="bg-[#1E212C] ">
        <div className="container flex justify-between py-[12px] text-white">
          <p>
            Available 24/7 at <Link href="tel:4055550128">(405) 555-0128</Link>
          </p>

          <div className="flex gap-[40px]">
            {NavigationItem.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {ImageLanguage.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.icon}
                  alt={item.country}
                  width={20}
                  height={10}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-[10px]">
            <p
              className="flex cursor-pointer"
              onClick={() => {
                setType("signin");
              }}
            >
              <Image className="text-white" src={Profile} alt="User" /> Log in
            </p>
            <span>/</span>
            <p
              className=" cursor-pointer"
              onClick={() => {
                setType("signup");
              }}
            >
              Register
            </p>
          </div>
          <Link href={"/ua/profile"}>
            <p className="text-white">Profile</p>
          </Link>
        </div>
      </div>

      <div className="container flex justify-between items-center py-[20px]">
        <Link className="font-black" href="">
          iHealth
        </Link>

        <nav className="flex gap-[40px]">
          {NavigationCategories.map((category, index) => (
            <Menu key={index} trigger="hover" openDelay={100} closeDelay={100}>
              <Menu.Target>
                <Link href={category.href}>{category.text}</Link>
              </Menu.Target>

              <Menu.Dropdown className="py-[20px] px-[100px]">
                <div className="flex gap-[40px]">
                  <div className="flex flex-col gap-[8px]">
                    {NavigationStaticCategories.map((categories, index) => (
                      <Link key={index} href={categories.href}>
                        <Link href={categories.href}>{categories.text}</Link>
                      </Link>
                    ))}
                  </div>

                  <div className="flex gap-[20px]">
                    <div className="flex flex-col	">
                      <h2>Чоловіче здоров'я</h2>
                      {category.subOne.map((subcategory, subIndex) => (
                        <Link key={subIndex} href={subcategory.href}>
                          {subcategory.subText}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h2>Жіноче здоров'я</h2>
                      {category.subTwo.map((subcategory, subIndex) => (
                        <Link key={subIndex} href={subcategory.href}>
                          {subcategory.subText}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h2>Дитяче здоров'я</h2>
                      {category.subThree.map((subcategory, subIndex) => (
                        <Link key={subIndex} href={subcategory.href}>
                          {subcategory.subText}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Menu.Dropdown>
            </Menu>
          ))}
        </nav>

        <div className="flex gap-[48px]">
          <input
            className="border-[1px] rounded w-[380px] h-[44px]"
            type="Search for products..."
          />

          <div className="flex items-center gap-[28px]">
            {CartAndWishlist.map((item, index) => (
              <Link key={index} href={item.href}>
                <Image src={item.image} alt="Wish" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <>
        <button onClick={open} type="button">
          <Image src={BurgerMenu} alt="Burger Menu" />
        </button>
        <Modal
          opened={opened}
          onClose={close}
          fullScreen
          radius={0}
          transitionProps={{ transition: "scale-x", duration: 200 }}
        >
          <p>Modal</p>
        </Modal>
      </>
      <LoginModal type={type} setType={setType} />
    </header>
  );
};

export default HeaderComponent;
