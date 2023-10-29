import React from "react";

const CategoryList = () => {
  return (
    <div className="bg-white ">
      <h4 className="p-6 text-blue-gray-600 bg-blue-gray-50/30">Category</h4>
      <ul className="text-sm">
        <li className="transition-all duration-300 flex justify-between items-center border-t hover:bg-blue-gray-50/60 py-5 px-7">
          <h4 className="uppercase text-blue-gray-600">CSS</h4>
          <div className="bg-[#38b7ea] rounded-full h-2 w-2"></div>
        </li>
        <li className="transition-all duration-300 flex justify-between items-center border-t hover:bg-blue-gray-50/60 py-5 px-7">
          <h4 className="uppercase text-blue-gray-600">Html</h4>
          <div className="bg-[#ff7473] rounded-full h-2 w-2"></div>
        </li>
        <li className="transition-all duration-300 flex justify-between items-center border-t hover:bg-blue-gray-50/60 py-5 px-7">
          <h4 className=" text-blue-gray-600">JavaScript</h4>
          <div className="bg-[#ffc952] rounded-full h-2 w-2"></div>
        </li>
        <li className="transition-all duration-300 flex justify-between items-center border-t hover:bg-blue-gray-50/60 py-5 px-7">
          <h4 className=" text-blue-gray-600">React</h4>
          <div className="bg-[#6dc8bf] rounded-full h-2 w-2"></div>
        </li>
        <li className="transition-all duration-300 flex justify-between items-center border-t hover:bg-blue-gray-50/60 py-5 px-7">
          <h4 className=" text-blue-gray-600">Others</h4>
          <div className="bg-blue-gray-600 rounded-full h-2 w-2"></div>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
