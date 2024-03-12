"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "@/images/vector/ChevronGray.svg";
import home from "@/images/navigation/Home.svg";
import cross from "@/images/vector/Cross.svg";
import crossGray from "@/images/vector/CrossGray.svg";
import filter from "@/images/goods/Filter.svg";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Popover } from "@mantine/core";

interface NavigationComponentProps {
  links: { title: string; href: string }[];
  tags?: string[];
  clearTags?: () => void;
  removeTag?: (index: number) => void;
}

const NavigationComponent = ({
  links,
  tags,
  clearTags,
  removeTag,
}: NavigationComponentProps) => {
  const router = useRouter();
  const t = useTranslations("navigation");
  const [showFilters, setShowFilters] = useState(false);

  const handleImageClick = () => {
    router && router.back && router.back();
  };

  const handleClearTags = () => {
    clearTags && clearTags();
  };

  const handleRemoveTag = (index: number) => {
    removeTag && removeTag(index);
  };

  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  const separator = <Image src={vector} alt=">" width={7} height={11} />;

  const allLinks = [
    {
      title: (
        <button onClick={handleImageClick} className="flex items-center">
          <Image src={home} alt="Home" width={16} height={16} />
        </button>
      ),
      href: "//",
    },
    ...links,
  ];

  const items = allLinks.map(({ title, href }, index) =>
    index === allLinks.length - 1 ? (
      <span className="text-zinc-400" key={index}>
        {title}
      </span>
    ) : (
      <Link
        href={href.startsWith("/") ? href.substring(1) : href}
        key={index}
        className="text-gray-700"
      >
        {title}
      </Link>
    )
  );

  const remainingTagsCount = Math.max(tags ? tags.length - 4 : 0, 0);

  const clearAllButton = (
    <span
      className="text-gray-700 flex gap-2 items-center capitalize cursor-pointer"
      onClick={handleClearTags}
    >
      <Image src={cross} width={16} height={16} alt="Remove item" />
      {t("clear_all")}
    </span>
  );

  const TagComponent = (item: any, index: any) => {
    return (
      <span
        key={index}
        className="text-zinc-400 flex gap-2 items-center capitalize"
      >
        <Image
          src={crossGray}
          width={16}
          height={16}
          alt="Remove item"
          onClick={() => handleRemoveTag(index)}
          style={{ cursor: "pointer" }}
        />
        {item}
      </span>
    );
  };

  const gridColumnsClass =
    tags &&
    (remainingTagsCount > 5
      ? "grid-cols-3"
      : remainingTagsCount > 1
      ? "grid-cols-2"
      : "grid-cols-1");

  return (
    <>
      <section className="relative bg-gray-100 py-4 z-10">
        <div className="container flex justify-between text-sm">
          {/* Navigation */}
          <div className="flex items-center gap-3 capitalize">
            {items.map((item, index) => (
              <Fragment key={index}>
                {index > 0 && <span>{separator}</span>}
                {item}
              </Fragment>
            ))}
          </div>

          {/* Desktop filters with popup */}
          <div className="hidden lg:flex items-center gap-5 ">
            {tags &&
              tags.length > 0 &&
              tags
                .slice(-4)
                .reverse()
                .map((item, index) =>
                  TagComponent(item, tags.length - 1 - index)
                )}
            {remainingTagsCount > 0 && (
              <Popover position="bottom" shadow="md">
                <Popover.Target>
                  <div className="flex text-zinc-400 bg-zinc-200 rounded-full h-5 px-2 items-center justify-center text-xs cursor-pointer">
                    +{remainingTagsCount}
                  </div>
                </Popover.Target>
                <Popover.Dropdown>
                  <div className={`grid ${gridColumnsClass} gap-x-4 gap-y-1`}>
                    {tags &&
                      tags
                        .slice(0, tags.length - 4)
                        .map((item, index) => TagComponent(item, index))
                        .reverse()}
                  </div>
                </Popover.Dropdown>
              </Popover>
            )}
            {tags && tags.length > 0 ? clearAllButton : null}
          </div>

          {/* Mobile filters button */}
          <div className="lg:hidden">
            {tags && tags.length > 0 && (
              <button className="flex gap-2" onClick={toggleFilters}>
                <Image src={filter} alt="Filter" width={16} height={16} />
                <span className="text-gray-700">Filters</span>
                <div className="flex text-zinc-400 bg-zinc-200 rounded-full h-5 px-2 items-center justify-center text-xs">
                  {tags.length}
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters section */}
      <AnimatePresence>
        {showFilters && tags && tags.length > 0 && (
          <motion.section
            className="absolute w-full bg-gray-200 lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.075, 0.82, 0.165, 1] }}
          >
            <div className="flex container flex-wrap items-center gap-x-4 gap-y-2 text-sm py-4">
              {clearAllButton}
              {tags &&
                tags.map((item, index) => TagComponent(item, index)).reverse()}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationComponent;
