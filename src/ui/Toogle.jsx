import { FaBars } from "react-icons/fa";
import styled, { css } from "styled-components";
import { device } from "../mediaSizes";
import { useToogle } from "../context/ToogleContext";
import { FaXmark } from "react-icons/fa6";

function Toogle() {
  const StyledToogle = styled.div`
    color: #fff;
    border-radius: 100%;
    padding: 20px;
    cursor: pointer;
    position: fixed;
    background-color: #e31818;
    top: 86%;
    left: 85%;
    z-index: 1000;
    transition: all 0.5s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    ${({ active }) =>
      active &&
      css`
        background: #039235;
      `}
    &:hover {
      padding: 22px;
      transform: rotate(360deg);
      background: #cc971b;
      ${({ active }) =>
        active &&
        css`
          background: #e31818;
        `}
    }
    @media ${device.laptop} {
      display: none;
    }

    & svg {
      font-weight: 900;
    }
  `;
  const { show, isShowToogle } = useToogle();
  return (
    <StyledToogle active={isShowToogle} onClick={() => show()}>
      {isShowToogle ? <FaXmark /> : <FaBars />}
    </StyledToogle>
  );
}

export default Toogle;
