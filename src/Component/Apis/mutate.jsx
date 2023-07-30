const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const { VITE_userToken } = import.meta.env;
const token = localStorage.getItem(VITE_userToken);

export const signUp = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/register`, data);
};

export const verify = async (token) => {
  return await axios.patch(`${VITE_End_Point}/user/verify/${token}`);
};

export const logIn = async (userData) => {
  const { memo, ...data } = userData;
  return await axios.post(`${VITE_End_Point}/user/login`, data);
};

export const userLogOut = () => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  return axios.post(
    `${VITE_End_Point}/user/logout/?access_token=${removedToken}`
  );
};

export const forgotPassword = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/recover-password`, data);
};

export const resetPassword = async (userData) => {
  const { token, data } = userData;
  return await axios.post(
    `${VITE_End_Point}/user/reset-password/${token}`,
    data
  );
};

export const changePassword = async (data) => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  return await axios.patch(
    `${VITE_End_Point}/user/change-password/?access_token=${removedToken}`,
    data
  );
};

export const createCompliance = (data) => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  console.log(data);
  return axios.post(
    `${VITE_End_Point}/compliance/new/?access_token=${removedToken}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
