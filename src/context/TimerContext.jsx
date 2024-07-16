import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const Timer = createContext();
function TimerContext({ children }) {
  const [seconds, setSeconds] = useState(86400);
  useEffect(function () {
    const a = setInterval(function () {
      setSeconds((seconds) => (seconds < 1 ? 86400 : seconds - 1));

      //   hour = Math.floor(seconds / 3600);
      //   min = Math.floor((seconds % 3600) / 60);
      //   sec = seconds % 60;
    }, 1000);
    return function () {
      clearInterval(a);
    };
  }, []);
  console.log(seconds);
  return <Timer.Provider value={{ seconds }}>{children}</Timer.Provider>;
}
function useTimer() {
  const context = useContext(Timer);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

TimerContext.propTypes = {
  children: PropTypes,
};
export { TimerContext, useTimer };
