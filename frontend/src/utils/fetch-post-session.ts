import { toast } from "react-toastify";

export const fetchPostSessionJson = async (
  url: string,
  userEmail: string,
  userPassword: string,
) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  }).then((res) => {
    if (res.status !== 200) return toast.error("Email ou senha inválidos.");
    return res.json();
  });
};
