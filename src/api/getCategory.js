const getCategory = async () => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/categories",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong while fetching category");
  }
  const data = await response.json();
  return data;
};

export default getCategory;
