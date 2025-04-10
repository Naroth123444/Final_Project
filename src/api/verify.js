export const verifyUser = async (email, verificationCode) => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/auth/verify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        verificationCode,
      }),
    }
  );

  const text = await response.text();
  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch (error) {
      console.warn("Invalid JSON from verify endpoint", error);
    }
  }

  if (!response.ok) {
    throw new Error(data?.message || "Verification failed.");
  }

  return data;
};
