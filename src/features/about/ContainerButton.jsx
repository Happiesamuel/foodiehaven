import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../mediaSizes";
function ContainerButton({ data, render }) {
  const StyledContainerButtons = styled.div`
    display: inline;
    justify-content: space-evenly;
    padding: 30px 0 80px 0;
    align-items: center;
    gap: 10px;
    line-height: 3;
    @media ${device.tablet} {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      line-height: 1.1;
    }
    @media ${device.laptop} {
      /* line-height: 1.1; */
    }
  `;
  return <StyledContainerButtons>{data.map(render)}</StyledContainerButtons>;
}
ContainerButton.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerButton;
