import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllDevelopers,
  getIdDevelopers,
} from "../data/developers/get-all-developers";
import { signIn, signOut, useSession } from "next-auth/client";
import { DeveloperData } from "../domain/posts/post";
import DynamicDevs from "../containers/DynamicDevs";
import NavBar from "../components/navbar";
import React from "react";
import { Container } from "@material-ui/core";
import Loading from "../components/Loading";
import SignIn from "../components/SignIn";

export type DynamicDevProps = {
  developers: DeveloperData;
};

export default function IdDevs({ developers }: DynamicDevProps) {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <Container>
          <SignIn handleSingIn={() => signIn("auth0")} />
        </Container>
      )}
      {session && (
        <>
          <NavBar handleLogout={() => signOut()} />
          <DynamicDevs developers={developers} />
        </>
      )}
      {loading && <Loading />}
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
