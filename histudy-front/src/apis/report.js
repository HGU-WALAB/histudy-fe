import axios from "axios";

export const postReport = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/v1/report`,
    data
  );
  return response;
};
