export const testLambda = async () => {
  const response = await fetch(
    "https://7zi60hc71c.execute-api.eu-north-1.amazonaws.com/upload-url",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  console.log("HTTP Status:", response.status);

  const data = await response.json();

  console.log("Lambda Response:", data);

  return data;
};