import styled from "styled-components";
import { device } from "../mediaSizes";
import Line from "../ui/Line";
import OrdersLayout from "../features/orders/OrdersLayout";
import { useEffect } from "react";

function Orders() {
  const StyledOrders = styled.div`
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
  useEffect(function () {
    document.title = "Track Your Orders";
    return () => (document.title = "Foodie Haven");
  }, []);
  return (
    <StyledOrders>
      <Head>
        <span> Track </span> Your <span>Orders</span>
      </Head>
      <Line>
        <div></div>
      </Line>
      <OrdersLayout />
    </StyledOrders>
  );
}

export default Orders;
