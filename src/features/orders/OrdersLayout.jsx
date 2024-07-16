import { MdLibraryBooks } from "react-icons/md";
import Spinner from "../../ui/Spinner";
import OrdersContainer from "./OrdersContainer";
import OrdersRow from "./OrdersRow";
import useGetOrders from "./useGetOrders";
import Empty from "../../ui/Empty";

function OrdersLayout() {
  const { isLoading, orders } = useGetOrders();
  if (isLoading) return <Spinner />;
  if (orders.length < 1)
    return (
      <Empty
        svg={<MdLibraryBooks />}
        title="Order"
        message="You can start by bookmarking your recipies :)"
      />
    );
  return (
    <OrdersContainer
      data={orders}
      render={(order) => <OrdersRow key={order.id} order={order} />}
    />
  );
}

export default OrdersLayout;
