import styled from "styled-components";
import DiscountDetails from "./DiscountDetails";
import DiscountTime from "./DiscountTime";

function Discount() {
  const StyledDiscount = styled.div`
    margin: 20px 0;
  `;

  return (
    <StyledDiscount>
      <DiscountTime />
      <DiscountDetails />
    </StyledDiscount>
  );
}

export default Discount;
