import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdateUser } from "../settings/useUpdataUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PasswordUpdate() {
  const StyledPasswordUpdate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 50%;
  `;
  const Head = styled.h2`
    font-family: "Outfit", sans-serif;
    color: #fff;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const { status, updateUser } = useUpdateUser();
  const { register, formState, handleSubmit } = useForm();
  useEffect(function () {
    document.title = "Update your password";
    return () => (document.title = "Foodie Haven");
  }, []);
  const navigate = useNavigate();
  const { errors } = formState;
  const { email, password } = errors;

  function onSubmit(data) {
    updateUser(data, {
      onSuccess: () => {
        toast.error("Provide a valid email and password");
        navigate("/login");
      },
    });
  }
  return (
    <StyledPasswordUpdate>
      <div>
        <Head>Enter your email and your new password</Head>
        <div>
          <TypeAnimation
            sequence={[
              "Search for the best food recipe",
              2000,
              "Check out the food ingredients",
              2000,
              "Order foods",
              2000,
            ]}
            wrapper="p"
            speed={50}
            style={{
              fontSize: "14px",
              display: "inline-block",
              fontFamily: "Outfit",
              color: "#dfdcdc",
            }}
            repeat={Infinity}
          />
        </div>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          input={{
            ...register("email", {
              required: "You haven't entered your email!",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            }),
          }}
          error={email?.message}
          disabled={status === "pending"}
        />
        <Input
          label="New Password"
          type="password"
          input={{
            ...register("password", {
              min: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
              required: "You haven't entered your password!",
            }),
          }}
          error={password?.message}
          disabled={status === "pending"}
        />

        <Button disabled={status === "pending"} type="primary" size="medium">
          {status === "pending" ? <SpinnerMini /> : "Submit"}
        </Button>
      </Form>
    </StyledPasswordUpdate>
  );
}

export default PasswordUpdate;
