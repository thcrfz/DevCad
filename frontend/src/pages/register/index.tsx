import { GetStaticProps } from "next";

import React from "react";
import FormDeveloper from "../../containers/FormDeveloper";
import { getAllDevelopers } from "../../data/developers/get-all-developers";

export default function Register() {
  return <FormDeveloper />;
}
export const getStaticProps: GetStaticProps = async () => {
  const developers = await getAllDevelopers();

  return {
    props: { developers },
  };
};
