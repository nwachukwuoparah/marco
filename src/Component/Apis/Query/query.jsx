const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const { VITE_userToken } = import.meta.env;

export const getUser = () => {
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token.replace(/"/g, "");
  return axios.get(
    `${VITE_End_Point}/user/profile/?access_token=${removedToken}`
  );
};

export const userLogOut = () => { 
  const token = localStorage.getItem(VITE_userToken);
  const removedToken = token.replace(/"/g, "");  
  console.log(removedToken)
  return axios.post(`${VITE_End_Point}/user/logout/?access_token=${removedToken}`);
};
