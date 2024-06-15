import styled, { css } from "styled-components";
import { device } from "../mediaSizes";

const StyledRecipeLayout = styled.div`
  background: #fff;
  width: 100%;
  height: max-content;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.5s;
  padding: 10px;
  cursor: pointer;
  position: relative;
  & a {
    color: white;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  ${({ overflow }) =>
    overflow === "hidden" &&
    css`
      overflow: hidden;
    `};
  &:hover {
    transform: scale(1.1);
  }
`;
export default StyledRecipeLayout;
