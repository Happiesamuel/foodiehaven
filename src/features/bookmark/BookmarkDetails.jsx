import PropTypes from "prop-types";
import styled from "styled-components";
import Quantity from "../../ui/Quantity";
import { useState } from "react";
import { device } from "../../mediaSizes";
import Modal from "../../context/Modal";
import Menu from "../../context/Menu";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBookmark } from "./useDeleteBookmark";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../cart/useAddToCart";
import { useGetCart } from "../cart/useGetCart";
import { useDeleteCart } from "../cart/useDeleteCart";
function BookmarkDetails({ bookmark }) {
  const StyledBookmarkDetails = styled.div`
    padding: 10px;
    border-bottom: 1px solid #78716c;
    /* display: flex; */
    display: grid;
    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr auto;
    }
    grid-template-columns: 0.7fr auto auto;
    justify-content: space-between;
    align-items: center;
    & svg {
      cursor: pointer;
    }
  `;
  const TitleImage = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const Title = styled.h5`
    font-weight: bold;
  `;
  const Image = styled.img`
    width: 50px;
    border-radius: 8px;
  `;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { image, title, bookmarkId } = bookmark;
  const { deleteBookmark, isDeleting } = useDeleteBookmark();
  const { cart, isLoading } = useGetCart();
  const { addToCart } = useAddToCart();
  const { deleteCart } = useDeleteCart();

  if (isLoading) return null;
  const cartArr = cart.map((x) => x.cartId);
  function deleteBook(id) {
    deleteBookmark(id, {
      onSuccess: () => {
        toast.success(
          `You've successfully deleted ${title} from your bookmarks`
        );
      },
    });
  }
  function handleAddToCart(recipe) {
    // console.log(quantity);
    const newRecipe = {
      ...recipe,
      quantity,
      newPrice: recipe.price,
      checkedPrice: false,
    };
    if (!cartArr.includes(recipe.bookmarkId))
      addToCart(newRecipe, {
        onSuccess: () => {
          toast.success(`You've successfully added ${title} to cart`);
        },
        onError: () => {
          toast.error(`Unable to add item`);
        },
      });
    else return toast.success(`${title} is already in cart`);
  }
  const isInCart = !cartArr.includes(bookmarkId);
  if (isDeleting) return <Spinner />;
  return (
    <StyledBookmarkDetails>
      <TitleImage>
        <Image src={image} />
        <Title>{title}</Title>
      </TitleImage>
      <Quantity count={quantity} setCount={setQuantity} />
      <Modal>
        <Menu>
          <Menu.Toogle id={bookmarkId} />
          <Menu.List id={bookmarkId}>
            {isInCart ? (
              <Menu.Button onClick={() => handleAddToCart(bookmark)}>
                Add to cart
              </Menu.Button>
            ) : (
              <Menu.Button
                onClick={() =>
                  deleteCart(bookmarkId, {
                    onSuccess: () => {
                      toast.success(
                        `You've successfully removed ${title} from your cart`
                      );
                    },
                  })
                }
              >
                Remove from cart
              </Menu.Button>
            )}
            <Menu.Button onClick={() => navigate(`/recipe/${bookmarkId}`)}>
              View recipe
            </Menu.Button>

            <Modal.Open name="delete">
              <Menu.Button>Delete recipe</Menu.Button>
            </Modal.Open>
          </Menu.List>

          <Modal.Window opens="delete">
            <ConfirmDelete
              onDelete={() => deleteBook(bookmarkId)}
              title={title}
              type="bookmarks"
            />
          </Modal.Window>
        </Menu>
      </Modal>
    </StyledBookmarkDetails>
  );
}
BookmarkDetails.propTypes = {
  bookmark: PropTypes,
};
export default BookmarkDetails;
