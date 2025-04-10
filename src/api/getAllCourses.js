const getAllCourses = async () => {
  const response = await fetch("https://course-api.istad.co/api/v1/courses", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // If using tokens
    },
  });

  if (!response.ok) {
    throw new Error("Invalid fetching courses");
  }

  const data = await response.json();
  return data;
};

export default getAllCourses;
