import styled from "styled-components";
import PropTypes from "prop-types";
function ContainerButton({ data, render }) {
  const StyledContainerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 30px 0 80px 0;
    align-items: center;
    gap: 10px;
  `;
  return <StyledContainerButtons>{data.map(render)}</StyledContainerButtons>;
}
ContainerButton.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerButton;
