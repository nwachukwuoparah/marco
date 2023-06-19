import { createContext, useContext, useState, useEffect } from "react";
export const Global_context = createContext();

export const Global_state = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <Global_context.Provider value={{ hover, setHover }}>
      {children}
    </Global_context.Provider>
  );
};
