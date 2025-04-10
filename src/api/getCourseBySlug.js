const getCourseBySlug = async (slug) => {
  try {
    const response = await fetch(`/api/api/v1/courses/slug/${slug}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    console.error(`Error fetching course with slug ${slug}:`, error);
    throw error; // Re-throw to let the caller handle it
  }
};

export default getCourseBySlug;
