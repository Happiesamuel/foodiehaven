import styled from "styled-components";
import { device } from "../../mediaSizes";

const GridDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  row-gap: 15px;
  column-gap: 15px;
  margin-top: 30px;

  @media ${device.tablet} {
    grid-template-columns: auto auto auto;
  }
  @media ${device.laptop} {
    /* column-gap: 100px; */
    grid-template-columns: auto auto auto auto;
  }
`;
export default GridDashboardLayout;
