import PropTypes from "prop-types";
import styled from "styled-components";
import { FaHeart, FaRegClock } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import RatedStar from "../../ui/RatedStar";
import StyledRecipeLayout from "../../ui/StyledRecipeLayout";

function RecipeRow({ recipe }) {
  const {
    rating,
    image,
    name,
    ingredients,
    servings,
    prepTimeMinutes,
    difficulty,
  } = recipe;
  //   console.log(recipe);

  const Image = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 100%;
    position: absolute;
    left: 30%;
    top: -50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `;
  const Context = styled.div`
    padding: 100px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: left;
  `;
  const FoodName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & svg {
      color: #e31818;
    }
  `;
  const Name = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: var(--color-deep-text);
  `;

  const Ingredients = styled.div`
    display: inline;
    font-style: italic;
    color: var(--color-ash-text);
  `;
  const Servings = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #008e44;
  `;
  const AllPrep = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  `;
  const Difficulty = styled.p`
    font-size: 15px;
    color: #008e44;
  `;

  return (
    <StyledRecipeLayout>
      <Image src={image} />

      <Context>
        <FoodName>
          <Name>{name}</Name>
          <FaHeart />
        </FoodName>
        <RatedStar rating={rating} />
        <Ingredients>{ingredients.join(", ")}</Ingredients>
        <AllPrep>
          <Difficulty>{difficulty}</Difficulty>

          <Servings>
            <span>{servings}</span>
            <LuUsers2 />
          </Servings>

          <Servings>
            <FaRegClock />
            <span>{prepTimeMinutes + "mins"}</span>
          </Servings>
        </AllPrep>
      </Context>
    </StyledRecipeLayout>
  );
}
RecipeRow.propTypes = {
  recipe: PropTypes,
};
export default RecipeRow;
