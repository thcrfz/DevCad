import validator from "validator";
import { toast } from "react-toastify";
import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL, LANG_URL } from "../../config/app-config";
import { useState } from "react";
import Form from "../../components/Form";
import { fetchPostLangJson } from "../../utils/fetch-post-language";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/useStyles";

export default function FormDeveloper() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [id, setId] = useState(0);
  const home = "/home";

  async function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 3 || name.length > 255)
      return toast.error("Nome precisa ter entre 3 e 255 caracteres.");
    if (!validator.isEmail(email)) return toast.error("email inválido");
    if (!validator.isInt(String(age))) return toast.error("idade inválida");
    if (!validator.isURL(url)) return toast.error("url inválida");

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
