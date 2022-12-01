import { createContext, useState } from "react";
export const DarkModeContext = createContext();
export const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const values = { darkMode, setDarkMode };
  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
};
