"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import ButtonComponent from "@/components/ButtonComponent";
import ControlComponent from "./ControlComponent";

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
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [draggleScreen, setDraggleScreen] = useState(false);
  const matches = useMediaQuery("(max-width: 1440px");
  const carouselRef = useRef(null);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setDraggleScreen(matches);

    if (carouselRef.current) {
      const carouselElement = carouselRef.current as HTMLElement;
      const buttons = carouselElement.querySelectorAll<HTMLButtonElement>(
        "button[aria-hidden=true]"
      );
      buttons.forEach((button, index) => {
        button.setAttribute("data-index", `${index + 1}`);
        button.insertAdjacentHTML(
          "beforeend",
          `<style>
            button[aria-hidden=true][data-index="${index + 1}"]::before {
              content: "0${index + 1}";
            }
          </style>`
        );
      });
    }
  }, [draggleScreen]);

  return (
    <>
      <Carousel
        ref={carouselRef}
        slideSize={"100%"}
        align="start"
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseLeave={autoplay.current.reset}
        onMouseMove={() => {
          autoplay.current.play();
        }}
        onMouseOut={autoplay.current.reset}
        draggable={draggleScreen}
        previousControlIcon={
          <ControlComponent section="slider" position="prev" alt="Previous" />
        }
        nextControlIcon={
          <ControlComponent section="slider" position="next" alt="Next" />
        }
        classNames={{
          root: "relative w-full h-[600px] md:h-[800px] bg-pink-100",
          viewport: "w-full h-full",
          container: "h-full w-full",
          controls: "hidden md:flex",
          control:
            "bg-white h-12 w-12 border-hidden shadow-none opacity-45 transition ease-in-out hover:opacity-100",
          indicators:
            "bottom-[20%] flex flex-row gap-1 md:justify-start container",
          indicator: `${
            slides.length > 4
              ? "w-[calc((100%-(4*15%))/4)] before:w-[calc((100%-(4*15%))/4)]"
              : "w-[calc(90%/4)] sm:w-[17%] lg:w-[20%] before:w-[calc(65%/4)] before:sm-[17%] before:lg:w-[18%]"
          } h-[.210rem] bg-gray-700 opacity-40 before:inline-block before:align-text-top before:h-[45px] before:text-[22px] before:text-[28px] before:font-bold before:text-gray-700 before:opacity-80 before:absolute before:bottom-0`,
          slide: "w-full",
        }}
      >
        {slides.map((slide, index) => (
          <Carousel.Slide
            key={index}
            className="w-full flex flex-start relative"
          >
            <div className="absolute top-[19%] lg:top-[25%] w-full">
              <div className="container w-full flex flex-col gap-9">
                <div className="flex flex-col gap-3 md:items-start text-center">
                  <p className="w-auto uppercase text-base lg:text-lg font-bold text-zinc-800">
                    {slide.subTitle}
                  </p>
                  <h1 className="text-[52px] lg:text-[72px] font-black text-zinc-800">
                    {slide.title}
                  </h1>
                </div>
                <div className="flex gap-6 items-center justify-center md:justify-start">
                  <ButtonComponent
                    text={slide.btnSale.title}
                    typeButton="MainButton"
                    tag="a"
                    href={slide.btnSale.href}
                  />
                  <ButtonComponent
                    text={slide.btnShop.title}
                    typeButton="MainBorderButton"
                    tag="button"
                    onClick={() => handleScrollToSection(slide.btnShop.href)}
                  />
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default SliderComponent;
