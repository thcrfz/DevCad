import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllDevelopers,
  getIdDevelopers,
} from "../../data/developers/get-all-developers";
import { DeveloperData } from "../../domain/posts/post";
import { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";
import Form from "../../components/Form";

export type DynamicDevProps = {
  developers: DeveloperData;
};

const DynamicDevs = ({ developers }: DynamicDevProps) => {
  const [name, setName] = useState<string>(developers.name);
  const [email, setEmail] = useState<string>(developers.email);
  const [age, setAge] = useState<string>(developers.age);
  const [url, setUrl] = useState<string>(developers.url);
  const home = "/home";

  return (
    <Form
      handleSubmit={async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (name.length < 3 || name.length > 255) {
          toast.error("Nome precisa ter entre 3 e 255 caracteres.");
          formErrors = true;
        }
        if (!validator.isEmail(email)) {
          toast.error("email inválido");
          formErrors = true;
        }
        if (!validator.isInt(String(age))) {
          toast.error("idade inválida");
          formErrors = true;
        }
        if (!validator.isURL(url)) {
          toast.error("url inválida");
          formErrors = true;
        }
        const json = await fetchPutDeveloperJson(
          `${DEVELOPERS_URL}\\${developers.id}`,
          name,
          email,
          age,
          url,
        );

        return json;
      }}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      age={age}
      setAge={setAge}
      url={url}
      setUrl={setUrl}
      link={home}
    />
  );
};

export default DynamicDevs;

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
