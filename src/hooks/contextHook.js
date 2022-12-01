import { useContext } from "react";
import { DarkModeContext } from "../context/context";

const useDarkContext = () => {
  return useContext(DarkModeContext);
};
export default useDarkContext;
