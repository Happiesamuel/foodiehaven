import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import styled from "styled-components";
import OrderFormInput from "./OrderFormInput";
import { Button } from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useOrder } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { useGetCart } from "../cart/useGetCart";
import Spinner from "../../ui/Spinner";
import { useAddOrder } from "./useAddOrder";
import toast from "react-hot-toast";
import { useDeleteCart } from "../cart/useDeleteCart";
import { useDarkmode } from "../../context/DarkmodeContext";

function OrderForm({ address }) {
  const StyledOrderForm = styled.form`
    margin: 30px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const { register, formState, handleSubmit, setValue } = useForm({
    defaultValues: {
      address: `${address?.locality}, ${address?.city} ${address?.postcode}, ${address?.countryName}`,
    },
  });
  const { user, isLoading } = useUser();
  const { addOrder, isAddingOrder } = useAddOrder();
  const { cart, isLoading: isLoadingCart } = useGetCart();
  const { deleteCart } = useDeleteCart();
  const navigate = useNavigate();
  const { orderId } = useOrder();
  const { errors } = formState;
  const { isDarkmode } = useDarkmode();
  const { setOrderId } = useOrder();
  if (isLoadingCart || isLoading) return <Spinner />;
  const filteredCartId = cart.map((cart) => cart.cartId);
  const { username: userBio, custom } =
    user.user_metadata || user.user.user_metadata;
  function onSubmit(data) {
    if (data.cart.length === 2) {
      toast.error(`Your cart is Empty...Cannot place an empty order`);
      return;
    }
    const orderObj = { ...data, orderId, custom };
    addOrder(orderObj, {
      onSuccess: () => {
        toast.success(`You've successfully ordered your food recipes`);
        deleteCart(filteredCartId);
        navigate(`/order/${orderId}`);
        setOrderId(Math.floor(Math.random() * 100000));
      },
      onError: (err) => {
        toast.error(`${err}`);
      },
    });
  }

  const username = isLoading ? "Getting username..." : userBio;

  const filteredCart = cart.filter((cart) => cart.checkedPrice);
  const cartInput = JSON.stringify(filteredCart);

  return (
    <StyledOrderForm onSubmit={handleSubmit(onSubmit)}>
      <OrderFormInput
        label="Firstname:"
        error={errors?.firstname?.message || ""}
      >
        <input
          type="text"
          value={username}
          disabled
          {...setValue("firstname", username)}
        />
      </OrderFormInput>
      <OrderFormInput
        label="Phone number:"
        error={errors?.phone?.message || ""}
      >
        <input
          type="text"
          {...register("phone", {
            required: "You haven't entered your phone number!",
            pattern: {
              value:
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              message: "Please provide a valid phone number",
            },
          })}
        />
      </OrderFormInput>
      <OrderFormInput label="Address:" error={errors?.address?.message || ""}>
        <input
          type="text"
          {...register("address", {
            required: "You have not entered your address",
          })}
        />
      </OrderFormInput>
      <input hidden {...setValue("cart", cartInput)} />
      <div>
        <Button type={isDarkmode ? "primary" : "secondary"} size="medium">
          {isAddingOrder ? "Placing order..." : "Submit"}
        </Button>
      </div>
    </StyledOrderForm>
  );
}
OrderForm.propTypes = {
  address: PropTypes,
};
export default OrderForm;
