// import { useAddToCart } from "./useAddToCart";

import Modal from "../../context/Modal";
import Spinner from "../../ui/Spinner";
import CartContainer from "./CartContainer";
import CartRow from "./CartRow";
import { useGetCart } from "./useGetCart";

function CartDetails() {
  const { cart, isLoading } = useGetCart();
  if (isLoading) return <Spinner />;

  return (
    <Modal>
      <CartContainer
        data={cart}
        render={(cart) => <CartRow key={cart.id} cart={cart} />}
      />
    </Modal>
  );
}

export default CartDetails;
