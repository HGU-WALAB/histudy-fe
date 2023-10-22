import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getAllTeamsForRank = async () => {
  const response = await axiosInstance.get(`/api/public/teams`);
  return response;
};

export const ImageUploadApi = async (reportIdOr, formData) => {
  const response = await axiosInstance.post(
    `/api/team/reports/${reportIdOr}/image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
