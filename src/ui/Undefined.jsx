import { CiWifiOff } from "react-icons/ci";
import styled from "styled-components";

function Undefined() {
  const StyledUndefined = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    padding: 15px 0;
    & h1,
    p {
      color: var(--color-ash-text);
    }
    & svg {
      font-size: 60px;
      background: #fff;
      border-radius: 100%;
      padding: 10px;
    }
    & span {
      background: linear-gradient(to bottom right, #4ade80, #039235);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  return (
    <StyledUndefined>
      <div>
        <CiWifiOff />
      </div>
      <h1>Check Your internet connection</h1>
      <div style={{ textAlign: "center" }}>
        <p>{`Something went wrong`}</p>
      </div>
    </StyledUndefined>
  );
}

export default Undefined;
