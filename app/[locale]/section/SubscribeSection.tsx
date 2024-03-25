"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Checkbox, Input } from "@mantine/core";

import ButtonComponent from "@/components/ButtonComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import {addNewReceiver} from "@/services/SubscribeService"


import Subscribe from "@/images/test/subscribe/imageSubscribe.png";

const CategoryData = [{ text: "Men" }, { text: "Women" }, { text: "Kids" }];

const SubscribeSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  const handleSubmit = () => {
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (email && isChecked && selectedCategory && isValidEmail(email)) {
      addNewReceiver(selectedCategory, email);

      setEmail("");
      setIsChecked(false);
      setSelectedCategory("");
    }
  };

  return (
    <section className="bg-[#F4F5F6] mt-auto py-[60px]">
      <div className="container flex flex-col justify-between items-center gap-[60px] lg:flex-row xl:gap-[250px] ">
        <div className="flex flex-col">
          <MainTitleComponent
            text="Subscribe for updates"
            className="text-[28px] mb-[14px] font-black text-center md:mb-[18px] md:text-[32px] lg:text-start lg:text-[40px] lg:mb-[24px] xl:mb-[24px] xl:text-[46px]"
          />
          <p className="text-[#787A80] text-center lg:text-start text-[14px] mb-[32px] md:text-[18px] lg:text-[20px]">
            Subscribe for exclusive early sale access and new arrivals.
          </p>
          <div className="flex flex-wrap justify-center gap-[12px] lg:justify-start ">
            {CategoryData.map((item, index) => (
              <ButtonComponent
                key={index}
                tag="button"
                type="submit"
                className={`py-[5px] px-[10px] first-line:uppercase md:py-[7px] md:px-[11px] lg:py-[6px] lg:px-[16px] ${
                  selectedCategory === item.text
                    ? "bg-[#17696A] text-[#ffffff]"
                    : ""
                }`}
                text={item.text}
                typeButton="MainBorderButton"
                onClick={() => handleCategorySelect(item.text)}
              />
            ))}
          </div>

          <div className="w-[100%] flex items-end justify-center mt-[32px] lg:justify-start">
            <Input.Wrapper
              label="Email"
              classNames={{ root: "w-[100%] md:w-max" }}
              styles={{
                label: {
                  color: "#424551",
                  marginBottom: "8px",
                },
              }}
            >
              <Input
                placeholder="Your working email"
                className="w-[100%] md:w-[300px] lg:w-[360px]"
                type="email"
                required
                classNames={{
                  input:
                    "h-[36px] rounded-none rounded-l-[4px] focus:border-[#17696A] md:h-[43px] lg:h-[52px]",
                }}
                value={email}
                onChange={handleEmailChange}
              />
            </Input.Wrapper>
            <ButtonComponent
              text="Subcribe"
              typeButton="MainButton"
              type="submit"
              className="rounded-l-[0] disabled:cursor-no-drop"
              tag="button"
              disabled={!isChecked}
              onClick={handleSubmit}
            />
          </div>

          <Checkbox
            onChange={handleCheckboxChange}
            className="mt-[24px] flex justify-center lg:justify-start"
            color="cyan.9"
            label="I agree to receive communications from Createx Store."
            classNames={{
              body: "w-[calc-[100%-2%]] flex justify-center sm:w-full lg:justify-start",
              label: "text-[#787A80]",
            }}
            checked={isChecked}
          />
        </div>
        <Image
          className="min-w-[150px] md:h-[256px] md:w-[256px] lg:w-[356px] lg:h-[356px] xl:w-[450px] xl:h-[415px]"
          src={Subscribe}
          alt="Subscribe"
          width={415}
          height={415}
        />
      </div>
    </section>
  );
};

export default SubscribeSection;
