import PropTypes from "prop-types";
import { device } from "../../mediaSizes";
import styled from "styled-components";
import Menu from "../../context/Menu";

function OrdersContainer({ data, render }) {
  const StyledOrdersContainer = styled.div`
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
  return (
    <Menu>
      <StyledOrdersContainer>{data.map(render)}</StyledOrdersContainer>;
    </Menu>
  );
}
OrdersContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};

export default OrdersContainer;
