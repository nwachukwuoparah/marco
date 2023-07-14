const { VITE_End_Point } = import.meta.env;
import axios from "axios";

export const signUp = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/register`, data);
};

export const logIn = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/login`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${VITE_End_Point}/user/recover-password `, data);
};
