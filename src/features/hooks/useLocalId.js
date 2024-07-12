import { useEffect, useState } from "react";

export function useLocalId(initialValue, key) {
  const [id, setId] = useState(function () {
    const val = localStorage.getItem(key);
    return val ? +JSON.parse(val) : initialValue;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(id));
    },
    [id, key]
  );
  return [id, setId];
}
