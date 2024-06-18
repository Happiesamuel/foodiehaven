import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useCheckInRecipe } from "../checkInRecipe/useCheckInRecipe";
import { useCheckInSimilarRecipe } from "../checkInRecipe/useCheckInSimilarRecipe";
import SimilarDetails from "./similarRecipe/SimilarDetails";
import SimilarContainer from "./similarRecipe/SimilarContainer";
import { device } from "../../mediaSizes";

function RecipeData() {
  const StyledRecipeData = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
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
    transform: rotate(-5deg);
    position: absolute;
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
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `;
  const { recipe, isLoading } = useCheckInRecipe();
  const { isLoadingSimilarRecipe, similarRecipe } = useCheckInSimilarRecipe();
  // const ids = similarRecipe?.map((recipeId) => recipeId.id);

  if (isLoading || isLoadingSimilarRecipe) return <Spinner />;

  console.log(recipe);

  const { image, title } = recipe;
  const titleSplit = title.split(" ");
  const titleArr = Array.from(
    { length: Math.ceil(titleSplit.length / 4) },
    (v, i) => i + 1
  ).map((x) => [
    titleSplit
      .slice((x - 1) * 4, Math.ceil(titleSplit.length / 2) * x)
      .join(" "),
  ]);

  return (
    <StyledRecipeData>
      <Image src={image} />
      <TitleContent>
        {titleArr.map((first) =>
          first.map((x, i) => <Title key={i}>{x}</Title>)
        )}
      </TitleContent>
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
