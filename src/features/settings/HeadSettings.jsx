import styled from "styled-components";
import { device } from "../../mediaSizes";

const HeadSettings = styled.h1`
  background-color: var(--color-sidebar);
  color: var(--color-ash-text);
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 18px;
  @media ${device.tablet} {
    font-size: 25px;
    padding: 3px 20px;
  }
`;
export default HeadSettings;
