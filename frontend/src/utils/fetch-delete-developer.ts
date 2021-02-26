import { toast } from "react-toastify";

export const fetchDeleteDeveloperJson = async (link: string) => {
  return await fetch(link, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status !== 200)
      return toast.error("Não foi possivel deletar o desenvolvedor.");
    toast.info("Deletado com sucesso");
    return res.json();
  });
};
