import PropTypes from "prop-types";
import StyledRecipeLayout from "../../ui/StyledRecipeLayout";
import styled from "styled-components";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchResultContext";
import { useAddBookmark } from "../bookmark/useAddBookmark";
import toast from "react-hot-toast";
import { useBookmark } from "../bookmark/useBookmark";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "../authentication/useUser";
function SearchResult({ result }) {
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
    padding: 100px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: left;
    gap: 15px;
  `;
  const Title = styled.h6`
    font-weight: bold;
    font-size: 12px;
    color: var(--color-deep-text);
  `;
  const Price = styled.p`
    color: #e31818;
    font-weight: 900;
    font-size: 15px;
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Description = styled.div`
    font-size: 13px;
    font-style: italic;
    color: var(--color-ash-text);
    text-align: left;
  `;
  const { image, title, price, description, id } = result;
  const { setSearchData } = useSearch();
  const { isCreating, addBookmark } = useAddBookmark();
  const { bookmark, isLoading } = useBookmark();
  const { user } = useUser();
  const [bookmarking, setBookmarking] = useState(
    bookmark ? bookmark.map((x) => x.bookmarkId).includes(id) : false
  );
  const { custom } = user?.user_metadata || user.user.user_metadata;
  function handleBookmark({ image, title, description, price, id }) {
    const createBookmark = { image, title, description, price, id, custom };
    const booked = bookmark.map((x) => x.bookmarkId);
    if (!booked.includes(id)) {
      setBookmarking(true);

      addBookmark(createBookmark, {
        onSuccess: () => {
          toast.success(`You've successfully booked ${title}`);
        },
        onError: () => {
          toast.error(`Unable to book ${title}`);
        },
      });
    } else return toast.success(`${title} is already bookmarked`);
  }
  return (
    <StyledRecipeLayout>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <Context>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Content>
          <Price>{"$" + price.toFixed(2, 0)}</Price>
          <Button type="primary" size="small" onClick={() => setSearchData("")}>
            <Link to={`/recipe/${id}`}> View</Link>
            {/* View */}
          </Button>
        </Content>
        <Button
          type="secondary"
          size="medium"
          disabled={isCreating}
          onClick={() =>
            handleBookmark({ image, title, description, price, id })
          }
        >
          {isLoading ? (
            <SpinnerMini color="#04b75b" />
          ) : !bookmarking ? (
            " Bookmark"
          ) : (
            "Bookmarked"
          )}
        </Button>
      </Context>
    </StyledRecipeLayout>
  );
}
SearchResult.propTypes = {
  result: PropTypes,
};

export default SearchResult;
