const getCourseById = async (id) => {
  try {
    const response = await fetch(`/api/api/v1/courses/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          `Failed to fetch course: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching course with slug ${id}:`, error);
    throw error; // Re-throw to let the caller handle it
  }
};

export default getCourseById;
