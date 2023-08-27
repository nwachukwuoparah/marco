import { createContext, useContext, useState, useEffect } from "react";

export const Global_context = createContext();

export const Global_state = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [routh, setRouth] = useState("");
  const [transaction, setTransaction] = useState(false);
  const [message, setMessage] = useState(false);
  const [toste, setToste] = useState(false);
  return (
    <Global_context.Provider
      value={{
        hover,
        setHover,
        routh,
        setRouth,
        transaction,
        setTransaction,
        message,
        setMessage,
        toste,
        setToste,
      }}
    >
      {children}
    </Global_context.Provider>
  );
};
