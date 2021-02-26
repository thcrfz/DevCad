import { toast } from "react-toastify";

export const fetchPutDeveloperJson = async (
  link: string,
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  return await fetch(link, {
    method: "PUT",
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
    if (res.status !== 200) return toast.error("Error ao editar linguagem");
    console.log(res.status);
    toast.success("Linguagem editada com sucesso!");
    return res.json();
  });
};
