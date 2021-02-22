import { DeveloperData } from "../../domain/posts/post";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fecthJson } from "../../utils/fetch.json";

export const getAllDevelopers = async (): Promise<DeveloperData[]> => {
  const url = `${DEVELOPERS_URL}`;
  const developers = await fecthJson<DeveloperData[]>(url);
  return developers;
};

export const getIdDevelopers = async (
  id: string | string[],
): Promise<DeveloperData[]> => {
  const idString = Array.isArray(id) ? id[0] : id;
  const url = `${DEVELOPERS_URL}/${idString}`;
  const jsonDevelopers = await fecthJson<DeveloperData[]>(url);
  return jsonDevelopers;
};
