import axios from "axios";

export const importCourses = async (formData) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(`/api/course`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${TOKEN}`,
    },
    withCredentials: true,
  });
  return response;
};
