"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Menu } from "@mantine/core";
import HeaderCategoriesObject from "./HeaderCategoriesObject";

import BurgerMenu from "@/images/navigation/BurgerMenu.svg";
import WishOutline from "@/images/navigation/WishOutline.svg";
import Cart from "@/images/goods/Cart.svg";
import Profile from "@/images/navigation/Profile.svg";
import Search from "@/images/navigation/Search.svg";

import UA from "@/images/flags/UA.svg";
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

const CartAndWishlist = [
  { image: WishOutline, href: "/" },
  { image: Cart, href: "/" },
];

const HeaderComponent = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className="">
      <div className="bg-gray-900">
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
            <Link href={"/"} className="flex gap-[8px]">
              <Image className="text-white" src={Profile} alt="User" /> Log in
            </Link>
            <span>/</span>
            <Link href={"/"}>Register</Link>
          </div>
        </div>
      </div>

      <div className="container flex justify-between items-center py-[20px]">
        <Link className="font-black" href="">
          <span>i</span>
          <span className="text-[#17696A]">Health</span>
        </Link>

        <nav className="flex gap-[40px]">
          {HeaderCategoriesObject.map((category, index) => (
            <Menu key={index} trigger="hover" openDelay={100} closeDelay={100}>
              <Menu.Target>
                <Link href={category.href}>{category.text}</Link>
              </Menu.Target>

              <Menu.Dropdown className="py-[20px] px-[100px]">
                <div className="flex gap-[80px]">
                  <div className="flex flex-col gap-[8px]">
                    {NavigationStaticCategories.map((categories, subIndex) => (
                      <Link key={subIndex} href={categories.href}>
                        {categories.text}
                      </Link>
                    ))}
                  </div>

                  <div className="flex gap-[20px]">
                    {category.subcategories
                      ? category.subcategories.map((subcategory, subIndex) => (
                          <div key={subIndex} className="flex flex-col">
                            <h2>{subcategory.title}</h2>
                            {subcategory.items.map((item, itemIndex) => (
                              <Link key={itemIndex} href={item.href}>
                                {item.subText}
                              </Link>
                            ))}
                          </div>
                        ))
                      : null}
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
        <button onClick={open} type="button" className="hidden">
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
