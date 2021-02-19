export const fecthPostSessionJson = async (
  url: string,
  userEmail: string,
  userPassword: string,
) => {
  const rawData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  const jsonData = await rawData.json();
  return jsonData;
};
