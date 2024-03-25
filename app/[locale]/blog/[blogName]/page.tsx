import React from "react";
import ArticleSection from "../../section/article-page/ArticleSection";
import NavigationComponent from "@/components/NavigationComponent";

const page = ({ params }: { params: any }) => {
  const blogName = params.blogName;
  return (
    <div>
      {/* {blogName} */}
      <NavigationComponent links={[{ title: `Blog 1`, href: "" }]} />
      <ArticleSection  />
    </div>
  );
};

export default page;
