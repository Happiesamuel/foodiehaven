import styled from "styled-components";
import { device } from "../../mediaSizes";

const GridDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 30px;
  column-gap: 20px;
  margin-top: 30px;

  @media ${device.tablet} {
    grid-template-columns: auto auto auto;
  }
  @media ${device.laptop} {
    column-gap: 100px;
    grid-template-columns: auto auto auto auto;
  }
`;
export default GridDashboardLayout;
