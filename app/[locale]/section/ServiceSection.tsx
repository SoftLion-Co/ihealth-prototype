"use client";

import Image from "next/image";

import IcDelivery from "@/images/service/IcDelivery.svg";
import IcCallCenter from "@/images/service/IcCallCenter.svg";
import IcShield from "@/images/service/IcShield.svg";
import IcCreditCard from "@/images/service/IcCreditCard.svg";

import { useMediaQuery } from "@mui/material";
import { Carousel } from "@mantine/carousel";

const ServiceProps = [
  {
    image: IcDelivery,
    title: "Fast Worldwide Shipping",
    text: "Get free shipping over $250",
  },
  {
    image: IcCallCenter,
    title: "24/7 Customer Support",
    text: "Friendly 24/7 customer support",
  },
  {
    image: IcShield,
    title: "Money Back Guarantee",
    text: "We return money within 30 days",
  },
  {
    image: IcCreditCard,
    title: "Secure Online Payment",
    text: "Accept all major credit cards",
  },
];

const ServiceSection = () => {
  const isScreenSmall = useMediaQuery("(max-width: 1440px)");

  return (
    <section className="bg-gray-900 py-[60px] xl:py-[80px]">
      {isScreenSmall ? (
        <Carousel
          loop
          withControls={false}
          slideGap="25"
          withIndicators
          classNames={{
            indicator: "bg-[#17696A]",
            indicators: "bottom-[-22px]",
          }}
          className="container w-[100%] flex justify-center"
        >
          {ServiceProps.map((item, index) => (
            <Carousel.Slide
              key={index}
              className="grid justify-items-center gap-[24px]"
            >
              <Image src={item.image} alt="service icon" />

              <div className="grid justify-items-center gap-[8px]">
                <h3 className="text-white text-[20px] font-bold">
                  {item.title}
                </h3>

                <p className="text-[#ababab] text-[16px]">{item.text}</p>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div className="container flex justify-between">
          {ServiceProps.map((item, index) => (
            <div key={index} className="grid justify-items-center gap-[24px]">
              <Image src={item.image} alt="service icon" />

              <div className="grid justify-items-center gap-[8px]">
                <h3 className="text-white text-[20px] font-bold">
                  {item.title}
                </h3>

                <p className="text-[#ababab] text-[16px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
