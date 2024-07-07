import PropTypes from "prop-types";
import OrderContainer from "./OrderContainer";
import OrderRow from "./OrderRow";

function OrderDetail({ cart }) {
  const cartData = JSON.parse(cart);

  return (
    <OrderContainer
      data={cartData}
      render={(cart) => <OrderRow cart={cart} key={cart.cartId} />}
    />
  );
}
OrderDetail.propTypes = {
  cart: PropTypes,
};

export default OrderDetail;
