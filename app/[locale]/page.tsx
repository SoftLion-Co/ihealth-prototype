import React from "react";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("home_page");

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
};

export default page;
