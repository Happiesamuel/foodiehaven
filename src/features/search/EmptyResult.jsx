import styled from "styled-components";
import { device } from "../../mediaSizes";
import PropTypes from "prop-types";

function EmptyResult({ query }) {
  const StyledEmptyResult = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 40%;
    @media ${device.tablet} {
      top: 52%;
      left: 50%;
    }
    & p {
      color: #979595;
      font-weight: bold;
      font-size: 18px;
    }
  `;
  return (
    <StyledEmptyResult>
      <p>{`No results for "${query}"`}</p>
    </StyledEmptyResult>
  );
}
EmptyResult.propTypes = {
  query: PropTypes,
};

export default EmptyResult;
