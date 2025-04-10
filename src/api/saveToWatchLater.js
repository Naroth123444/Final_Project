import getUser from "./getUser";

const saveToWatchLater = async (courseId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No authentication token found");
    const user = await getUser();
    if (!user?.id) throw new Error("User not found or invalid");

    const response = await fetch(
      `https://course-api.istad.co/api/v1/users/${user.id}/favorites/${courseId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      }
    );
    return response.ok;
  } catch (error) {
    console.error(error);
  }
};

export default saveToWatchLater;
