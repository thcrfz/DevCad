import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllDevelopers,
  getIdDevelopers,
} from "../../data/developers/get-all-developers";
import { DeveloperData } from "../../domain/posts/post";
import { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { DEVELOPERS_URL, LANG_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import { get } from "lodash";

export type DynamicDevProps = {
  developers: DeveloperData;
};

const DynamicDevs = ({ developers }: DynamicDevProps) => {
  const [name, setName] = useState<string>(developers.name);
  const [email, setEmail] = useState<string>(developers.email);
  const [age, setAge] = useState<string>(developers.age);
  const [url, setUrl] = useState<string>(developers.url);
  const [lang, setLang] = useState<string>(
    get(developers, "languageModels[0].name", false)
      ? developers.languageModels[0].name
      : "",
  );

  const home = "/home";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3 || name.length > 255)
      return toast.error("Nome precisa ter entre 3 e 255 caracteres.");
    if (!validator.isEmail(email)) return toast.error("email inválido");
    if (!validator.isInt(String(age))) return toast.error("idade inválida");
    if (!validator.isURL(url)) return toast.error("url inválida");

    await fetchPutDeveloperJson(
      `${DEVELOPERS_URL}\\${developers.id}`,
      name,
      email,
      age,
      url,
    );
  };

  console.log(developers.id);

  async function handleLang(e) {
    e.preventDefault();
    await fetchPostLangJson(LANG_URL, lang, developers.id);
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      handleLang={handleLang}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      age={age}
      setAge={setAge}
      url={url}
      setUrl={setUrl}
      lang={lang}
      setLang={setLang}
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
