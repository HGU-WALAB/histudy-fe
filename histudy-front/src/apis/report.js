import axios from "axios";

export const postReport = async (data) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/v1/report`,
    data,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};
