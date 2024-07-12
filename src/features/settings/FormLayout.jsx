import styled from "styled-components";
import FormInput from "./FormInput";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateUser } from "./useUpdataUser";

function FormLayout({ title, value }) {
  const StyledFormLayout = styled.form``;
  const { updateUser, status } = useUpdateUser();
  const label = title.at(0).toLowerCase() + title.slice(1);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      [label]: value,
    },
  });
  const { errors } = formState;
  const error = errors[label];
  const pattern =
    label === "email"
      ? {
          value: /\S+@\S+\.\S+/,
          message: "Please provide a valid email address",
        }
      : {};
  function onSubmit(data) {
    if (!data[label]) return;

    updateUser(data, {
      onSuccess: () => {
        toast.success(`You've successfull updated your ${label}`);
      },
    });
  }
  return (
    <StyledFormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormInput label={title} error={error?.message || ""}>
        <input
          type="text"
          disabled={status === "pending"}
          {...register(label, {
            required: `You haven't entered your ${label}`,
            pattern: { ...pattern },
          })}
        />
        <p onClick={handleSubmit(onSubmit)}>Edit</p>
      </FormInput>
    </StyledFormLayout>
  );
}
FormLayout.propTypes = {
  title: PropTypes,
  value: PropTypes,
  //   type: PropTypes,
};

export default FormLayout;
