import { UserData } from "../../domain/posts/post";
import { USERS_URL } from "../../config/app-config";
import { fecthJson } from "../../utils/fetch.json";

export const getAllUsers = async (): Promise<UserData[]> => {
  const users = await fecthJson<UserData[]>(USERS_URL);
  return users;
};
