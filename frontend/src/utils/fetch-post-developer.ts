import { toast } from "react-toastify";

export const fetchPostDeveloperJson = async (
  link: string,
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  return await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      age: age,
      url: url,
    }),
  }).then((res) => {
    if (res.status !== 200) return toast.error("Email já existe");
    console.log(res.status);
    toast.success("Usuário Cadastrado com sucesso!");
    return res.json();
  });
};
