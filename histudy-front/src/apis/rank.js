import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getAllTeamsForRank = async () => {
  const response = await axiosInstance.get(`/api/public/teams`);
  return response;
};
