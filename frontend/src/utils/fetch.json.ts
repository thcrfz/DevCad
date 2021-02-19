import { DEVELOPERS_URL } from "../config/app-config";

export const fecthJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData;
};
