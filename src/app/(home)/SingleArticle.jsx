// 'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaBookmark } from "react-icons/lia";

const SingleArticle = ({ article }) => {
  return (
    // <section
    //   style={{ backgroundImage: `url(${article?.image})` }}
    //   className="bg-no-repeat bg-cover w-full min-h-[300px] group p-1 ring-4 ring-white"
    // >

    // </section>
    <>
      <div className="bg-white p-2 rounded-sm">
        <div className="group">
          <div className="relative overflow-hidden">
            <img src={article?.image} alt="" />
            <div className="absolute top-0">
              <div className="relative m-3 text-white">
                <div className="">
                  <h4 className="text-sm md:text-xl font-bold">
                    {article?.articleTitle}
                  </h4>
                  <h4 className="uppercase inline-block text-xs mt-2 md:text-sm border border-white py-1 px-2 rounded-3xl">
                    {article?.articleCategory}
                  </h4>
                </div>
              </div>
            </div>
            <div className=" absolute bottom-5 m-5 text-white">
              <h4 className="text-sm md:text-md ">
                Publish {article?.articlePublishDate}
              </h4>
            </div>
            <div className="absolute w-full h-full flex flex-col justify-between -bottom-10 bg-blue-gray-400 bg-opacity-30 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;


