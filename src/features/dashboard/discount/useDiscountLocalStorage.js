import { useEffect, useState } from "react";

export function useDiscountLocalStorage(state, key) {
  const [seconds, setSeconds] = useState(function () {
    const a = localStorage.getItem(key);
    return a ? JSON.parse(a) : state;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );
  return [seconds, setSeconds];
}
