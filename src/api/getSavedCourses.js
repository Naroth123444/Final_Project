import getUser from "./getUser";

const getSavedCourses = async () => {
  try {
    const user = await getUser();
    const userId = user?.id;

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const response = await fetch(
      `https://course-api.istad.co/api/v1/users/${userId}/favorites`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default getSavedCourses;
