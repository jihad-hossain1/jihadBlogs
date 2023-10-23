// "use client";

import getArticles from "@/utils/getArticles";
// import getArticles from "@/utils/getArticles";
import SingleArticle from "./SingleArticle";

const TopArticle = async () => {
  const articles = await getArticles();
  return (
    <div>
      {/* <h4>top ar</h4> */}
      <div className="mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  sm:max-w-sm sm:mx-auto lg:max-w-full p-2 md:px-10">
          {articles.slice(0, 2).map((article) => (
            <SingleArticle key={article._id} article={article}></SingleArticle>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3  sm:max-w-sm sm:mx-auto lg:max-w-full p-2 md:px-10">
        {articles.slice(2, 5).map((article) => (
          <SingleArticle key={article._id} article={article}></SingleArticle>
        ))}
      </div>
    </div>
  );
};

export default TopArticle;
