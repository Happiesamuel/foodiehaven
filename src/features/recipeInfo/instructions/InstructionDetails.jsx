import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../../mediaSizes";
function InstructionDetails({ instructions }) {
  const StyledInstructionDetails = styled.div`
    background: var(--color-sidebar);
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  `;
  const Step = styled.p`
    color: #e31818;
    font-weight: bold;
    padding: 5px;
  `;
  const IngredientMix = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Ingredient = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 5px;
    gap: 10px;
    & p {
      font-weight: bold;
      text-transform: capitalize;
      color: var(--color-ash-text);
    }
  `;

  const IngredientMixes = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: 20px;
    @media (${device.laptop}) {
      gap: 60px;
      padding: 10px 30px;
    }
    & p {
      font-weight: bold;
      text-transform: capitalize;
      color: var(--color-ash-text);
    }
  `;
  const Title = styled.div`
    font-weight: bold;
    padding-bottom: 8px;
    color: var(--color-deep-text);
  `;

  const InstructionStep = styled.div`
    padding: 5px 15px;
    font-size: 15px;
    font-style: italic;
    color: var(--color-ash-text);
  `;
  return (
    <StyledInstructionDetails>
      <Step>Step {instructions.number}</Step>
      <IngredientMixes>
        {instructions.ingredients.length !== 0 && (
          <IngredientMix>
            <Title>Ingredients: </Title>
            <div>
              {instructions.ingredients.map((x) => (
                <Ingredient key={x.id}>
                  <img src={x.image} />
                  <p>{x.name}</p>
                </Ingredient>
              ))}
            </div>
          </IngredientMix>
        )}
        {instructions.equipment.length !== 0 && (
          <IngredientMix>
            <Title>Equipments: </Title>
            <div>
              {" "}
              {instructions.equipment?.map((x) => (
                <div key={x.id}>
                  <img src={x.image} />
                  <p>{x.name}</p>
                </div>
              )) ?? ""}
            </div>
          </IngredientMix>
        )}
      </IngredientMixes>
      <InstructionStep>{instructions.step}</InstructionStep>
    </StyledInstructionDetails>
  );
}

export default InstructionDetails;

InstructionDetails.propTypes = {
  instructions: PropTypes,
};
