export const testLambda = async () => {
  const response = await fetch(
    "https://7zi60hc71c.execute-api.eu-north-1.amazonaws.com/upload-url",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
    }
  );

  return await response.json();
};