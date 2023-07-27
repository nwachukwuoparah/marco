import { createContext, useContext, useState, useEffect } from "react";

export const Global_context = createContext();
export const Global_state = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [routh, setRouth] = useState("");
  const [toggleProfile, setToggleProfile] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [message, setMessage] = useState(false);


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
      }}
    >
      {children}
    </Global_context.Provider>
  );
};
