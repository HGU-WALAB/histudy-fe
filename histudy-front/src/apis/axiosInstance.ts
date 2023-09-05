// src/api/axiosInstance.ts

import axios, { AxiosError } from "axios";
import { tokenRefresh } from "./auth";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_BASE_URL, // 실제 API 주소로 교체
  headers: { "Content-Type": "application/json" },
});

// 응답 인터셉터 적용
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },

  async (error) => {
    const err = error as AxiosError;
    if (err.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      const { token } = await tokenRefresh(refreshToken).then(
        (res) => res.data
      );

      localStorage.setItem("accessToken", token);

      console.log(token);
      alert("토큰이 갱신되었습니다. 다시 시도해주세요.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
