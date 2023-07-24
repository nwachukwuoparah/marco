import { createContext, useContext, useState, useEffect } from "react";
const { VITE_userToken } = import.meta.env;
export const Global_context = createContext();
import { useQuery } from "@tanstack/react-query";
import { getUser, userLogOut } from "./Apis/Query/query";
import { logIn } from "./Apis/Mutation/mutate";
import { useNavigate } from "react-router-dom";

export const Global_state = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [routh, setRouth] = useState("");
  const [toggleProfile, setToggleProfile] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [message, setMessage] = useState(false);
  const [logOut, setLogOut] = useState(false);
  // const [userdata, setUserdata] = useState({});

  const { data, isLoading, error } = useQuery(["getUser"], getUser, {
    // enabled: localStorage.getItem(VITE_userToken) ? true : false,
    refetchOnWindowFocus: false,
    onSuccess: () => {},
  });

  const {
    data: logOutData,
    isLoading: logOutLoading,
    error: logOutError,
  } = useQuery(["logOut"], userLogOut, {
    enabled: logOut,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      localStorage.removeItem(VITE_userToken);
    },
  });

  console.log(logOut);
  console.log(logOutData);
  console.log(logOutLoading);
  console.log(logOutError);

  return (
    <Global_context.Provider
      value={{
        hover,
        setHover,
        routh,
        setRouth,
        toggleProfile,
        setToggleProfile,
        transaction,
        setTransaction,
        message,
        setMessage,
        data,
        isLoading,
        error,
        setLogOut,
      }}
    >
      {children}
    </Global_context.Provider>
  );
};
