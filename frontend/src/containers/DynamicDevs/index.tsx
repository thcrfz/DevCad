import { DeveloperData } from "../../domain/posts/post";
import { useState } from "react";
import { DEVELOPERS_URL, LANG_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import { get } from "lodash";
import validation from "../../utils/validate";
import { postDeveloper } from "../../data/developers/post-developers";

export type DynamicDevProps = {
  developers: DeveloperData;
};

const DynamicDevs = ({ developers }: DynamicDevProps) => {
  const [name, setName] = useState<string>(
    get(developers, "name", false) ? developers.name : "",
  );
  const [email, setEmail] = useState<string>(
    get(developers, "email", false) ? developers.email : "",
  );
  const [age, setAge] = useState<string>(
    get(developers, "age", false) ? developers.age : "",
  );
  const [url, setUrl] = useState<string>(
    get(developers, "url", false) ? developers.url : "",
  );
  const [lang, setLang] = useState<string>(
    get(developers, "languageModels[0].name", false)
      ? developers.languageModels[0].name
      : "",
  );
  const [id, setId] = useState(0);

  const home = "/home";

  const handleSubmit = async (e) => {
    e.preventDefault();

    validation(name, email, age, url);

    if (!developers) {
      const developer = await postDeveloper(name, email, age, url);
      setId(developer.id);
    } else {
      await fetchPutDeveloperJson(
        `${DEVELOPERS_URL}\\${developers.id}`,
        name,
        email,
        age,
        url,
      );
    }
  };

  async function handleLang(e) {
    e.preventDefault();
    if (!developers) {
      await fetchPostLangJson(LANG_URL, lang, id);
    } else {
      await fetchPostLangJson(LANG_URL, lang, developers.id);
    }
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
