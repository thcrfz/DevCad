import { UserData } from "../../domain/posts/post";
import { USERS_URL } from "../../config/app-config";
import { fecthPostSessionJson } from "../../utils/fetch-post-session";

export const getAllUsers = async () => {
  const users = await fecthPostSessionJson(USERS_URL);
  return users;
};
