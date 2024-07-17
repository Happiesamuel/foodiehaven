import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../../mediaSizes";
function ExtendedIngredientsContainer({ data, render }) {
  const ExtendedIngredientContainer = styled.div`
    padding: 16px 10px;
    @media (${device.tablet}) {
      padding: 16px 30px;
    }

    & p {
      font-size: 18px;
      font-weight: bold;
      color: var(--color-deep-text);
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
  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1.2fr 1.2fr 1fr 1fr 0.5fr;
    padding-bottom: 10px;
    @media (${device.tablet}) {
      padding-bottom: 20px;
    }
    gap: 6px;
    font-weight: bold;
    & div {
      color: var(--color-deep-text);
      font-size: 12px;

      @media (${device.tablet}) {
        font-size: 18px;
      }
    }
    border-bottom: 1px solid var(--color-line);
  `;
  const Render = styled.div`
    @media (${device.tablet}) {
    }
    @media (${device.laptop}) {
    }
  `;
  return (
    <ExtendedIngredientContainer>
      <StyledGrid>
        <div></div>
        <div>AISLE</div>
        <div>NAME</div>
        <div>STATE</div>
        <div>QUANTITY</div>
        <div>MEASUREMENT</div>
      </StyledGrid>
      <div>
        <Render>{data.map(render)}</Render>
      </div>
    </ExtendedIngredientContainer>
  );
}
ExtendedIngredientsContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ExtendedIngredientsContainer;
