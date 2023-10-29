import getCategories from "@/utils/getCategories";
import React from "react";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-4">
        {categories.map((category, index) => (
          <SingleCategory key={index} category={category}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
