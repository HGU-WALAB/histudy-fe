import axios from "axios";

export const tokenRefresh = async (refreshToken) => {
  const tokenBody = {
    grantType: "refresh_token",
    refreshToken: refreshToken,
  };
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/auth/token`,
    tokenBody
  );

  return response.data;
};
