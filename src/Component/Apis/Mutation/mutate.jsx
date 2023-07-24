const { VITE_End_Point } = import.meta.env;
import axios from "axios";

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
