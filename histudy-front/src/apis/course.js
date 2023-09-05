import axios from "axios";
import axiosInstance from "./axiosInstance";

export const importCourses = async (formData) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/courses`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const teamCourses = async () => {
  const response = await axiosInstance.get(`/api/team/courses`);
  return response;
};

export const autoCourses = async () => {
  const response = await axiosInstance.get("/api/courses");
  return response;
};
