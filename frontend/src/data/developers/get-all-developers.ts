import { DeveloperData } from "../../domain/posts/post";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fecthJson } from "../../utils/fetch.json";

export const getAllDevelopers = async (): Promise<DeveloperData[]> => {
  const developers = await fecthJson<DeveloperData[]>(DEVELOPERS_URL);
  return developers;
};
