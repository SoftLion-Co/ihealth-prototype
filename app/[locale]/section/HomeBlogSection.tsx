"use client"
import { useLocale } from "next-intl";

import Blog from "@/images/test/blog/imageBlog1.png";
import Blog2 from "@/images/test/blog/imageBlog2.png";

import BlogCardComponent from "@/components/blog-section/BlogCardComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import ButtonComponent from "@/components/ButtonComponent";

const blogData = [
  {
    id: "1",
    title: "Bag Trends for Summer 2020",
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis Integer bibendum turpis convallis Integer bibendum turpis convallis",
    image: Blog.src,
    category: "Sport",
    date: "12.03.2024",
    comment: "No comment",
    displayName: "bag-trends-for-summer-2020",
  },
  {
    id: "2",
    title: "Top 10 of This Season's Hottest Sneakers",
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis Integer bibendum turpis convallis Integer bibendum turpis convallis ",
    image: Blog2.src,
    category: "Beauty",
    date: "12.03.2024",
    comment: "4 comment",
    displayName: "top-10-of-this-season's-hottest-sneakers",
  },
];

const HomeBlogSecrtion = () => {
  const locale = useLocale();
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="container">
      <div className="flex flex-col justify-center items-center mb-[58px] lg:flex-row lg:justify-between">
        <MainTitleComponent
          tag="h2"
          text="Fashion Blog"
          className="lg:mb-[0px] xl:mb-[0px]"
        />
        <ButtonComponent
          text="View blog"
          typeButton="MainBorderButton"
          tag="a"
          href={`/${locale}/blog`}
        />
      </div>
      <div className="flex flex-col items-center gap-[30px] lg:flex-row lg:justify-between line-clamp-2">
        {blogData.map((item, index) => (
          <BlogCardComponent
            key={index}
            blogId={item.id}
            title={item.title}
            image={item.image}
            text={truncateText(item.text, 190)}
            category={item.category}
            date={item.date}
            comment={item.comment}
            displayName={item.displayName}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBlogSecrtion;
