import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Input from "./Input";
import { useForm } from "react-hook-form";
import useEmailRecovery from "./useEmailRecovery";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEffect } from "react";

function ForgottenPasswordEmail() {
  const StyledForgottenPasswordEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 50%;
  `;
  const Head = styled.h2`
    font-family: "Outfit", sans-serif;
    color: #fff;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
  `;
  const Form = styled.form``;

  const { register, formState, handleSubmit, reset } = useForm();
  useEffect(function () {
    document.title = "Password recovery";
    return () => (document.title = "Foodie Haven");
  }, []);
  const navigate = useNavigate();
  const { emailRecovery, status } = useEmailRecovery();
  const { errors } = formState;
  const { email } = errors;

  function onSubmit(data) {
    emailRecovery(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <StyledForgottenPasswordEmail>
      <div>
        <Head>Enter your Email to recover your password</Head>
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
        <ButtonContainer>
          <Button
            disabled={status === "pending"}
            onClick={() => navigate("/login")}
            type="danger"
            size="medium"
          >
            Back
          </Button>
          <Button disabled={status === "pending"} type="primary" size="medium">
            {status === "pending" ? <SpinnerMini /> : "Submit"}
          </Button>
        </ButtonContainer>
      </Form>
    </StyledForgottenPasswordEmail>
  );
}

export default ForgottenPasswordEmail;
