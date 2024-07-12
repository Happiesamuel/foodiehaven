import PropTypes from "prop-types";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../features/hooks/useLocalstorage";
const Darkmode = createContext();
function DarkmodeContext({ children }) {
  const [isDarkmode, setIsDarkmode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkmode"
  );
  function setDarkmode() {
    setIsDarkmode(!isDarkmode);
  }
  useEffect(
    function () {
      if (isDarkmode) {
        document.documentElement.classList.add("darkmode");
      }

      return function () {
        document.documentElement.classList.remove("darkmode");
      };
    },
    [isDarkmode]
  );
  return (
    <Darkmode.Provider value={{ setDarkmode, isDarkmode, setIsDarkmode }}>
      {children}
    </Darkmode.Provider>
  );
}
function useDarkmode() {
  const context = useContext(Darkmode);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

DarkmodeContext.propTypes = {
  children: PropTypes,
};
export { DarkmodeContext, useDarkmode };
