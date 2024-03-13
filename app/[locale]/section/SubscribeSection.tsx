"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Checkbox, Input } from "@mantine/core";

import ButtonComponent from "@/components/ButtonComponent";

import Subscribe from "@/images/test/subscribe/imageSubscribe.png";
import MainTitleComponent from "@/components/MainTitleComponent";

const CategoryData = [{ text: "Men" }, { text: "Women" }, { text: "Kids" }];

const EmailInput = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className="flex flex-row items-end justify-center mt-[32px] lg:justify-start">
        <Input.Wrapper
          label="Email"
          styles={{
            label: {
              color: "#424551",
              marginBottom: "8px",
            },
          }}
        >
          <Input
            placeholder="Your working email"
            className="w-[260px] md:w-[300px] lg:w-[360px]"
            styles={{
              input: {
                height: "36px",
                borderRadius: "0px",
                borderTopLeftRadius: "0.5rem",
                borderBottomLeftRadius: "0.5rem",
                "&:focus": {
                  border: "#17696A",
                },
                "@media (min-width: 768px)": {
                  height: "43px",
                },
                "@media (min-width: 1024px)": {
                  height: "52px",
                },
              },
            }}
          />
        </Input.Wrapper>
        <ButtonComponent
          text="Subcribe"
          typeButton="MainButton"
          href="https://tailwindcss.com/docs/border-radius"
          target="_blank"
          className="rounded-l-[0] disabled:cursor-no-drop "
          tag="button"
          disabled={!isChecked}
        />
      </div>

      <Checkbox
        onChange={handleCheckboxChange}
        className="mt-[24px] flex justify-center lg:justify-start"
        color="cyan.9"
        label="I agree to receive communications from Createx Store."
        styles={{
          label: {
            color: "#787A80",
          },
        }}
      />
    </>
  );
};

const CheckboxCategory = () => {
  return (
    <div className="flex flex-row justify-center gap-[12px] lg:justify-start ">
      {CategoryData.map((item, index) => (
        <ButtonComponent
          tag="button"
          className="py-[5px] px-[10px] md:py-[7px] md:px-[11px] lg:py-[6px] lg:px-[16px]"
          key={index}
          text={item.text}
          typeButton="MainBorderButton"
        />
      ))}
    </div>
  );
};

const SubscribeSection = () => {
  return (
    <section className="bg-[#F4F5F6]">
      <div className="container pt-[64px] pb-[65px] flex flex-col justify-between items-center gap-[60px] lg:flex-row xl:gap-[250px] ">
        <div className="flex flex-col">
          <MainTitleComponent
            text="Subscribe for updates"
            className="text-[28px] mb-[14px] font-black text-center md:mb-[18px] md:text-[32px] lg:text-start lg:text-[40px] lg:mb-[24px] xl:mb-[24px] xl:text-[46px]"
          />
          <p className="text-[#787A80] text-center lg:text-start text-[14px] mb-[32px] md:text-[18px] lg:text-[20px]">
            Subscribe for exclusive early sale access and new arrivals.
          </p>
          <CheckboxCategory />
          <EmailInput />
        </div>
        <Image
          className="w-[224px] h-[224px] md:h-[256px] md:w-[256px] lg:w-[356px] lg:h-[356px] xl:w-[450px] xl:h-[415px]"
          src={Subscribe}
          alt="Subscribe"
          width={450}
          height={415}
        />
      </div>
    </section>
  );
};

export default SubscribeSection;
