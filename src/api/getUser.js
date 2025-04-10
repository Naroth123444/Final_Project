const getUser = async () => {
  try {
    const response = await fetch(
      "https://course-api.istad.co/api/v1/users/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

export default getUser;
