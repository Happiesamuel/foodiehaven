import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
const Toogle = createContext();
function ToogleContext({ children }) {
  const [isShowToogle, setIsShowToogle] = useState(false);
  function show() {
    setIsShowToogle(!isShowToogle);
  }
  return (
    <Toogle.Provider value={{ show, isShowToogle }}>{children}</Toogle.Provider>
  );
}
function useToogle() {
  const context = useContext(Toogle);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

ToogleContext.propTypes = {
  children: PropTypes,
};
export { ToogleContext, useToogle };
