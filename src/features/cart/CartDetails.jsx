// import { useAddToCart } from "./useAddToCart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import Modal from "../../context/Modal";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import CartContainer from "./CartContainer";
import CartRow from "./CartRow";
import { useGetCart } from "./useGetCart";

function CartDetails() {
  const { cart, isLoading } = useGetCart();
  if (isLoading) return <Spinner />;
  if (cart.length < 1)
    return (
      <Empty
        svg={<MdOutlineRemoveShoppingCart />}
        title="cart"
        message="You can start by bookmarking your recipies :)"
      />
    );
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
