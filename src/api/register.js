// src/api/auth.js or auth.ts if using TypeScript

export const registerUser = async (values) => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Registration failed.");
  }

  return response;
};
