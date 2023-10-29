"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const fetchurl = async ({ url: string }) => {
  const response = await fetch(string);

  if (!response.ok) {
    throw new Error("faild to fetch");
  }
  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const {} = useSWR(`/api/search?q=${encodedSearchQuery}`);

  console.log("search params", encodedSearchQuery);

  return <div>SearchPage here...</div>;
};

export default SearchPage;
