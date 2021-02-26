import { DeveloperData } from "../../domain/posts/post";
import { useState } from "react";
import { DEVELOPERS_URL, LANG_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import { get } from "lodash";
import validation from "../../utils/validate";

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

    validation(name, email, age, url);

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
