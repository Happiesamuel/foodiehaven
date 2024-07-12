import { useEffect, useState } from "react";

export function useLocalStorage(initialValue, key) {
  const [isDarkmode, setIsdarkmode] = useState(function () {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : initialValue;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(isDarkmode));
    },
    [isDarkmode, key]
  );
  return [isDarkmode, setIsdarkmode];
}
