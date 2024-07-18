import styled from "styled-components";
import Input from "./Input";
import { Button } from "../../ui/Button";
import { useState } from "react";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("sam@test.com");
  const [password, setPassword] = useState("123456789");
  const { status, login } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) return;
    const data = { password, email };
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
    <StyledForm onSubmit={handleSubmit} data-aos="zoom-in">
      <div>
        <Input
          label="Email"
          type="email"
          value={email}
          disabled={status === "pending"}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          value={password}
          disabled={status === "pending"}
        />
      </div>
      <PasswordCheck>
        <p></p>
        <p>Forgotten password?</p>
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
