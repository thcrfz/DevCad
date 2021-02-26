import { toast } from "react-toastify";

export const fetchPostLangJson = async (
  link: string,
  lang: string,
  id: number,
) => {
  return await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: lang,
      developer_id: id,
    }),
  }).then((res) => {
    if (res.status !== 200) return toast.error("Error ao cadastrar linguagem");
    console.log(res.status);
    toast.success("Linguagem cadastrada com sucesso!");
    return res.json();
  });
};
