import styled from "styled-components";
import CartDetails from "../features/cart/CartDetails";
import CartTotal from "../features/cart/CartTotal";
import CartCoupon from "../features/cart/CartCoupon";
import { device } from "../mediaSizes";
import Line from "../ui/Line";

function Cart() {
  const StyledCart = styled.div`
    padding: 10px 0;
    @media (${device.laptop}) {
      padding: 20px 0;
    }
  `;
  const Head = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    color: var(--color-deep-text);
    @media (${device.laptop}) {
      font-size: 30px;
    }
    & span {
      background: linear-gradient(to bottom right, #4ade80, #039235);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  const CartPayment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    @media (${device.laptop}) {
      flex-direction: row;
    }
  `;
  return (
    <StyledCart>
      <Head>
        Your <span>Cart</span>
      </Head>
      <Line>
        <div></div>
      </Line>

      <CartDetails />
      <Line>
        <div></div>
      </Line>
      <CartPayment>
        <CartCoupon />
        <CartTotal />
      </CartPayment>
    </StyledCart>
  );
}

export default Cart;
