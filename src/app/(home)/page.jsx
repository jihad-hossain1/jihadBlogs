// import { Container } from "postcss";
// import { Container } from "postcss";
import Container from "@/components/Container/Container";
import React from "react";
import TopArticle from "./TopArticle";
// import Categories from "./Categories";
// import TopArticle from "../../components/TopViewArticle/TopArticle";

const HomePage = () => {
  return (
    <Container>
      <main className="min-h-full">
        {/* <Categories></Categories> */}
        <TopArticle></TopArticle>
      </main>
    </Container>
  );
};

export default HomePage;
