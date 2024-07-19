import styled from "styled-components";
import Input from "./Input";
import { Button } from "../../ui/Button";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const PasswordCheck = styled.div`
    display: flex;
    justify-content: space-between;
    & p {
      font-style: italic;
      font-size: 12px;
      color: #fff;
    }
  `;
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;
  const navigate = useNavigate();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { email, password } = errors;
  const { status, login } = useLogin();
  function onSubmit(data) {
    login(data);
  }
  useEffect(function () {
    document.title = "Login";
    return () => (document.title = "Foodie Haven");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
      <div>
        <Input
          label="Email"
          type="email"
          error={email?.message}
          disabled={status === "pending"}
          input={{
            ...register("email", {
              required: "You haven't entered your email!",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            }),
          }}
        />
      </div>
      <div>
        <Input
          label="Password"
          type="password"
          error={password?.message}
          input={{
            ...register("password", {
              min: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
              required: "You haven't entered your password!",
            }),
          }}
        />
      </div>
      <PasswordCheck>
        <p></p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/passwordrecovery")}
        >
          Forgotten password?
        </p>
      </PasswordCheck>

      <ButtonContainer>
        <Button
          disabled={status === "pending"}
          onClick={() => navigate("/")}
          type="danger"
          size="medium"
        >
          Back
        </Button>
        <Button disabled={status === "pending"} type="primary" size="medium">
          {status === "pending" ? <SpinnerMini /> : "Login"}
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}

export default LoginForm;
