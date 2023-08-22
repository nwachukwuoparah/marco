const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const { VITE_userToken } = import.meta.env;

export const getUser = async (data) => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  return axios.get(
    `${VITE_End_Point}/user/profile/?access_token=${removedToken}`
  );
};

export const singleTransact = async (data) => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token?.replace(/"/g, "");
  const removedRef = data.queryKey[1]?.replace(/"/g, "");
  return axios.get(
    `${VITE_End_Point}/transaction/?access_token=${removedToken}&transactionRef=${removedRef}`
  );
};

