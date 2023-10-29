"use client";

import Image from "next/image";
import Link from "next/link";
// import { Container } from "postcss";
import React from "react";
import Container from "../Container/Container";
import { lastResponse, lastTweet } from "@/data/rafdata";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  //   const lastResponse = lastResponse;
  return (
    <div className="bg-slate-100">
      <div className="text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto p-2 gap-3 mt-6 p-3">
          <div className="text-gray-800">
            <h2 className="py-2 pl-3 pb-4 text-sm md:text-xl text-blue-gray-600">
              Last Responses
            </h2>
            {lastResponse.slice(0, 3).map((item, index) => (
              <div key={index} className="flex gap-2 p-2 ">
                <div className="w-24">
                  <img src={item?.avatar} alt="" />
                </div>
                <div>
                  <p className="text-gray-900 mb-4">
                    {item?.blogerName} in{" "}
                    <Link
                      href={"/"}
                      className="text-gray-500 hover:text-gray-950 hover:underline"
                    >
                      {item?.title}
                    </Link>
                  </p>
                  <p className="text-gray-500">{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-gray-800">
            <h2 className="mb-6 md:text-xl text-blue-gray-600">Last Tweet</h2>
            <div className="flex flex-col space-y-3">
              {lastTweet.slice(0, 3).map((item, index) => (
                <div key={index} className="flex space-x-2 break-all">
                  <div className="w-20">
                    <img src={item?.avatar} alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-gray-950 mb-3">
                      {item?.name} <span className="ml-3">{item?.title}</span>
                    </h4>
                    <p className="text-gray-500">
                      {item?.post}{" "}
                      <Link className="hover:text-gray-950" href={`/`}>
                        {item?.avatar}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-gray-800">
            <div>
              <div className="avatar">
                <div className="w-20 md:w-28 rounded-full border border-neutral-200 shadow-sm hover:shadow">
                  <Image
                    src={`https://i.ibb.co/FnfTKzv/icon-Jihad.png`}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <p className="break-all mb-3 text-gray-500">
                Jihad-Blogs is a responsive, beautiful, creative & unique
                Next.js full-stack project best suited for blogs & personal
                portfolio showcases. It’s easy to use & setup, SEO friendly and
                has top notch standard compliant code.
              </p>
            </div>
            <div className="text-gray-800 ">
              <h2 className=" mb-5 text-xl text-blue-gray-700">Newsletters</h2>
              <p className="mb-3">
                Stay up to do date with my posts, subscribe to newsletter:
              </p>
              <form action="">
                <div>
                  <label htmlFor="email" className="label label-text">
                    Type Email
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      id="email"
                      className="focus:outline-none p-3 w-full  border border-neutral-300 input input-group"
                    />
                    <button type="submit" className="cursor-pointer btn">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
        <div className="max-w-[1200px] mx-auto py-4">
          <footer className="grid md:flex justify-between items-center">
            <div>@all right reserved. #JihadHossain</div>
            <ul className="flex space-x-3 mt-4 md:mt-0">
              <li>
                <Link href="/">
                  <AiFillTwitterCircle className="text-4xl text-gray-600"></AiFillTwitterCircle>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillLinkedin className="text-4xl text-gray-600"></AiFillLinkedin>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillGithub className="text-4xl text-gray-600"></AiFillGithub>
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// src = "";
// alt = "jihad photo";
