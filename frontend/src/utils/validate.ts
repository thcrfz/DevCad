import { toast } from "react-toastify";
import validator from "validator";

export default function Validation(
  name: string,
  email: string,
  age: string,
  url: string,
) {
  if (name.length < 3 || name.length > 255)
    return toast.error("Nome precisa ter entre 3 e 255 caracteres.");
  if (!validator.isEmail(email)) return toast.error("email inválido");
  if (!validator.isInt(String(age))) return toast.error("idade inválida");
  if (!validator.isURL(url)) return toast.error("url inválida");
}
