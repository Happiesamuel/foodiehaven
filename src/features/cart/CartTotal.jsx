import styled from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { device } from "../../mediaSizes";
import { useGetCart } from "./useGetCart";
import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function CartTotal() {
  const StyledCartTotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    @media (${device.laptop}) {
      width: 40%;
    }
    & button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  `;
  const CartContainer = styled.div`
    background: #fff;
    padding: 15px 15px;
    border-radius: 10px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    & h1 {
      font-size: 18px;
      padding-bottom: 10px;
    }
  `;
  const SumContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;
  const Sum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div,
    p {
      font-size: 13px;
    }
    & p {
      color: #e31818;
      font-weight: bold;
    }
  `;
  const { cart, isLoading } = useGetCart();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  // console.log(cart);
  const priceDown = cart
    .map((cart) =>
      cart.checkedPrice === true ? cart.price * cart.quantity : 0
    )
    .reduce((a, b) => a + b, 0);
  const cartSubTotalPrice = cart?.reduce((a, b) => a + b.price, 0);
  if (cart.length < 1) return;
  return (
    <StyledCartTotal>
      <CartContainer>
        <h1>Cart Total</h1>
        <SumContainer>
          <Sum>
            <div>SubTotal</div>
            {isLoading ? (
              <SpinnerMini />
            ) : (
              <p>${cart.length < 1 ? 0 : cartSubTotalPrice.toFixed(2, 0)}</p>
            )}
          </Sum>
          <Sum>
            <div>Total</div>
            {isLoading ? <SpinnerMini /> : <p>${priceDown.toFixed(2, 0)}</p>}
          </Sum>
        </SumContainer>
      </CartContainer>
      {priceDown > 0 && (
        <Button
          type="secondary"
          size="medium"
          onClick={() => navigate("/order")}
        >
          <p>Proceed to Checkout</p>
          <FaArrowRight />
        </Button>
      )}
    </StyledCartTotal>
  );
}

export default CartTotal;
