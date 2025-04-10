const createCategory = async (category) => {
  const response = fetch("https://course-api.istad.co/api/v1/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ category }),
  });
  if ((await response).status === 201) {
    console.log("Created category");
  } else {
    console.log("Fail to create category");
  }
};

export default createCategory;
