import axios from "axios";

export const importCourses = async (formData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/course`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
