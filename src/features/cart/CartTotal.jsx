import styled from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { device } from "../../mediaSizes";
import { useGetCart } from "./useGetCart";
import SpinnerMini from "../../ui/SpinnerMini";

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
  const cartSubTotalPrice = cart?.reduce((a, b) => a + b.price, 0);
  console.log(cartSubTotalPrice);
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
              <p>${cartSubTotalPrice.toFixed(2, 0)}</p>
            )}
          </Sum>
          <Sum>
            <div>Total</div>
            <p>$32.45</p>
          </Sum>
        </SumContainer>
      </CartContainer>
      <Button type="secondary" size="medium">
        <p>Proceed to Checkout</p>
        <FaArrowRight />
      </Button>
    </StyledCartTotal>
  );
}

export default CartTotal;
