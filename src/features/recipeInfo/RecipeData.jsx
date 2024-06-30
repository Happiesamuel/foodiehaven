import styled, { css } from "styled-components";
import Spinner from "../../ui/Spinner";
import { useCheckInRecipe } from "../checkInRecipe/useCheckInRecipe";
import { useCheckInSimilarRecipe } from "../checkInRecipe/useCheckInSimilarRecipe";
import SimilarDetails from "./similarRecipe/SimilarDetails";
import SimilarContainer from "./similarRecipe/SimilarContainer";
import { device } from "../../mediaSizes";
import ExtendedIngredientsContainer from "./extendedIngredients/ExtendedIngredientsContainer";
import ExtendedIngredients from "./extendedIngredients/ExtendedIngredients";
import InstructionsContainer from "./instructions/InstructionsContainer";
import InstructionDetails from "./instructions/InstructionDetails";
import { LuUsers2 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";

function RecipeData() {
  const StyledRecipeData = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
  `;
  const Servings = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    & svg {
      color: #008e44;
    }
    ${({ type }) =>
      type === "price" &&
      css`
        color: #e31818;
        font-weight: bold;
      `}
  `;
  const Image = styled.img`
    width: 100%;
    height: 20%;
    @media (${device.laptop}) {
      height: 40%;
    }
  `;
  const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    /* transform: rotate(-5deg); */
    /* position: absolute; */
    left: 0;
    top: 18%;
    right: 0;
    @media (${device.laptop}) {
      top: 35%;
    }
  `;

  const Title = styled.h1`
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    @media (${device.laptop}) {
      font-size: 25px;
      padding: 10px 10px;
    }
    font-family: "Akaya Kanadaka", system-ui;
    text-align: center;
    width: max-content;
    text-transform: uppercase;
    padding: 5px;
    background: linear-gradient(to bottom right, #4ade80, #039235);
  `;
  const Summary = styled.div`
    font-size: 18px;
    font-style: italic;
    font-family: "Akaya Kanadaka", system-ui;
    padding: 10px;
    @media (${device.laptop}) {
      padding: 20px;
    }
    color: #1d1c1c;
  `;
  const Details = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #fff;
    margin: 8px 0;
    padding: 15px;
    gap: 10px;
  `;
  const { recipe, isLoading } = useCheckInRecipe();
  const { isLoadingSimilarRecipe, similarRecipe } = useCheckInSimilarRecipe();

  if (isLoading || isLoadingSimilarRecipe) return <Spinner />;

  const {
    image,
    title,
    extendedIngredients,
    analyzedInstructions,
    pricePerServing,
    readyInMinutes,
    sourceName,
    servings,
    sourceUrl,
    summary,
  } = recipe;

  const titleSplit = title.split(" ");
  const titleArr = Array.from(
    { length: Math.ceil(titleSplit.length / 4) },
    (v, i) => i + 1
  ).map((x) => [
    titleSplit
      .slice((x - 1) * 4, Math.ceil(titleSplit.length / 2) * x)
      .join(" "),
  ]);

  console.log(sourceName, sourceUrl);
  const summarizedRecipe = summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <StyledRecipeData>
      <Image src={image} />
      <TitleContent>
        {titleArr.map((first) =>
          first.map((x, i) => <Title key={i}>{x}</Title>)
        )}
      </TitleContent>
      <Summary>{summarizedRecipe}</Summary>

      <Details>
        <Servings>
          <LuUsers2 />

          <span>{servings + " servings"}</span>
        </Servings>
        <Servings type="price">{"$" + pricePerServing}</Servings>

        <Servings>
          <FaRegClock />
          <span>{readyInMinutes + "mins"}</span>
        </Servings>
      </Details>
      <div>
        <ExtendedIngredientsContainer
          render={(ingredients, i) => (
            <ExtendedIngredients
              ingredients={ingredients}
              i={i}
              key={ingredients.id}
            />
          )}
          data={extendedIngredients}
        />
      </div>

      <div>
        <InstructionsContainer
          title={title}
          render={(instructions) => (
            <InstructionDetails
              instructions={instructions}
              key={instructions.id}
            />
          )}
          data={analyzedInstructions.at(0).steps}
        />
      </div>

      <div>
        <SimilarContainer
          title={title}
          data={similarRecipe}
          render={(result) => (
            <SimilarDetails result={result} key={result.id} />
          )}
        />
      </div>
    </StyledRecipeData>
  );
}

export default RecipeData;
