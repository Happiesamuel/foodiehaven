import styled, { css } from "styled-components";
import { device } from "../../mediaSizes";

const StyledHomeContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: left; */
  padding: 0 40px;
  @media ${device.tablet} {
    gap: 20px;
    align-items: center;
  }
  @media ${device.laptop} {
    flex-direction: row;
    gap: 50px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  gap: 15px;
  padding-bottom: 50px;
  @media ${device.tablet} {
    gap: 30px;
    padding-bottom: 0px;
  }
  @media ${device.laptop} {
    gap: 30px;
  }
  @media ${device.desktop} {
    padding-right: 100px;
  }
`;
const P = styled.p`
  ${({ font }) =>
    font === "bold" &&
    css`
      text-transform: uppercase;
      color: #cc971b;
      font-weight: bold;
      font-size: 18px;
      @media ${device.tablet} {
        font-size: 20px;
      }
    `}
  ${({ font }) =>
    font === "light" &&
    css`
      color: #eeebeb;
      font-weight: light;
      font-size: 13px;
      @media ${device.tablet} {
        font-size: 15px;
      }
    `}
`;
const Spice = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;

  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 65px;
  }
  @media ${device.desktop} {
    font-size: 80px;
  }
`;

const Image = styled.img`
  display: none;
  width: 200px;
  @media ${device.tablet} {
    width: 300px;
  }
  @media ${device.laptop} {
    width: 500px;
  }
`;
const ImageWrap = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.laptop} {
    justify-content: right;
  }
`;

export { Spice, Image, P, Container, StyledHomeContent, ImageWrap };
