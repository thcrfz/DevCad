import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL } from "../../config/app-config";

export const postDeveloper = async (
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  const route = `${DEVELOPERS_URL}`;
  return await fetchPostDeveloperJson(route, name, email, age, url);
};
