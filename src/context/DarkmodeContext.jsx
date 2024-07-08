import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const Darkmode = createContext();
function DarkmodeContext({ children }) {
  const [isDarkmode, setIsDarkmode] = useState(false);
  function setDarkmode() {
    setIsDarkmode(!isDarkmode);
  }
  console.log(isDarkmode);

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
    <Darkmode.Provider value={{ setDarkmode, isDarkmode }}>
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
