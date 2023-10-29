import Container from "@/components/Container/Container";
import React from "react";
import TopArticle from "./TopArticle";
import OneBlogItem from "./OneBlogItem/OneBlogItem";
import CV from "@/components/SideBar/CV";
import CategoryList from "@/components/SideBar/CategoryList";
import LastProject from "@/components/SideBar/LastProject";
import Link from "next/link";
import PaginationContent from "@/components/PaginationContent/PaginationContent";

const HomePage = () => {
  return (
    <Container>
      <main className="min-h-full pb-3">
        {/* <Categories></Categories> */}
        <TopArticle></TopArticle>
        <div className="px-2 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="col-span-2  ">
              <OneBlogItem />
              <div className="flex justify-end">
                <PaginationContent />
              </div>
            </div>
            <aside className="space-y-4">
              <CV />
              <CategoryList />
              <LastProject />
            </aside>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default HomePage;
