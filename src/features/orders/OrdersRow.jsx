import PropTypes from "prop-types";
import styled from "styled-components";
import OrderCart from "./OrderCart";
import Menu from "../../context/Menu";
import { useNavigate } from "react-router-dom";
import { useDeleteOrders } from "./useDeleteOrders";
import Modal from "../../context/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function OrdersRow({ order }) {
  const StyledOrdersRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const OrderCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px 0;
    width: 100%;
  `;
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 5px 20px;
    border-radius: 10px;
    background-color: var(--color-sidebar);

    margin: 10px 0;

    & .date {
      color: var(--color-deep-text);
      font-weight: 600;
      font-size: 18px;
    }
  `;
  const { cart, created_at, orderId } = order;
  const orderData = JSON.parse(cart);
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
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
  const { status, deleteOrders } = useDeleteOrders();
  const navigate = useNavigate();
  return (
    <StyledOrdersRow>
      <Container>
        <p className="date">
          {day < 10 ? `0${day}` : `${day}`} {months.at(month)} {year}{" "}
        </p>
        <Modal>
          <Menu.Toogle id={orderId} />
          <Menu.List id={orderId}>
            <Menu.Button onClick={() => navigate(`/order/${orderId}`)}>
              View order
            </Menu.Button>
            <Modal.Open name="delete order">
              <Menu.Button disabled={status === "pending"}>
                Delete order
              </Menu.Button>
            </Modal.Open>
          </Menu.List>

          <Modal.Window opens="delete order">
            <ConfirmDelete
              onDelete={() => deleteOrders(orderId)}
              title="this order"
              type="orders"
            />
          </Modal.Window>
        </Modal>
      </Container>
      <OrderCartContainer>
        {orderData.map((orderCart) => (
          <OrderCart date={date} key={orderCart.id} cart={orderCart} />
        ))}
      </OrderCartContainer>
    </StyledOrdersRow>
  );
}
OrdersRow.propTypes = {
  order: PropTypes,
};

export default OrdersRow;
