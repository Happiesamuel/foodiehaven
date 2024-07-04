import styled from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { device } from "../../mediaSizes";

function CartCoupon() {
  const StyledCartCoupon = styled.div`
    display: flex;
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
    & input {
      outline: none;
      border: none;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      border-radius: 10px;
      padding: 5px 10px;
      color: #262626;
      font-size: 12px;
      font-weight: bold;
      border: 1px solid #d3d0d0;
    }
  `;
  return (
    <StyledCartCoupon>
      <input type="text" placeholder="Coupon Code" />
      <Button type="secondary" size="medium">
        <p>Apply Coupon</p>
        <FaArrowRight />
      </Button>
    </StyledCartCoupon>
  );
}

export default CartCoupon;
