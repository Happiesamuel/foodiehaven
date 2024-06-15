import styled, { css } from "styled-components";
import { device } from "../mediaSizes";

const size = {
  small: css`
    font-size: 10px;
    padding: 2px 10px;
    font-weight: bold;
    border-radius: 5px;
    & svg {
      font-size: 15px;
      text-align: center;
    }
  `,
  button: css`
    font-size: 10px;
    padding: 10px 10px 8px;
    border-radius: 5px;
    border-radius: 100%;
    text-align: center;
    & svg {
      font-size: 10px;
      text-align: center;
    }
  `,
  medium: css`
    font-size: 12px;
    padding: 8px 30px;
    border-radius: 8px;
    font-weight: bold;

    padding: 8px 15px;
    @media ${device.tablet} {
      padding: 8px 15px;
      font-size: 15px;
    }
  `,
};
const type = {
  primary: css`
    background: #008e44;
    &:hover {
      background-color: #04b75b;
    }
  `,
  secondary: css`
    background: #cc971b;
    &:hover {
      background-color: #d1a84a;
    }
  `,
  danger: css`
    background: #b70908;
    &:hover {
      background-color: #e31818;
    }
  `,
};
export const Button = styled.button`
  border: none;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: all 0.5s;
  font-family: "Outfit", sans-serif;

  ${(props) => size[props.size]}
  ${(props) => type[props.type]}
`;
