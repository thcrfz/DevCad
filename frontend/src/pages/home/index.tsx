import { DeveloperData } from "../../domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllDevelopers } from "../../data/developers/get-all-developers";
import NavBar from "../../components/navbar";
import React from "react";
import ListDeveloper from "../../containers/ListDevelopers";
import DynamicDevs from "../../containers/DynamicDevs";

export type HomeProps = {
  developers: DeveloperData[];
  developer: DeveloperData;
};

export default function Index({ developers, developer }: HomeProps) {
  return (
    <>
      <NavBar />
      <DynamicDevs developers={developer} />
      <ListDeveloper developers={developers} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const developers = await getAllDevelopers();
  return {
    props: { developers },
  };
};
