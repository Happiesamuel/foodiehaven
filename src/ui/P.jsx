import styled, { css } from "styled-components";

const P = styled.p`
  color: #049035;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 5px;
  font-family: "Mulish", sans-serif;
  ${({ type }) =>
    type === "black" &&
    css`
      font-family: "Outfit", sans-serif;
      font-weight: 500;
      color: #151515;
      text-transform: lowercase;
    `}
`;
export default P;
