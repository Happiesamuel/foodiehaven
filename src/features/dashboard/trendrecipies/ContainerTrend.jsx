import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../../mediaSizes";
function ContainerTrend({ data, render }) {
  const StyledContainerTrend = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    /* justify-content: space-evenly; */
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
  return <StyledContainerTrend>{data.map(render)}</StyledContainerTrend>;
}
ContainerTrend.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerTrend;
