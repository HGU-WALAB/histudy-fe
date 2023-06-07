import axios from "axios";

export const readAllGroups = async () => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/manageGroup`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const readAllUsers = async () => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/allUsers`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const readGroupReport = async (id) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/groupReport/${id}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const readApplicants = async () => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/allUsers`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const autoCourses = async () => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/courses`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteCourse = async (id) => {
  const TOKEN = localStorage.getItem("accessToken");
  console.log(id);
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/courses/delete`,
    {
      id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const readReportDetail = async (reportId) => {
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/team/reports/${reportId}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const teamMatch = async () => {
  const TOKEN = localStorage.getItem("accessToken");
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/team-match`,
    {},
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const readUngroup = async () => {
  const TOKEN = localStorage.getItem("accessToken");
  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/unmatched-users`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteUserForm = async (sid) => {
  console.log("sid");
  console.log(sid);
  const TOKEN = localStorage.getItem("accessToken");
  const response = await axios.delete(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/form?sid=${sid}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const editUser = async (data) => {
  const TOKEN = localStorage.getItem("accessToken");
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/admin/edit-user`,
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
