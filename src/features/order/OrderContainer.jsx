import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../mediaSizes";

function OrderContainer({ data, render }) {
  const StyledOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;
    @media (${device.tablet}) {
      gap: 20px;
      margin: 15px 0;
    }
  `;
  return <StyledOrderContainer>{data.map(render)}</StyledOrderContainer>;
}
OrderContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default OrderContainer;
