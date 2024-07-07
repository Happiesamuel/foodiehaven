import { useForm } from "react-hook-form";
import styled from "styled-components";
import OrderFormInput from "./OrderFormInput";
import { Button } from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useAdrress } from "../hooks/useGeoLocationApi";
import { useOrder } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const StyledOrderForm = styled.form`
    margin: 30px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const { register, formState, handleSubmit, setValue } = useForm();
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const { orderId } = useOrder();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(orderId, data);
    navigate(`/order/${orderId}`);
  }
  const username = isLoading
    ? "Getting username..."
    : user?.identities?.at(0)?.identity_data?.username;

  const { address, isLoading: isGettingAddress } = useAdrress();
  const addressDetail = isGettingAddress
    ? "Getting address..."
    : `${address?.locality}, ${address?.city} ${address?.postcode}, ${address?.countryName}`;

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
          disabled
          value={addressDetail}
          {...setValue("address", addressDetail)}
        />
      </OrderFormInput>
      <div>
        <Button type="secondary" size="medium">
          Submit
        </Button>
      </div>
    </StyledOrderForm>
  );
}

export default OrderForm;
