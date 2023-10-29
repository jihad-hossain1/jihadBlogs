import getArticles from "@/utils/getArticles";
import React from "react";
import SingleCategoryBlog from "@/components/SingleCategoryBlog/SingleCategoryBlog";
import HtmlSingleBlog from "@/components/SingleCategoryBlog/HtmlSingleBlog";
import CssSingleBlog from "@/components/SingleCategoryBlog/CssSingleBlog";

const OneBlogItem = async () => {
  const articles = await getArticles();

  const itmesBlog = [...articles].reverse();
  const javascript = itmesBlog?.filter(
    (item) => item?.category === "javascript"
  );
  const htmls = itmesBlog?.filter((item) => item?.articleCategory === "html");
  const css = itmesBlog?.filter((item) => item?.articleCategory === "css");
  return (
    <div>
      <div className="mb-3 grid gap-3">
        {javascript.slice(0, 1).map((art) => (
          <SingleCategoryBlog art={art} key={art?._id} />
        ))}
      </div>
      <div className="mb-3 grid gap-3">
        {htmls.slice(0, 1).map((art) => (
          <HtmlSingleBlog art={art} key={art?._id} />
        ))}
      </div>
      <div className="mb-3 grid gap-3">
        {css.slice(0, 1).map((art) => (
          <CssSingleBlog art={art} key={art?._id} />
        ))}
      </div>
    </div>
  );
};

export default OneBlogItem;
