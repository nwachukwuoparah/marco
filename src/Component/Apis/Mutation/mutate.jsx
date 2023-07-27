const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const { VITE_userToken } = import.meta.env;
const token = localStorage.getItem(VITE_userToken);

export const signUp = async (data) => {
  console.log(data);
  console.log("called");
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
  console.log("call");
  console.log(removedToken);
  return axios.post(
    `${VITE_End_Point}/user/logout/?access_token=${removedToken}`
  );
};

export const resetPassword = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/recover-password`, data);
};

export const changePassword = async (userData) => {
  const { token, data } = userData;
  return await axios.post(
    `${VITE_End_Point}/user/reset-password/${token}`,
    data
  );
};

export const createCompliance = () => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  return axios.post(
    `${VITE_End_Point}/compliance/new/?access_token=${removedToken}`
  );
};
