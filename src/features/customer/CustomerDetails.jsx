// import styled from "styled-components";
import styled from "styled-components";
import { SLICE_MULTIPLE, SLICE_TO } from "../../helper";
import Spinner from "../../ui/Spinner";
import useAboutFood from "../about/useAboutFood";
import Comment from "./Comment";
import CommentLayout from "./CommentLayout";
import useCustomers from "./useCustomers";
import Error from "../../ui/Error";

function CustomerDetails() {
  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 380px);
  `;
  const { isLoadingCustomer, customers, error } = useCustomers();
  const { isLoadingAbout, aboutData } = useAboutFood();
  if (isLoadingCustomer || isLoadingAbout)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  if (error) return <Error error={error} />;

  const users = customers.map((data) => {
    return {
      id: data.id,
      image: data.image,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.address.city,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam commodi, ab maiores, est maxime dolores repellendus vero beatae atque omnis fuga incidunt facere sapiente reiciendis quod accusantium assumenda! Consequuntur?",
    };
  });
  const recipies = aboutData.map((data) => {
    return {
      userId: data.userId,
      image: data.image,
      rating: data.rating,
    };
  });

  const comments = recipies.map((recipe) => {
    const userRecipe = users.filter((user) => recipe.userId === +user.id);
    return [
      { ...userRecipe.at(0), photo: recipe.image, rating: recipe.rating },
    ];
  });

  const sliceComments = Math.floor(Math.random() * SLICE_MULTIPLE) + 1;
  const sliceArr = comments
    .flat()
    .slice(sliceComments, sliceComments + SLICE_TO);
  return (
    <CommentLayout
      data={sliceArr}
      render={(comment) => <Comment key={comment.id} comment={comment} />}
    />
  );
}

export default CustomerDetails;
