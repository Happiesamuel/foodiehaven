import { useEffect, useRef } from "react";

export default function useClick(close) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      document.addEventListener("click", handleClick);

      return function () {
        document.removeEventListener("click", handleClick);
      };
    },
    [close]
  );
  return ref;
}
