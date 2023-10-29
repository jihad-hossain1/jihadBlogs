import Image from "next/image";
import React from "react";

const SingleCategory = ({ category }) => {
  const { _id, title, icon } = category;
  console.log(category);
  return (
    <div className="shadow hover:shadow-md rounded-md border border-neutral-400 p-3 flex flex-col  justify-center items-center cursor-pointer">
      <Image src={icon} alt="category photo" height={100} width={100}></Image>
      <h4 className="text-xl font-semibold uppercase">{title}</h4>
    </div>
  );
};

export default SingleCategory;
