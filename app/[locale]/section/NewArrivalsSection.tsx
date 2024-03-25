"use client";
import Link from "next/link";
import Title from "@/components/MainTitleComponent";
import ProductCardComponent from "@/components/ProductCardComponent";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

import testProduct from "@/hooks/testProductData";

const product = testProduct;

const ProductCardData = [
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
  {
    card: <ProductCardComponent product={product} rating={5} wishlist small />,
  },
];

const NewArrivalsSection = () => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279.98px)"
  );
  const isLaptop = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1439.98px)"
  );
  const isXlLaptop = useMediaQuery(
    "(min-width: 1440px) and (max-width: 1919.98px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1920px)");

  let slidesToShow = 1;

  switch (true) {
    case isTablet:
      slidesToShow = 3;
      break;
    case isLaptop:
      slidesToShow = 4;
      break;
    case isXlLaptop:
      slidesToShow = 5;
      break;
    case isDesktop:
      slidesToShow = 6;
      break;
    default:
      slidesToShow = 1;
  }

  return (
    <section className="pb-[80px] flex flex-col items-center">
      <div className="container flex flex-col items-center mb-[60px]">
        <Title text="New arrivals" className="!mb-5 xl:!mb-6" />

        <p className="text-[18px] text-center">
          Check out our latest arrivals for the upcoming season <br />
          <Link
            href=""
            className="text-[#17696A] border-b-[1px] border-[#17696A]"
          >
            See the collection here
          </Link>
        </p>
      </div>

      <>
        <Carousel
          loop
          withIndicators={!isMobile}
          withControls={false}
          slideSize={`${100 / slidesToShow}%`}
          slidesToScroll={slidesToShow}
          align="start"
          slideGap="lg"
          className="px-[20px] xs:max-w-[375px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1420px] 2xl:max-w-[1900px] xl:px-[40px] mx-0"
          classNames={{
            indicator: "bg-[#17696A] before:hidden",
            indicators: "bottom-[-80px]",
          }}
        >
          {ProductCardData.map((item, index) => (
            <Carousel.Slide key={index} className="flex">
              {isMobile ? <div className="w-full">{item.card}</div> : item.card}
            </Carousel.Slide>
          ))}
        </Carousel>
      </>
    </section>
  );
};

export default NewArrivalsSection;
