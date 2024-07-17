import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { device } from "../mediaSizes";

function Preloader() {
  const StyledPreloader = styled.div`
    background: #0f172a;
    height: 100vh;
    .loading {
      display: flex;
      gap: 10px;
    }
    .wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .text {
      color: #fbae17;
      font-size: 20px;
      font-weight: 600;
      display: inline-block;
      margin-left: 5px;
      margin-right: 3px;
      @media (${device.tablet}) {
        margin-left: 10px;
        margin-right: 8px;
      }
    }

    .bounceball {
      position: relative;
      display: inline-block;
      height: 37px;
      width: 15px;
      &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fbae17;
        transform-origin: 50%;
        animation: bounce 500ms alternate infinite ease;
      }
    }

    @keyframes bounce {
      0% {
        top: 15px;
        height: 5px;
        border-radius: 60px 60px 20px 20px;
        transform: scaleX(2);
      }
      35% {
        height: 15px;
        border-radius: 50%;
        transform: scaleX(1);
      }
      100% {
        top: 0;
      }
    }
  `;

  return (
    <>
      <GlobalStyle />
      <StyledPreloader>
        <div className="wrap">
          <div className="loading">
            <div className="bounceball"></div>
            <div className="text">FOODIE HAVEN</div>
            <div className="bounceball"></div>
          </div>
        </div>
      </StyledPreloader>
    </>
  );
}

export default Preloader;
