import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../../mediaSizes";
function SimilarContainer({ data, render, title }) {
  const StyledSimilarContainer = styled.div`
    background-color: #fff;
    padding: 30px;
    margin-top: 50px;

    & p {
      font-size: 18px;
      font-weight: bold;
      color: #1d1d1d;
      padding-bottom: 20px;
      line-height: 1;
      & span {
        font-style: italic;
        color: #b70908;
      }
    }
    & div {
      width: 100%;
    }
  `;
  const Render = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 20px;
    @media (${device.tablet}) {
      grid-template-columns: 1fr 1fr;
      padding-left: 50px;
    }
    @media (${device.laptop}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding-left: 50px;
    }
    gap: 40px;
  `;
  return (
    <StyledSimilarContainer>
      <p>
        Ingredients similar to <span>{title}</span>
      </p>
      <div>
        <Render>{data.map(render)}</Render>
      </div>
    </StyledSimilarContainer>
  );
}
SimilarContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
  title: PropTypes,
};
export default SimilarContainer;
