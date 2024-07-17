import styled, { css } from "styled-components";
import { device } from "../mediaSizes";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: space-evenly;
  row-gap: 15px;
  column-gap: 20px;
  margin-top: 80px;
  ${({ type }) =>
    type === "customer"
      ? css`
          margin-top: 0;
        `
      : css`
          row-gap: 50px;
          column-gap: 20px;
          margin-top: 50px;
        `}

  @media ${device.tablet} {
    grid-template-columns: auto auto;
  }
  @media ${device.laptop} {
    margin-top: 0px;
    column-gap: 100px;
    row-gap: 50px;
    grid-template-columns: auto auto auto;
  }
`;
export default StyledLayout;
