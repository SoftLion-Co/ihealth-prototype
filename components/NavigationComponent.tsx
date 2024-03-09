import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "@/images/vector/ChevronGray.svg";
import home from "@/images/navigation/Home.svg";
import cross from "@/images/vector/Cross.svg";
import crossGray from "@/images/vector/CrossGray.svg";
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

  const handleImageClick = () => {
    router && router.back && router.back();
  };

  const handleClearTags = () => {
    clearTags && clearTags();
  };

  const handleRemoveTag = (index: number) => {
    removeTag && removeTag(index);
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

  return (
    <div className="bg-gray-100 py-4 flex justify-between">
      <div className="container flex justify-between text-sm">
        <div className="flex items-center gap-3 capitalize">
          {items.map((item, index) => (
            <Fragment key={index}>
              {index > 0 && <span className="">{separator}</span>}
              {item}
            </Fragment>
          ))}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex items-center gap-5">
            {tags?.map((item, index) => (
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
            ))}
            <span className="text-gray-700 flex gap-2 items-center capitalize">
              <Image
                src={cross}
                width={16}
                height={16}
                alt="Remove item"
                onClick={handleClearTags}
                style={{ cursor: "pointer" }}
              />
              {t("clear_all")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationComponent;
