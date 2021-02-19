import { GetStaticProps } from "next";
import LoginPage from "../../containers/LoginPage";
import { UserData } from "../../domain/posts/post";
import { getAllUsers } from "../../data/user/get-all-users";

export type LoginProps = {
  user: UserData[];
};

export default function Login({ user }: LoginProps) {
  return <LoginPage developers={user} />;
}
export const getStaticProps: GetStaticProps = async () => {
  const user = await getAllUsers();

  return {
    props: { user },
  };
};
