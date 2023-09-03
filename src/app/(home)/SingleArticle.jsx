// 'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaBookmark } from "react-icons/lia";

const SingleArticle = ({ article }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded border border-neutral-100 shadow-sm hover:shadow">
      <Link href="/" aria-label="Article">
        <img
          src={article.image}
          className="object-cover w-full h-64 rounded"
          alt=""
        />
      </Link>
      <div className="py-5 px-2">
        <div className="flex  justify-between items-center mb-2">
          <p className=" text-xs font-semibold text-gray-600 uppercase">
            {article?.articlePublishDate}
          </p>
          <div className="flex space-x-4">
            <h4 className="border border-pink-50 shadow-sm text-sm font-semibold text-gray-700 uppercase px-1 rounded-md">
              {article.articleCategory}
            </h4>
            <button className=" shadow-sm hover:shadow">
              <LiaBookmark className="text-2xl"></LiaBookmark>
            </button>
          </div>
        </div>
        <Link
          href="/"
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <h2 className="text-2xl font-bold leading-5">
            {article.articleTitle}
          </h2>
        </Link>
        <p className="mb-4 text-gray-700">{article.Details.slice(0, 140)}</p>
        <div className="flex space-x-4">
          <Link
            href="/"
            aria-label="Likes"
            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">7.4K</p>
          </Link>
          <Link
            href="/"
            aria-label="Comments"
            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="23 5 23 18 19 18 19 22 13 18 12 18"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <polygon
                  points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">81</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
