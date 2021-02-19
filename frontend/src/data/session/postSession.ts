import { UserData } from "../../domain/posts/post";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fecthJson } from "../../utils/fetch.json";

export const postSession = async (): Promise<UserData[]> => {
  const session = await fecthJson<UserData[]>(DEVELOPERS_URL);
  return session;
};
