import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const Menu = createContext();
function MenuContext({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(function () {
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    return function () {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return <Menu.Provider value={{ width }}>{children}</Menu.Provider>;
}
function useMenu() {
  const context = useContext(Menu);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

MenuContext.propTypes = {
  children: PropTypes,
};
export { MenuContext, useMenu };
