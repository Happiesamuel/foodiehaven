// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import OrderForm from "../features/order/OrderForm";
import { useAdrress } from "../features/hooks/useGeoLocationApi";
import Spinner from "../ui/Spinner";

function Order() {
  const StyledOrder = styled.div`
    & p {
      font-weight: 500;
      color: var(--color-ash-text);
    }
  `;
  const { address, isLoading: isGettingAddress } = useAdrress();
  if (isGettingAddress) return <Spinner />;
  return (
    <StyledOrder>
      <p>Kindly fill the form to process your order</p>
      <OrderForm address={address} />
    </StyledOrder>
  );
}

export default Order;
