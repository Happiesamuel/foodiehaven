import PropTypes from "prop-types";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../features/hooks/useLocalstorage";
import { useLocalId } from "../features/hooks/useLocalId";
const Darkmode = createContext();
function DarkmodeContext({ children }) {
  const [id, setId] = useLocalId(0, "id");
  console.log(id);
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

      if (id === 2) document.documentElement.classList.add("darkmode");
      if (id === 1) document.documentElement.classList.remove("darkmode");

      return function () {
        document.documentElement.classList.remove("darkmode");
      };
    },
    [isDarkmode, id]
  );
  return (
    <Darkmode.Provider value={{ setDarkmode, isDarkmode, id, setId }}>
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
