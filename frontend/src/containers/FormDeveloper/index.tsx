import { LANG_URL } from "../../config/app-config";
import { useState } from "react";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import validation from "../../utils/validate";
import { home } from "../../config/routes";
import { postDeveloper } from "../../data/developers/post-developers";

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
    const developer = await postDeveloper(name, email, age, url);
    setId(developer.id);
  }
  async function handleLang(e) {
    e.preventDefault();
    await fetchPostLangJson(LANG_URL, lang, id);
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
}
