import axios from "axios";

export const studyEnroll = async (data) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/forms`,
    data,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const getMyGroup = async () => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/users/me/forms`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};
