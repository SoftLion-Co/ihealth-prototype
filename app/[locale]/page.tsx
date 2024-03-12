import React from "react";
import { useTranslations } from "next-intl";
import ButtonComponent from "@/components/ButtonComponent";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <div className="flex flex-wrap items-center">
        <ButtonComponent text="Save changes" typeButton="MainButton" />
        <ButtonComponent text="Buy now" typeButton="MainCartButton" />
        <ButtonComponent text="See offers" typeButton="MainArrowButton" />
        <ButtonComponent text="See more" typeButton="MainBorderButton" />
        <ButtonComponent text="Follow instagram" typeButton="FollowButton" />
        <ButtonComponent text="Show filter" typeButton="FilterButton" />
        <ButtonComponent text="Favorite" typeButton="WishButton" />

      </div>
    </main>
  );
};

export default page;
