import { SESSION_URL } from "../../config/app-config";
import { fetchPostSessionJson } from "../../utils/fetch-post-session";

export const postSessionUser = async (email: string, password: string) => {
  const url = `${SESSION_URL}`;
  const user = await fetchPostSessionJson(url, email, password);
  return user;
};
