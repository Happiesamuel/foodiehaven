import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDiscountLocalStorage } from "./useDiscountLocalStorage";

function DiscountTime() {
  const StyledDiscountTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
      font-size: 18px;
      color: var(--color-deep-text);
    }
    & p {
      color: var(--color-ash-text);
      font-weight: 400;
      font-size: 15px;
      & span {
        color: #e31818;
        font-weight: bold;
      }
    }
  `;
  const [seconds, setSeconds] = useDiscountLocalStorage(86400, "timer");
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(
    function () {
      const a = setInterval(function () {
        setSeconds((seconds) => (seconds < 1 ? 86400 : seconds - 1));
        setHour(Math.floor(seconds / 3600));
        setMin(Math.floor((seconds % 3600) / 60));
        setSec(seconds % 60);
      }, 1000);
      return function () {
        clearInterval(a);
      };
    },
    [seconds, setSeconds, setHour, setMin]
  );
  return (
    <StyledDiscountTime>
      <h1>Special Discount Today</h1>
      <p>
        Ends in{" "}
        <span>
          <span>{hour < 10 ? `0${hour}` : hour}</span>:
          <span>{min < 10 ? `0${min}` : min}</span>:
          <span>{sec < 10 ? `0${sec}` : sec}</span>
        </span>
      </p>
    </StyledDiscountTime>
  );
}

export default DiscountTime;
