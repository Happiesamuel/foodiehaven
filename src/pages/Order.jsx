// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import OrderForm from "../features/order/OrderForm";

function Order() {
  const StyledOrder = styled.div`
    & p {
      font-weight: 500;
      color: var(--color-ash-text);
    }
  `;

  return (
    <StyledOrder>
      <p>Kindly fill the form to process your order</p>
      <OrderForm />
    </StyledOrder>
  );
}

export default Order;
