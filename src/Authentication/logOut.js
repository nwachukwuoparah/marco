import React, { useContext } from "react";
const { VITE_userToken } = import.meta.env;
import { useQuery } from "@tanstack/react-query";
import { Global_context } from "../Component/Context.api";
import { useNavigate } from "react-router-dom";

const { logOut } = useContext(Global_context);

const LogOut = (props) => {
  const Navigate = useNavigate();
  const {
    data: logOutData,
    isLoading: logOutLoading,
    error: logOutError,
  } = useQuery(["logOut"], userLogOut, {
    enabled: logOut,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      localStorage.removeItem(VITE_userToken);
      Navigate("login");
    },
  });

  console.log(logOut);
  console.log(logOutData);
  console.log(logOutLoading);
  console.log(logOutError);
};

export default LogOut;
