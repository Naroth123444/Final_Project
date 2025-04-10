export const loginUser = async (values) => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
  const text = await response.text();
  console.log("HTTP Status:", response.status);
  console.log("Raw Response:", text);

  const data = text ? JSON.parse(text) : {};
  console.log("Parsed JSON:", data);

  if (response.status !== 200) {
    throw new Error();
  }

  console.log("Login Success:", data);

  return data;
};
