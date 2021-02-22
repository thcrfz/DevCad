export const fetchPutDeveloperJson = async (
  link: string,
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  const rawData = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      age: age,
      url: url,
    }),
  });
  const jsonData = await rawData.json();
  return jsonData;
};
