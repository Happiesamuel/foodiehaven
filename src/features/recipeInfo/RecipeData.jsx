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
import {
  FaBookmark,
  FaHandPointRight,
  FaRegBookmark,
  FaRegClock,
} from "react-icons/fa";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";
import { useBookmark } from "../bookmark/useBookmark";
import { useDeleteBookmark } from "../bookmark/useDeleteBookmark";
import toast from "react-hot-toast";
import { useAddBookmark } from "../bookmark/useAddBookmark";
import Undefined from "../../ui/Undefined";
import { useEffect } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "../authentication/useUser";

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
    color: var(--color-deep-text);

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
    font-size: 15px;
    font-style: italic;
    font-family: "Akaya Kanadaka", system-ui;
    padding: 10px;
    @media (${device.laptop}) {
      font-size: 18px;
      padding: 20px;
    }
    color: var(--color-ash-text);
  `;
  const Details = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: var(--color-sidebar);
    margin: 8px 0;
    padding: 15px;
    gap: 10px;
  `;
  const Footer = styled.footer`
    background: linear-gradient(to bottom right, #4ade80, #039235);
    padding: 15px;
    margin-top: 15px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    & button {
      margin: 0 15px;
      & a {
        color: #fff;
      }
    }
  `;
  const { recipe, isLoading } = useCheckInRecipe();
  const { isLoadingSimilarRecipe, similarRecipe } = useCheckInSimilarRecipe();
  const { bookmark, isLoading: isLoadingBookmark } = useBookmark();
  const { user } = useUser();
  const { deleteBookmark, status: deletingStatus } = useDeleteBookmark();
  const { addBookmark, status: addingStatus } = useAddBookmark();
  useEffect(
    function () {
      document.title =
        isLoading || isLoadingSimilarRecipe || isLoadingBookmark
          ? "Foodie Haven"
          : `${recipe.title}`;
      return () => (document.title = "Foodie Haven");
    },
    [recipe, isLoading, isLoadingSimilarRecipe, isLoadingBookmark]
  );

  if (isLoading || isLoadingSimilarRecipe || isLoadingBookmark)
    return <Spinner />;
  if (recipe === undefined) return <Undefined />;

  const {
    image,
    title,
    extendedIngredients,
    analyzedInstructions,
    pricePerServing,
    readyInMinutes,
    servings,
    sourceUrl,
    summary,
    id,
  } = recipe;
  const { custom } = user?.user_metadata || user.user.user_metadata;
  const titleSplit = title.split(" ");
  const arr = Math.floor(titleSplit.length / 2);
  const titleArr = Array.from({ length: 4 }).map((x, i) => {
    const a = titleSplit.slice(i * arr, arr * (i + 1));
    if (a.length === 0) return null;
    else return a.join(" ");
  });
  const titles = titleArr.filter((x) => x !== null);

  const isBookmarked = bookmark.some((book) => book.bookmarkId === id);
  const summarizedRecipe = summary.replace(/(<([^>]+)>)/gi, "");
  function handleAddBookmark(recipe) {
    const newRecipe = {
      ...recipe,
      custom,
      price: Math.random() * 75 + 1,
    };

    addBookmark(newRecipe, {
      onSuccess: () => {
        toast.success(`${title} is added to your bookmarks`);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  }

  function handleDeleteBookmark(id) {
    deleteBookmark(id, {
      onSuccess: () => {
        toast.success(`${title} is removed from your bookmarks`);
      },
    });
  }
  return (
    <StyledRecipeData>
      <Image src={image} />
      <TitleContent>
        {titleSplit.length <= 5 ? (
          <Title>{title}</Title>
        ) : (
          titles.map((title, i) => <Title key={i}>{title}</Title>)
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

        <Servings>
          {addingStatus === "pending" || deletingStatus === "pending" ? (
            <SpinnerMini color="yellow" />
          ) : isBookmarked ? (
            <FaBookmark
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteBookmark(id)}
            />
          ) : (
            <FaRegBookmark
              style={{ cursor: "pointer" }}
              onClick={() => handleAddBookmark(recipe)}
            />
          )}
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

      {similarRecipe.length !== 0 && (
        <div>
          <SimilarContainer
            title={title}
            data={similarRecipe}
            render={(result) => (
              <SimilarDetails result={result} key={result.id} />
            )}
          />
        </div>
      )}

      <Footer>
        <span>
          For more infomation on {title} recipe check out our website{"   "}
        </span>
        <Button size="medium" type="secondary">
          <Link to={sourceUrl}>
            <FaHandPointRight />
          </Link>
        </Button>
      </Footer>
    </StyledRecipeData>
  );
}

export default RecipeData;
