import AboutButton from "./AboutButton";
import ContainerButton from "./ContainerButton";
import RecipeRow from "./RecipeRow";
import Recipies from "./Recipies";

import {
  MdOutlineDinnerDining,
  MdOutlineEmojiFoodBeverage,
  MdOutlineFreeBreakfast,
  MdOutlineLunchDining,
} from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";
import { LuCookie } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { PiBowlFoodThin } from "react-icons/pi";
import useAboutFood from "./useAboutFood";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import Error from "../../ui/Error";
import Undefined from "../../ui/Undefined";

function AboutDetails() {
  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 280px);
  `;
  const [getId, setGetId] = useState(0);

  const { isLoadingAbout, aboutData, error } = useAboutFood();

  if (isLoadingAbout)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  if (aboutData === undefined) return <Undefined />;
  if (error) return <Error error={error} />;
  const recipies = aboutData.map((data) => {
    return {
      id: data.id,
      image: data.image,
      name: data.name,
      mealType: data.mealType,
      rating: data.rating,
      servings: data.servings,
      reviewCount: data.reviewCount,
      prepTimeMinutes: data.prepTimeMinutes,
      ingredients: data.ingredients,
      difficulty: data.difficulty,
    };
  });
  function getCurrentId(id) {
    setGetId(id);
  }
  const buttons = [
    {
      name: "All",
      id: 0,
      svg: <FaBorderAll />,
    },
    {
      name: "Breakfast",
      id: 1,
      svg: <MdOutlineFreeBreakfast />,
    },
    {
      name: "Dinner",
      id: 2,
      svg: <MdOutlineDinnerDining />,
    },
    {
      name: "Lunch",
      id: 3,
      svg: <MdOutlineLunchDining />,
    },
    {
      name: "Snack",
      id: 4,
      svg: <LuCookie />,
    },
    {
      name: "Side Dish",
      id: 5,
      svg: <BiDish />,
    },
    {
      name: "Appetizer",
      id: 6,
      svg: <PiBowlFoodThin />,
    },
    {
      name: "Beverage",
      id: 7,
      svg: <MdOutlineEmojiFoodBeverage />,
    },
  ];

  const currentButton = buttons?.find((button) => button.id === getId)?.name;
  const currentRecipe =
    currentButton === "All"
      ? recipies
      : recipies.filter((recipe) => recipe.mealType.includes(currentButton));
  console.log(error);

  return (
    <>
      <ContainerButton
        render={(button) => (
          <AboutButton
            key={button.id}
            button={button}
            getId={getId}
            onClick={() => getCurrentId(button.id)}
          />
        )}
        data={buttons}
      />
      <Recipies
        data={currentRecipe}
        render={(recipe) => <RecipeRow recipe={recipe} key={recipe.id} />}
      />
    </>
  );
}

export default AboutDetails;
