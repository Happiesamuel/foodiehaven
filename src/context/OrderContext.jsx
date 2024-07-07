import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const Order = createContext();
function OrderContext({ children }) {
  const [orderId, setOrderId] = useState(Math.floor(Math.random() * 1000000));
  useEffect(function () {
    setOrderId(Math.floor(Math.random() * 1000000));
  }, []);
  return (
    <Order.Provider value={{ orderId, setOrderId }}>{children}</Order.Provider>
  );
}
function useOrder() {
  const context = useContext(Order);
  if (context === undefined) throw new Error("wrong position!!!");
  return context;
}

OrderContext.propTypes = {
  children: PropTypes,
};
export { OrderContext, useOrder };
