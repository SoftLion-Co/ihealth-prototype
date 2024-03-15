"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

import image1 from "@/images/test/follow-us/image1.png";
import image2 from "@/images/test/follow-us/image2.png";
import image3 from "@/images/test/follow-us/image3.png";

import Title from "@/components/MainTitleComponent";
import Button from "@/components/ButtonComponent";

import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mui/material";
import { Carousel } from "@mantine/carousel";

const FollowUsData = [
  {
    text: "Follow us on Instagram",
    href: "https://www.instagram.com/vit_wellness_/",
    hrefText: "@vit_wellness_",
    images: [
      {
        image: image1,
        link: "https://www.instagram.com/p/C0JUeAMImxH/",
      },
      {
        image: image2,
        link: "https://www.instagram.com/p/Cv8LYYqI94V/",
      },
      {
        image: image3,
        link: "https://www.instagram.com/p/CuoXKgMI2to/",
      },
    ],
  },
];

const FollowUsSection = () => {
  const isScreenSmall = useMediaQuery("(max-width: 1440px)");
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <section className="container">
      {FollowUsData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[40px] xl:flex-row xl:justify-between xl:items-start"
        >
          <div className="flex flex-col items-center xl:items-start">
            <p className="text-[16px] mb-[8px] uppercase">{item.text}</p>

            <Link href={item.href} target="_blank">
              <Title text={item.hrefText} />
            </Link>

            <Button
              className="w-max"
              text="Follow instagram"
              href={item.href}
              target="_blank"
              typeButton="FollowButton"
              tag="a"
            />
          </div>

          {isScreenSmall ? (
            <Carousel
              withControls={false}
              withIndicators
              loop
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              className="flex gap-[14px]"
              classNames={{
                indicator: "bg-[#17696A] before:hidden",
                indicators: "bottom-[-22px]",
              }}
            >
              {item.images.map((imageObj, imgIndex) => (
                <Carousel.Slide key={imgIndex} className="flex justify-center">
                  <Link href={imageObj.link} target="_blank">
                    <Image src={imageObj.image} alt={`Image ${imgIndex}`} />
                  </Link>
                </Carousel.Slide>
              ))}
            </Carousel>
          ) : (
            <div className="flex gap-[15px]">
              {item.images.map((imageObj, imgIndex) => (
                <Link
                  href={imageObj.link}
                  target="_blank"
                  key={imgIndex}
                  className="flex justify-center"
                >
                  <Image
                    src={imageObj.image}
                    alt={`Image ${imgIndex}`}
                    width={260}
                    height={260}
                    className="w-[260px] h-[260] object-cover"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FollowUsSection;
