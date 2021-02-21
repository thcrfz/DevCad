import { GetStaticProps } from "next";

import React from "react";
import NavBar from "../../components/navbar";
import FormDeveloper from "../../containers/FormDeveloper";
import { getAllDevelopers } from "../../data/developers/get-all-developers";

export default function Home() {
  return <FormDeveloper />;
}
export const getStaticProps: GetStaticProps = async () => {
  const developers = await getAllDevelopers();

  return {
    props: { developers },
  };
};
