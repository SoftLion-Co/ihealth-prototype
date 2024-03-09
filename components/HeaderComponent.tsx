"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Menu } from "@mantine/core";

import BurgerMenu from "@/images/navigation/BurgerMenu.svg";
import WishOutline from "@/images/navigation/WishOutline.svg";
import Cart from "@/images/goods/Cart.svg";
import Profile from "@/images/navigation/Profile.svg";
import Search from "@/images/navigation/Search.svg";

// import UA from "@/images/flags/UA.svg";
import UK from "@/images/flags/UK.svg";

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
    subcategories: [
      { subText: "Healthcare", href: "/" },
      { subText: "Personal Care", href: "/" },
    ],
  },
  {
    text: "Supplements and Tools",
    href: "/",
    subcategories: [
      { subText: "Vitamins", href: "/vitamins" },
      { subText: "Tools", href: "/tools" },
    ],
  },
  {
    text: "Sports and Beauty",
    href: "/",
    subcategories: [
      { subText: "Sport Equipment", href: "/" },
      { subText: "Beauty Products", href: "/" },
    ],
  },
];

const HeaderComponent = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const mergedCategories = [
    ...NavigationStaticCategories,
    ...NavigationCategories,
  ];

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
            <Link href={"/"} className="flex">
              <Image className="text-white" src={Profile} alt="User" /> Log in
            </Link>
            <span>/</span>
            <Link href={"/"}>Register</Link>
          </div>
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

              <Menu.Dropdown>
                <div className="flex gap-[40px]">
                  <div>
                    {NavigationStaticCategories.map((categories, index) => (
                      <Menu.Item key={index}>
                        <Link href={categories.href}>{categories.text}</Link>
                      </Menu.Item>
                    ))}
                  </div>

                  <div>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <Menu.Item key={subIndex}>
                        <Link href={subcategory.href}>
                          {subcategory.subText}
                        </Link>
                      </Menu.Item>
                    ))}
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

          <div className="flex gap-[28px]">
            <Image src={WishOutline} alt="Wish" />

            <Image src={Cart} alt="Cart" />
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
    </header>
  );
};

export default HeaderComponent;
