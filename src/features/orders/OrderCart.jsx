import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { device } from "../../mediaSizes";
// import Menu from "../../context/Menu";
import Modal from "../../context/Modal";
// import { useNavigate } from "react-router-dom";

function OrderCart({ cart, date }) {
  const StyledOrderCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `;
  const OrderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
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
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    & h6 {
      font-weight: 700;
      font-size: 12px;
      line-height: 1.1;
      color: var(--color-deep-text);
    }
    & .price {
      color: #e31818;
      font-weight: bold;
      font-size: 12px;
    }
    & .status {
      ${({ color }) =>
        !color
          ? css`
              color: #047d2e;
            `
          : css`
              color: #d1a84a;
            `}

      font-weight: 400;
      font-size: 12px;
    }
    & .quantity {
      color: #838282;
      font-weight: 400;
      font-size: 12px;
    }
  `;
  const { image, title, price, quantity } = cart;
  const day = new Date();
  const year = date.getFullYear();
  const year2 = day.getFullYear();
  const month = date.getMonth() + 1;
  const month2 = day.getMonth();
  //   const day = date.getDate();
  const status =
    month2 >= month || year2 > year ? "Delivered" : "Processing order";
  return (
    <StyledOrderCart>
      <Modal>
        <OrderContent>
          <ImageContainer>
            <img src={image} />
          </ImageContainer>
          <Content>
            <p className="status" color={month2 >= month || year2 > year}>
              {status}
            </p>
            <h6>{title}</h6>
            <p className="price">${(price * quantity).toFixed(2, 0)}</p>
            <p className="quantity">Qty: {quantity}</p>
          </Content>
        </OrderContent>
      </Modal>
    </StyledOrderCart>
  );
}
OrderCart.propTypes = {
  cart: PropTypes,
  date: PropTypes,
};

export default OrderCart;
