import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../../ui/Button";
import { useDarkmode } from "../../../context/DarkmodeContext";

function DiscountRow({ discount }) {
  const StyledDiscountRow = styled.div`
    background: var(--color-sidebar);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 10px;
    padding: 7px;

    & h2 {
      font-size: 12px;
      text-align: left;
      color: var(--color-deep-text);
      padding: 20px 0 8px 0;
    }
  `;

  const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    & p {
      font-size: 15px;
      font-weight: bold;
      color: var(--color-deep-text);
      font-size: 16px;
    }
  `;
  const P = styled.div`
    display: flex;
    gap: 6px;
    font-size: 12px;
    color: #e31818;
    font-weight: bold;

    & span {
      font-weight: 400;
      color: #b2afaf;
    }
  `;
  const Image = styled.div`
    display: flex;
    position: relative;
    height: 60%;

    & img {
      width: 100%;
      text-align: center;
      border-radius: 10px;
    }
    & p {
      position: absolute;
      backdrop-filter: blur(5px);
      border-radius: 12px;
      top: 65%;
      left: 8%;
      color: var(--color-deep-text);
      font-size: 13px;
      padding: 5px 8px;
    }
  `;
  const { image, available, title, price, rate } = discount;
  const { isDarkmode } = useDarkmode();
  return (
    <StyledDiscountRow>
      <Image>
        <img src={image} />
        <p>Available {available}</p>
      </Image>
      <h2>{title}</h2>
      <Content>
        <PriceContainer>
          <P>
            <div>{rate}%</div>
            <span>{price.toFixed(2, 0)}$</span>
          </P>
          <p>{((rate * price) / 100).toFixed(2, 0)}$</p>
        </PriceContainer>
        <div>
          <Button type={isDarkmode ? "primary" : "secondary"} size="small">
            Order
          </Button>
        </div>
      </Content>
    </StyledDiscountRow>
  );
}
DiscountRow.propTypes = {
  discount: PropTypes,
};
export default DiscountRow;
