export const fetchDeleteDeveloperJson = async (link: string) => {
  const rawData = await fetch(link, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await rawData.json();
  return jsonData;
};
