"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Menu } from "@mantine/core";
import { useShoppingCart } from "use-shopping-cart";
import HeaderCategoriesObject from "./HeaderCategoriesObject";
import DiscountComponent from "@/components/hero-section/DiscountComponent";
import Profile from "@/images/navigation/Login.svg";
import HeaderPhoto from "@/images/test/test-photo/HeaderPhoto.png";
import BurgerMenu from "@/images/navigation/BurgerMenu.svg";
import WishOutline from "@/images/navigation/WishOutline.svg";
import Cart from "@/images/goods/Cart.svg";
import Search from "@/images/navigation/Search.svg";
import ComeBack from "@/images/vector/ComeBack.svg";
import Cross from "@/images/vector/Cross.svg";

import UA from "@/images/flags/UA.svg";
import UK from "@/images/flags/UK.svg";
import LoginModal from "./LoginModal";


type HeaderProps = {
  className?: string;
};

const ImageLanguage = [
  { text: "Ua / ₴", country: "UA", icon: UA },
  { text: "Eng / $", country: "UK", icon: UK },
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
  { image: WishOutline, quantity: "7", href: "/" },
  { image: Cart, quantity: "15", href: "/" },
];
const DiscountDate = [
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

const HeaderComponent: FC = () => {
  const { handleCartClick, cartCount } = useShoppingCart();
  const [type, setType] = useState<"none" | "signup" | "signin">("none");
  const [openedCategories, setOpenedCategories] = useState(
    new Array(HeaderCategoriesObject.length).fill(false)
  );
  const [selectedLanguage, setSelectedLanguage] = useState(ImageLanguage[1]);
  const [availableLanguages, setAvailableLanguages] = useState(
    ImageLanguage.filter((lang) => lang.country !== selectedLanguage.country)
  );
  const [mobileMenuOpened, { open: openMobileMenu, close: closeMobileMenu }] =
    useDisclosure(false);

  const openCategory = (index: any) => {
    const updatedCategories = [...openedCategories];
    updatedCategories[index] = true;
    setOpenedCategories(updatedCategories);
  };

  const closeCategory = (index: any) => {
    const updatedCategories = [...openedCategories];
    updatedCategories[index] = false;
    setOpenedCategories(updatedCategories);
  };

  const handleLanguageChange = (language: any) => {
    const prevSelectedLanguage = selectedLanguage;
    setSelectedLanguage(language);
    setAvailableLanguages([
      ...availableLanguages.filter((lang) => lang.country !== language.country),
      prevSelectedLanguage,
    ]);
  };

  useEffect(() => {
    setSelectedLanguage(ImageLanguage[1]);
    setAvailableLanguages(
      ImageLanguage.filter((lang) => lang.country !== "UK")
    );
  }, []);

  const ContactInfo: FC<HeaderProps> = ({ className }) => (
    <p className={`${className}`}>
      Available 24/7 at <Link href="tel:4055550128">(405) 555-0128</Link>
    </p>
  );

  const HeaderNavigationItem: FC<HeaderProps> = ({ className }) => (
    <div
      className={`${className} flex flex-col gap-[12px] xl:flex-row xl:gap-[40px]`}
    >
      {NavigationItem.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.text}
        </Link>
      ))}
    </div>
  );

  const HeaderLogo: FC<HeaderProps> = ({ className }) => (
    <Link
      className={`${className} font-black text-[18px] text-[#17696A] xl:text-[22px]`}
      href=""
    >
      Wellness
    </Link>
  );

  const CountrySelector: FC<HeaderProps> = ({ className }) => (
    <div className={`${className} cursor-pointer`}>
      <Menu trigger="hover" openDelay={100} closeDelay={100}>
        <Menu.Target>
          <div className="flex items-center gap-[12px]">
            <Image
              src={selectedLanguage.icon}
              alt={selectedLanguage.country}
              width={24}
              height={12}
            />
            <p>{selectedLanguage.text}</p>
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          {availableLanguages.map((language, index) => (
            <div
              key={index}
              onClick={() => handleLanguageChange(language)}
              className="flex items-center gap-[12px] py-[10px] px-[14px]"
            >
              <Image
                className=""
                src={language.icon}
                alt={language.country}
                width={24}
                height={12}
              />
              <p>{language.text}</p>
            </div>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );

  const AuthenticationLinks: FC<HeaderProps> = ({ className }) => (
    <div className={`${className} flex gap-[10px]`}>
      <Link href={"/ua/profile"}>
        <svg
          className="fill-black xl:fill-[#ababab]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 3.25C10.0671 3.25 8.50009 4.817 8.50009 6.75C8.50009 8.683 10.0671 10.25 12.0001 10.25C13.9331 10.25 15.5001 8.683 15.5001 6.75C15.5001 4.817 13.9331 3.25 12.0001 3.25ZM6.50009 6.75C6.50009 3.71243 8.96252 1.25 12.0001 1.25C15.0377 1.25 17.5001 3.71243 17.5001 6.75C17.5001 9.78757 15.0377 12.25 12.0001 12.25C8.96252 12.25 6.50009 9.78757 6.50009 6.75Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.10415 15.25C5.41083 15.25 4.86892 15.5876 4.64895 16.0726C4.34449 16.7439 4.06879 17.5432 4.00373 18.3012C3.97464 18.64 4.11593 18.8897 4.31061 19.0107C5.33977 19.65 7.72448 20.75 12.0001 20.75C16.2757 20.75 18.6604 19.65 19.6896 19.0107C19.8842 18.8897 20.0255 18.64 19.9964 18.3012C19.9314 17.5432 19.6557 16.7439 19.3512 16.0726C19.1313 15.5876 18.5894 15.25 17.896 15.25H6.10415ZM2.82752 15.2466C3.43546 13.9061 4.793 13.25 6.10415 13.25H17.896C19.2072 13.25 20.5647 13.9061 21.1727 15.2466C21.5218 16.0165 21.8965 17.0515 21.9891 18.1301C22.0734 19.1124 21.6652 20.1379 20.7449 20.7096C19.3914 21.5504 16.6397 22.75 12.0001 22.75C7.36049 22.75 4.60879 21.5504 3.25525 20.7096C2.33499 20.1379 1.92675 19.1124 2.01105 18.1301C2.10363 17.0515 2.47833 16.0165 2.82752 15.2466Z"
          />
        </svg>
      </Link>
      <p
        onClick={() => {
          setType("signin");
        }}
        className="flex gap-[8px] cursor-pointer"
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
  );

  const HeaderNavigationCategories: FC<HeaderProps> = ({ className }) => (
    <nav
      className={`${className} flex flex-col gap-[12px] xl:flex-row xl:gap-[40px]`}
    >
      {HeaderCategoriesObject.map((category, index) => (
        <div key={index}>
          <Link onClick={() => openCategory(index)} href={category.href}>
            {category.text}
          </Link>

          <Modal
            opened={openedCategories[index]}
            onClose={() => closeCategory(index)}
            fullScreen
            classNames={{
              header: "hidden",
              body: "p-0",
              content: "h-[100%] py-[20px] xl:mt-[162px] xl:h-max xl:py-[60px]",
            }}
            transitionProps={{ transition: "scale-x", duration: 200 }}
          >
            <div className="container flex flex-col gap-[40px] xl:flex-row xl:justify-between">
              <div className="flex justify-between xl:hidden">
                <button onClick={() => closeCategory(index)}>
                  <Image src={ComeBack} alt="Close" width={24} height={24} />
                </button>

                <button
                  onClick={() => {
                    closeCategory(index);
                    if (mobileMenuOpened) closeMobileMenu();
                  }}
                >
                  <Image src={Cross} alt="Close" width={24} height={24} />
                </button>
              </div>

              <div className="flex flex-col gap-[8px]">
                {NavigationStaticCategories.map((categories, subIndex) => (
                  <Link
                    key={subIndex}
                    href={categories.href}
                    className={
                      categories.text === "Sale up to 70%" ? "text-red-600" : ""
                    }
                  >
                    {categories.text}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-[20px] xl:flex-row xl:gap-[40px]">
                {category.subcategories
                  ? category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex} className="flex flex-col gap-[8px]">
                        <h2 className="uppercase text-[#1E212C] font-black">
                          {subcategory.title}
                        </h2>
                        {subcategory.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="text-[#424551]"
                          >
                            {item.subText}
                          </Link>
                        ))}
                      </div>
                    ))
                  : null}
              </div>

              <div className="flex flex-col gap-[16px]">
                <Image
                  src={HeaderPhoto}
                  alt="Header Photo"
                  className="rounded"
                  width={260}
                  height={260}
                />

                <Link href="/" className="text-[#424551] font-black">
                  Sale up to 50%
                </Link>
              </div>
            </div>
          </Modal>
        </div>
      ))}
    </nav>
  );

  const SearchAndCart: FC<HeaderProps> = ({ className }) => (
    <div
      className={`${className} flex justify-between gap-[20px] xl:gap-[48px]`}
    >
      <form className="relative flex items-center w-[85%] xl:w-max">
        <input
          id="searchInput"
          className="outline-none w-[100%] border-[1px] border-solid border-gray-300 rounded h-[38px] pl-[10px] xl:w-[380px] xl:h-[42px] placeholder-gray-500"
          type="text"
          placeholder="Search..."
        />

        <button
          type="button"
          className="absolute right-[3%] cursor-pointer xl:right-[5%]"
        >
          <Image className="w-[18px] h-[18px]" src={Search} alt="Search" />
        </button>
      </form>

      <div className="flex items-center gap-[12px] xl:gap-[32px]">
        {CartAndWishlist.map((item, index) =>
          item.image === Cart ? (
            <button
              key={index}
              onClick={() => handleCartClick()}
              className="flex items-center gap-[8px] text-[14px] xl:text-[16px]"
            >
              <Image
                className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px]"
                src={item.image}
                alt="Wish"
              />
              <p className="bg-[#03CEA4] text-white rounded-md px-[4px] py-[1px] xl:px-[8px]">
                {cartCount}
              </p>
            </button>
          ) : (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-[8px] text-[14px] xl:text-[16px]"
            >
              <Image
                className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px]"
                src={item.image}
                alt="Wish"
              />
              <p>{item.quantity}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );

  return (
    <header>
      <div className="xl:bg-gray-900 hidden xl:flex">
        <div className="container flex items-center justify-between py-[12px] xl:text-[#ababab]">
          <ContactInfo />

          <HeaderNavigationItem />

          <CountrySelector />

          <AuthenticationLinks />
        </div>
      </div>

      <div className="container flex justify-between items-center py-[20px]">
        <HeaderLogo />

        <button onClick={openMobileMenu} type="button" className="xl:hidden">
          <Image src={BurgerMenu} alt="Burger Menu" />
        </button>

        <HeaderNavigationCategories className="hidden xl:flex" />

        <SearchAndCart className="hidden xl:flex" />
      </div>

      <DiscountComponent discounts={DiscountDate} />

      <>
        <Modal
          opened={mobileMenuOpened}
          onClose={() => ""}
          fullScreen
          radius={0}
          classNames={{
            header: "hidden",
            overlay: "bg-transparent",
            content: "h-[100%] xl:hidden",
          }}
          transitionProps={{ transition: "scale-x", duration: 200 }}
        >
          <div className="container flex flex-col gap-[40px] py-[20px] xl:justify-between xl:items-center">
            <div className="flex flex-row-reverse">
              <button onClick={closeMobileMenu}>
                <Image src={Cross} alt="Close" width={24} height={24} />
              </button>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center gap-[20px]">
                <CountrySelector />
                <AuthenticationLinks />
              </div>
              <SearchAndCart />
            </div>

            <HeaderNavigationCategories />

            <HeaderNavigationItem />

            <ContactInfo />
          </div>
        </Modal>
      </>
      <LoginModal type={type} setType={setType} />
    </header>
  );
};

export default HeaderComponent;
