import validator from "validator";
import { toast } from "react-toastify";
import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL } from "../../config/app-config";
import { useState } from "react";
import Form from "../../components/Form";

export default function FormDeveloper() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [url, setUrl] = useState<string>("");
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
        const json = await fetchPostDeveloperJson(
          DEVELOPERS_URL,
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
}
