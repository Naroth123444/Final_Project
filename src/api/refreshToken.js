const refreshToken = async () => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/auth/refresh",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }
  );

  if (!response.ok) {
    throw new Error();
  }
  const text = await response.text();
  console.log("HTTP Status in Refresh Token:", response.status);
  console.log("Raw Response in Refresh Token:", text);

  const data = text ? JSON.parse(text) : {};

  return data;
};

export default refreshToken;
