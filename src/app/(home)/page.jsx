// import { Container } from "postcss";
// import { Container } from "postcss";
import Container from "@/components/Container/Container";
import React from "react";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <Container>
      <main className="min-h-full">
        <Categories></Categories>
      </main>
    </Container>
  );
};

export default HomePage;
