import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL, LANG_URL } from "../../config/app-config";
import { useState } from "react";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import validation from "../../utils/validate";
import { home } from "../../config/routes";

export default function FormDeveloper() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [id, setId] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    validation(name, email, age, url);

    await fetchPostDeveloperJson(
      DEVELOPERS_URL,
      name,
      email,
      age,
      url,
    ).then((res) => setId(res.id));
  }
  async function handleLang(e) {
    e.preventDefault();
    await fetchPostLangJson(LANG_URL, lang, id);
  }
  return (
    <>
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
    </>
  );
}
