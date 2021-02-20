import { DeveloperData } from "../domain/posts/post";
import { GetStaticProps } from "next";
import { getAllDevelopers } from "../data/developers/get-all-developers";
import NavBar from "../components/navbar";
import React from "react";
import ListDeveloper from "../containers/ListDevelopers";

export type HomeProps = {
  developers: DeveloperData[];
};

export default function Home({ developers }: HomeProps) {
  return (
    <>
      <NavBar />
      <ListDeveloper />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const developers = await getAllDevelopers();

  return {
    props: { developers },
  };
};
