// "use client";

import getArticles from "@/utils/getArticles";
// import getArticles from "@/utils/getArticles";
import SingleArticle from "./SingleArticle";

const TopArticle = async () => {
  const articles = await getArticles();
  return (
    <div>
      {/* <h4>top ar</h4> */}
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full m-2">
        {articles.map((article) => (
          <SingleArticle key={article._id} article={article}></SingleArticle>
        ))}
      </div>
    </div>
  );
};

export default TopArticle;
