import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllDevelopers,
  getIdDevelopers,
} from "../../data/developers/get-all-developers";
import { DeveloperData } from "../../domain/posts/post";
import DynamicDevs from "../../containers/DynamicDevs";
import NavBar from "../../components/navbar";
import React from "react";
import ListDeveloper from "../../containers/ListDevelopers";

export type DynamicDevProps = {
  developers: DeveloperData;
};

export default function IdDevs({ developers }: DynamicDevProps) {
  return (
    <>
      <NavBar />
      <DynamicDevs developers={developers} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const developers = await getAllDevelopers();

  return {
    paths: developers.map((dev) => {
      return {
        params: {
          id: dev.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const developers = await getIdDevelopers(params.id);
  return {
    props: { developers },
  };
};