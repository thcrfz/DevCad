import { DeveloperData } from "../domain/posts/post";
import { GetServerSideProps } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import { getAllDevelopers } from "../data/developers/get-all-developers";
import NavBar from "../components/navbar";
import React from "react";
import ListDeveloper from "../containers/ListDevelopers";
import DynamicDevs from "../containers/DynamicDevs";
import { Container } from "@material-ui/core";
import Loading from "../components/Loading";
import SignIn from "../components/SignIn";

export type HomeProps = {
  developers: DeveloperData[];
  developer: DeveloperData;
};

export default function Index({ developers, developer }: HomeProps) {
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
          <DynamicDevs developers={developer} />
          <ListDeveloper developers={developers} />
        </>
      )}
      {loading && <Loading />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const developers = await getAllDevelopers();
  return {
    props: { developers },
  };
};
