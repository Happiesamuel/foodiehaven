import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../mediaSizes";

function OrderRow({ cart }) {
  const { quantity, price, image, title } = cart;

  const StyledOrderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d4d4d4;
    width: 80%;
    &:last-child {
      border-bottom: none;
    }

    padding: 0 0px 8px 0;
    @media (${device.tablet}) {
      padding: 0 10px 10px 0;
    }
  `;
  const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

    & p {
      font-weight: bold;
      font-size: 15px;
      @media (${device.tablet}) {
        font-size: 20px;
      }
    }
    & div {
      font-weight: 600;
      font-size: 12px;
      text-decoration: dashed;
      color: #e31818;
      @media (${device.tablet}) {
        font-size: 14px;
      }
    }
  `;
  const Content = styled.div`
    display: grid;
    grid-template-columns: 0.01fr 0.95fr;
    gap: 10px;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      & h6 {
        font-weight: 700;
        font-size: 12px;
        line-height: 1.1;
        @media (${device.tablet}) {
          font-size: 15px;
        }
      }
      & p {
        font-weight: 400;
        font-size: 10px;
        color: #616161;
        @media (${device.tablet}) {
          font-size: 15px;
        }
      }
    }
  `;
  const ImageContainer = styled.div`
    width: 80px;
    height: 60px;
    background: linear-gradient(to bottom right, #d1a84a, #039235);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (${device.tablet}) {
      width: 100px;
      height: 80px;
    }

    & img {
      width: 80%;
      height: 80%;
      border-radius: 10px;
    }
  `;

  const totalPrice = quantity * price;
  return (
    <StyledOrderRow>
      <Content>
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
        <div>
          <h6>{title}</h6>
          <p>Qty: {quantity}</p>
        </div>
      </Content>

      <TotalPrice>
        <p>${totalPrice.toFixed(2, 0)}</p>
        <div>${price.toFixed(2, 0)} </div>
      </TotalPrice>
    </StyledOrderRow>
  );
}
OrderRow.propTypes = {
  cart: PropTypes,
};

export default OrderRow;
