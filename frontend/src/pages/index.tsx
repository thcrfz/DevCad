import { DeveloperData } from "../domain/posts/post";
import { GetStaticProps } from "next";
import { getAllDevelopers } from "../data/developers/get-all-developers";
import HomePage from "../containers/HomePage";

export type HomeProps = {
  developers: DeveloperData[];
};

export default function Home({ developers }: HomeProps) {
  return <HomePage developers={developers} />;
}
export const getStaticProps: GetStaticProps = async () => {
  const developers = await getAllDevelopers();

  return {
    props: { developers },
  };
};
