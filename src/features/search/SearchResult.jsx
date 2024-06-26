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
function SearchResult({ result }) {
  const Image = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 100%;
    position: absolute;
    left: 25%;
    top: -50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
  `;
  const Price = styled.p`
    color: #b70908;
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
    color: #242323;
    text-align: left;
  `;
  const { image, title, price, description, id } = result;
  const { setSearchData } = useSearch();
  const { isCreating, addBookmark } = useAddBookmark();
  const { bookmark, isLoading } = useBookmark();
  const [bookmarking, setBookmarking] = useState(
    bookmark ? bookmark.map((x) => x.bookmarkId).includes(id) : false
  );

  function handleBookmark({ image, title, description, price, id }) {
    const createBookmark = { image, title, description, price, id };
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
      <Image src={image} />
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
            <SpinnerMini />
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
