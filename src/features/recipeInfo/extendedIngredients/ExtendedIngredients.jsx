import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../../mediaSizes";

function ExtendedIngredients({ ingredients, i }) {
  const StyledGrid = styled.div`
    display: grid;
    border-bottom: 1px solid var(--color-line);
    padding: 10px 0;
    grid-template-columns: 0.2fr 1.2fr 1.2fr 1fr 1fr 0.5fr;
    gap: 6px;
    font-size: 14px;
    & div {
      color: var(--color-ash-text);
    }
    &:last-child {
      border: 0px solid transparent;
    }
    @media (${device.tablet}) {
      grid-template-columns: 0.2fr 1.2fr 1.2fr 1fr 1fr 0.5fr;
      padding: 20px 0;
      gap: 10px;

      font-size: 15px;
    }
  `;
  const {
    aisle,
    consistency,
    originalName,
    measures: { us },
    unit,
  } = ingredients;

  return (
    <StyledGrid>
      <div>{i + 1 + "."}</div>
      <div>{aisle}</div>
      <div>{originalName}</div>
      <div>{consistency}</div>
      <div>
        {us.amount} {us.unitLong}
      </div>
      <div>{unit ? unit : "-"}</div>
    </StyledGrid>
  );
}
ExtendedIngredients.propTypes = {
  ingredients: PropTypes,
  i: PropTypes,
};
export default ExtendedIngredients;
