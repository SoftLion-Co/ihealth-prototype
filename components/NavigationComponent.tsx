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

  const separator = <Image src={vector} alt=">" width={7} height={11} />;

  const items = allLinks.map(({ title, href }, index) => {
    const cleanHref = href.startsWith("/") ? href.substring(1) : href;

    return index === allLinks.length - 1 ? (
      <span className="text-zinc-400" key={index}>
        {title}
      </span>
    ) : (
      <Link href={cleanHref} key={index} className="text-gray-700">
        {title}
      </Link>
    );
  });

  const remainingTagsCount = Math.max(tags ? tags.length - 4 : 0, 0);

  return (
    <>
      <div className="bg-gray-100 py-4">
        <div className="container flex justify-between text-sm">
          <div className="flex items-center gap-3 capitalize">
            {items.map((item, index) => (
              <Fragment key={index}>
                {index > 0 && <span>{separator}</span>}
                {item}
              </Fragment>
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-5">
              {tags &&
                tags.length > 0 &&
                tags
                  .slice(-4)
                  .reverse()
                  .map((item, index) => (
                    <span
                      key={index}
                      className="text-zinc-400 flex gap-2 items-center capitalize"
                    >
                      <Image
                        src={crossGray}
                        width={16}
                        height={16}
                        alt="Remove item"
                        onClick={() => handleRemoveTag(tags.length - 1 - index)}
                        style={{ cursor: "pointer" }}
                      />
                      {item}
                    </span>
                  ))}
              {remainingTagsCount > 0 && (
                <div className="flex text-zinc-400 bg-zinc-200 rounded-full h-5 px-2 items-center justify-center text-xs">
                  +{remainingTagsCount}
                </div>
              )}

              {tags && tags.length > 0 && (
                <span
                  className="text-gray-700 flex gap-2 items-center capitalize cursor-pointer"
                  onClick={handleClearTags}
                >
                  <Image src={cross} width={16} height={16} alt="Remove item" />
                  {t("clear_all")}
                </span>
              )}
            </div>
          </div>

          <div className="md:hidden">
            {tags &&
              tags.length > 0 && ( // Перевірка наявності елементів у `tags`
                <span
                  className="text-gray-700 cursor-pointer flex gap-2"
                  onClick={toggleFilters}
                >
                  <Image src={filter} alt="Filter" width={16} height={16} />
                  Filters
                  <div className="flex text-zinc-400 bg-zinc-200 rounded-full h-5 px-2 items-center justify-center text-xs">
                    {tags.length}
                  </div>
                </span>
              )}
          </div>
        </div>
      </div>
      {showFilters && tags && tags.length > 0 && (
        <div className="bg-gray-200 md:hidden">
          <div className="flex container flex-wrap items-center gap-x-4 gap-y-2 text-sm py-4">
            <span
              className="text-gray-700 flex gap-2 items-center capitalize cursor-pointer"
              onClick={handleClearTags}
            >
              <Image src={cross} width={16} height={16} alt="Remove item" />
              {t("clear_all")}
            </span>
            {tags &&
              tags.map((item, index) => (
                <span
                  key={index}
                  className="text-zinc-400 flex gap-2 items-center capitalize"
                >
                  <Image
                    src={crossGray}
                    width={16}
                    height={16}
                    alt="Remove item"
                    onClick={() => handleRemoveTag(tags.length - 1 - index)}
                    style={{ cursor: "pointer" }}
                  />
                  {item}
                </span>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationComponent;
