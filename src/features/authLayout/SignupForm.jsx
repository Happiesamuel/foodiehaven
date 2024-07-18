import styled from "styled-components";
import Input from "./Input";
import { Button } from "../../ui/Button";

import { useForm } from "react-hook-form";
import useSignup from "./useSignup";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;
  const navigate = useNavigate();

  const { register, getValues, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { signup, status } = useSignup();
  function onSubmit(data) {
    signup(data);
  }
  const { username, email, password, confirmPassword } = errors;
  useEffect(function () {
    document.title = "Sign up";
    return () => (document.title = "Foodie Haven");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  const isSignup = status === "pending";
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
      <div>
        <Input
          label="Username"
          type="text"
          id="username"
          input={{
            ...register("username", {
              min: {
                value: 3,
                message: "Username too short!",
              },
              required: "You haven't entered your username!",
            }),
          }}
          disabled={isSignup}
          error={username?.message}
        />
      </div>
      <div>
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
          disabled={isSignup}
        />
      </div>
      <div>
        <Input
          label="Password"
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
          disabled={isSignup}
        />
      </div>
      <div>
        <Input
          label="Confirm Password"
          type="password"
          input={{
            ...register("confirmPassword", {
              min: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
              validate: (value) =>
                value === getValues().password || "Password needs to match!",
              required: "You haven't entered your password!",
            }),
          }}
          error={confirmPassword?.message}
          disabled={isSignup}
        />
      </div>
      <ButtonContainer>
        <Button
          disabled={status === "pending"}
          onClick={() => navigate("/login")}
          type="danger"
          size="medium"
        >
          Back
        </Button>
        <Button disabled={isSignup} type="primary" size="medium">
          {status === "pending" ? <SpinnerMini /> : "Sign up"}
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}
export default SignupForm;
