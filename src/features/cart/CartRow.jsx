import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";
import Modal from "../../context/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCart } from "./useDeleteCart";
import toast from "react-hot-toast";
import { device } from "../../mediaSizes";
import { useUpdateCart } from "./useUpdateCart";
import SpinnerMini from "../../ui/SpinnerMini";

function CartRow({ cart }) {
  const StyledCartRow = styled.div`
    background: var(--color-sidebar);

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 0.2fr;
    align-items: center;
    gap: 10px;
    @media (${device.tablet}) {
      width: 80%;
    }
  `;
  const Image = styled.img`
    /* position: absolute; */
    width: 60px;
    border-radius: 10px;
    top: -3px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 55px;
    @media (${device.laptop}) {
      width: 80px;
      height: 70px;
    }
  `;
  const Title = styled.p`
    font-weight: bold;
    font-size: 10px;
    line-height: 1.1;
    color: var(--color-deep-text);
    @media (${device.laptop}) {
      font-size: 15px;
    }
  `;
  const CartLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 1px 0 5px;
    & input[type="checkbox"] {
      outline: none;
      cursor: pointer;
      color: #fff;
      accent-color: var(--color-spinner-mini);
      offset: 1;
      scale: 1;
      @media (${device.laptop}) {
        scale: 1.5;
        padding: 0 10px 0 15px;
        gap: 10px;
      }
    }
  `;
  const Price = styled.p`
    font-size: 12px;
    font-weight: 900;
    color: #e31818;
    @media (${device.laptop}) {
      font-size: 15px;
    }
  `;
  const CartButtons = styled.div`
    display: flex;
    background: var(--color-foodie-logo);
    width: max-content;
    gap: 6px;
    padding: 3px 8px;
    border-radius: 5px;
    align-items: center;
    @media (${device.laptop}) {
      gap: 10px;
      padding: 3px 10px;
    }
    & button,
    p {
      color: #fff;
    }
    & p {
      font-size: 10px;
      font-weight: 500;
      @media (${device.laptop}) {
        font-size: 15px;
      }
    }
    & button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  `;
  const Delete = styled.div`
    & svg {
      cursor: pointer;
      color: var(--color-spinner-mini);
      font-size: 20px;
      font-weight: bold;
      padding-right: 5px;
    }
  `;
  const { image, title, price, quantity, cartId, checkedPrice } = cart;
  const { updateCart, isLoading, status } = useUpdateCart();
  const [checked, setChecked] = useState(cart ? checkedPrice : false);
  const { deleteCart } = useDeleteCart();
  const [count, setCount] = useState(quantity);
  const [id, setId] = useState(null);
  useEffect(
    function () {
      if (cartId === id)
        updateCart({
          id: cartId,
          obj: { ...cart, checkedPrice: checked, quantity: count },
        });
    },
    [checked, cart, cartId, count, updateCart, id]
  );

  function increaseCount() {
    setChecked(false);
    setCount((i) => i + 1);
  }
  function decreaseCount() {
    setChecked(false);
    setCount((i) => (i === 1 ? i : i - 1));
  }
  function deleteCartArr(id) {
    deleteCart(id, {
      onSuccess: () => {
        toast.success(`You've successfully deleted ${title} from your cart`);
      },
    });
    updateCart({
      id: id,
      obj: { ...cart, checkedPrice: false, quantity: 1 },
    });
  }
  function updateCheck(cart) {
    setChecked((i) => !i);
    setId(cart.cartId);
  }

  return (
    <StyledCartRow>
      <CartLabel>
        {isLoading || status === "pending" ? (
          <SpinnerMini />
        ) : (
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateCheck(cart)}
            disabled={isLoading}
          />
        )}
        <Image src={image} />
        <Title>{title}</Title>
      </CartLabel>
      <Price>{"$" + price.toFixed(2)}</Price>
      <div>
        <CartButtons>
          <button onClick={decreaseCount}>-</button>
          <p>{count}</p>
          <button onClick={increaseCount}>+</button>
        </CartButtons>
      </div>
      <Modal>
        <Modal.Open name="deleteCart">
          <Delete>
            <BiTrash />
          </Delete>
        </Modal.Open>
        <Modal.Window opens="deleteCart">
          <ConfirmDelete
            onDelete={() => deleteCartArr(cartId)}
            title={title}
            type="cart"
          />
        </Modal.Window>
      </Modal>
    </StyledCartRow>
  );
}
CartRow.propTypes = {
  cart: PropTypes,
};
export default CartRow;
