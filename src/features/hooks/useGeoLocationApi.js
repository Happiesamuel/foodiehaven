import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../service/apiGeocoding";
import { useEffect, useState } from "react";

export function useAdrress() {
  const [position, setPosition] = useState({});
  function getPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  useEffect(function () {
    async function getLocation() {
      const obj = await getPosition();
      const positionObj = {
        latitude: obj.coords.latitude,
        longitude: obj.coords.longitude,
      };
      setPosition(positionObj);
    }
    getLocation();
  }, []);
  const { data: address, isLoading } = useQuery({
    queryKey: ["address"],
    queryFn: () => getAddress(position),
  });
  return { address, isLoading };
}
