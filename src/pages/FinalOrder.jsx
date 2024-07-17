import styled, { css } from "styled-components";
import { useGetOrder } from "../features/order/useGetOrder";
import { Button } from "../ui/Button";
import Spinner from "../ui/Spinner";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaFileWord } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAirplane } from "react-icons/io";
import Line from "../ui/Line";
import OrderDetail from "../features/order/OrderDetail";
import OrderPayments from "../features/order/OrderPayments";
import { device } from "../mediaSizes";
import { useDarkmode } from "../context/DarkmodeContext";

function FinalOrder() {
  const OrderNav = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    padding-bottom: 20px;
    & div {
      font-weight: 400;
      color: var(--color-ash-text);

      font-size: 14px;
    }
    & a {
      font-size: 15px;
      font-weight: bold;
      color: var(--color-ash-text);
    }
  `;
  const OrderIdContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
      font-weight: bold;
      font-size: 15px;
      color: var(--color-deep-text);

      @media (${device.tablet}) {
        font-size: 22px;
      }
    }
    & div,
    button {
      display: flex;
      align-items: center;
    }
    & div {
      gap: 5px;
      @media (${device.tablet}) {
        gap: 10px;
      }
    }
    & button {
      gap: 3px;
    }
  `;
  const OrderDate = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 5px;
    @media (${device.tablet}) {
      padding: 20px 0;
      gap: 40px;
    }
  `;
  const OrderDateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    color: var(--color-ash-text);

    @media (${device.tablet}) {
      gap: 8px;
    }
    ${({ color }) =>
      color === "green" &&
      css`
        color: #047d2e;
      `}

    & p {
      font-weight: 600;
      font-size: 10px;
      color: var(--color-deep-text);

      @media (${device.tablet}) {
        font-size: 15px;
      }
    }
    & div {
      font-weight: 400;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 1px;

      @media (${device.tablet}) {
        font-size: 15px;
        gap: 3px;
      }
    }
  `;
  const navigate = useNavigate();

  const { isLoading, order } = useGetOrder();
  const { isDarkmode } = useDarkmode();
  if (isLoading) return <Spinner />;
  const { orderId, created_at, cart, address, phone } = order.at(0);
  const date = new Date(created_at);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <OrderNav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="orders">Orders</Link>
        <div>ID {orderId}</div>
      </OrderNav>
      <OrderIdContainer>
        <p>Order ID: #{orderId}</p>
        <div>
          <Button type={isDarkmode ? "primary" : "secondary"} size="medium">
            <FaFileWord />
            <div>Invoice </div>
          </Button>
          <Button
            type={!isDarkmode ? "primary" : "secondary"}
            size="medium"
            onClick={() => navigate("/orders")}
          >
            <div>Track order </div>
            <MdOutlineMyLocation />
          </Button>
        </div>
      </OrderIdContainer>
      <OrderDate>
        <OrderDateContainer>
          <div>Order date:</div>
          <p>
            {months.at(month)} {String(day).length === 1 ? `0${day}` : day},{" "}
            {year}{" "}
          </p>
        </OrderDateContainer>
        <OrderDateContainer color="green">
          <div>
            <div>
              <IoMdAirplane />
            </div>
            <div>Estimated delivery:</div>
          </div>
          <p>
            {months.at(month + 1)}{" "}
            {String(day).length === 1 ? `0${day - 2}` : day - 2}, {year}{" "}
          </p>
        </OrderDateContainer>
      </OrderDate>

      <Line>
        <div></div>
      </Line>
      <OrderDetail cart={cart} />
      <Line>
        <div></div>
      </Line>

      <OrderPayments address={address} phone={phone} cart={cart} />
    </div>
  );
}

export default FinalOrder;
