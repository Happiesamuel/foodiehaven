import PropTypes from "prop-types";
import styled from "styled-components";
function CartContainer({ data, render }) {
  const StyledCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0;
    align-items: center;
  `;
  return <StyledCartContainer>{data.map(render)}</StyledCartContainer>;
}
CartContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default CartContainer;
