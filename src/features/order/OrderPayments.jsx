import PropTypes from "prop-types";
import styled from "styled-components";
import { formatPhoneNumber } from "../../helper";
import { device } from "../../mediaSizes";

function OrderPayments({ cart, address, phone }) {
  const StyledOrderPayments = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  const Head = styled.h1`
    font-size: 16px;
    font-weight: 600;
    @media (${device.tablet}) {
      font-size: 20px;
    }
  `;
  const Delivery = styled.div`
    gap: 10px;
    &,
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    & div {
      gap: 5px;
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      color: #616161;
      @media (${device.tablet}) {
        font-size: 15px;
      }
    }
    & h6 {
      font-weight: 600;
      font-size: 12px;
      @media (${device.tablet}) {
        font-size: 16px;
      }
    }
    & h5 {
      font-weight: 500;
      font-size: 12px;
      @media (${device.tablet}) {
        font-size: 15px;
      }
    }
  `;
  const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & div {
      display: flex;
      gap: 3px;
      @media (${device.tablet}) {
     gap: 8px;
    }
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      color: #616161;
      @media (${device.tablet}) {
        font-size: 15px;
      }
    }
    & h2 {
      font-weight: 600;
      font-size: 12px;
      color: #e31818;
      @media (${device.tablet}) {
      font-size: 16px;

    }
  `;
  const cartJson = JSON.parse(cart);
  const priceDown = cartJson
    .map((cart) => cart.price * cart.quantity)
    .reduce((a, b) => a + b, 0);
  console.log(priceDown);
  return (
    <StyledOrderPayments>
      <TotalPrice>
        <Head>Total</Head>
        <div>
          <p>Total Order:</p>
          <h2>${priceDown.toFixed(2, 0)}</h2>
        </div>
      </TotalPrice>
      <Delivery>
        <Head>Delivery</Head>
        <div>
          <p>Address</p>
          <h6>{address}.</h6>
          <h5>{formatPhoneNumber(phone)}</h5>
        </div>
      </Delivery>
    </StyledOrderPayments>
  );
}
OrderPayments.propTypes = {
  cart: PropTypes,
  address: PropTypes,
  phone: PropTypes,
};
export default OrderPayments;
