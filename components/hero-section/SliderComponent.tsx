"use client";
import React, { useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import ButtonComponent from "./Slider/ButtonComponent";
import ControlComponent from "./ControlComponent";
import Image from "next/image";

interface SliderProps {
  slides: {
    id: number;
    title: string;
    subTitle: string;
    img: string;
    btnSale: {
      href: string;
      title: string;
    };
    btnShop: {
      href: string;
      title: string;
    };
  }[];
}

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const buttons = document.querySelectorAll<HTMLButtonElement>(
        "button[aria-hidden=true]"
      );
      console.log(buttons);
      buttons.forEach((button, index) => {
        button.setAttribute("data-index", `${index + 1}`);
        const style = document.createElement("style");
        style.textContent = `
          button[aria-hidden=true][data-index="${index + 1}"]::before {
            content: "0${index + 1}";
          }
        `;
        document.head.appendChild(style);
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Carousel
      slideSize={"100%"}
      // slideGap="xl"
      align="start"
      withIndicators
      loop
      previousControlIcon={
        <ControlComponent section="slider" position="prev" alt="Previous" />
      }
      nextControlIcon={
        <ControlComponent section="slider" position="next" alt="Next" />
      }
      classNames={{
        root: "relative w-full h-[800px] bg-pink-100",
        viewport: "w-full h-full",
        container: "h-full w-full",
        control: "bg-white h-12 w-12",
        indicators:
          "bottom-[20%] flex flex-row items-center  gap-1 justify-start container",
        indicator: `${
          slides.length > 4 ? "w-[calc((100%-(4*15%))/4)]" : "w-[20%]"
        } h-[.210rem] bg-gray-700 opacity-80 active:opacity-100 before:text-[28px] before:font-bold before:text-gray-700 before:block before:opacity-80 before:absolute before:bottom-[30px] before:w-12 before:h-12  active:before:opacity-100`,
        slide: "w-full",
      }}
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={index}>
          <div className="w-full h-full flex flex-start relative">
            <Image
              src={slide.img}
              width={100}
              height={800}
              alt="Slide"
              className="w-full h-full object-cover"
            />
            <div className="container h-auto absolute top-[25%] flex flex-col gap-9">
              <div className="flex flex-col gap-3">
                <h2 className="uppercase text-lg font-bold text-zinc-800">
                  {slide.subTitle}
                </h2>
                <h1 className="text-[72px] font-black text-zinc-800">
                  {slide.title}
                </h1>
              </div>
              <div className="flex gap-6">
                <ButtonComponent
                  type="toSale"
                  href={slide.btnSale.href}
                  title={slide.btnSale.title}
                />
                <ButtonComponent
                  type="toCategory"
                  href={slide.btnShop.href}
                  title={slide.btnShop.title}
                />
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
