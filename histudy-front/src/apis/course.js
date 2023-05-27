import axios from "axios";

export const importCourses = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/course`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
