import PropTypes from "prop-types";
import styled from "styled-components";
import { FaHeart, FaRegClock } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import RatedStar from "../../ui/RatedStar";
import StyledRecipeLayout from "../../ui/StyledRecipeLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    position: absolute;
    width: 100%;
    top: -50px;

    & img {
      width: 100px;
      border-radius: 100%;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  `;

  const Context = styled.div`
    padding: 60px 10px 10px 10px;
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
    font-size: 16px;
    font-weight: bold;
    color: var(--color-deep-text);
  `;

  const Ingredients = styled.div`
    display: inline;
    font-style: italic;
    color: var(--color-ash-text);
    font-size: 14px;
  `;
  const Servings = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #008e44;
    font-size: 12px;
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledRecipeLayout data-aos="fade-up">
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
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
