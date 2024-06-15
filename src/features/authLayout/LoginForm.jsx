import styled from "styled-components";
import Input from "./Input";
import { Button } from "../../ui/Button";
import { useState } from "react";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

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
  const [email, setEmail] = useState("sam@test.com");
  const [password, setPassword] = useState("12345678");
  const { isLoading, login } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) return;
    const data = { password, email };
    login(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Input
          label="Email"
          type="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          value={password}
          disabled={isLoading}
        />
      </div>
      <PasswordCheck>
        <p></p>
        <p>Forgotten password?</p>
      </PasswordCheck>

      <Button disabled={isLoading} type="primary" size="medium">
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </StyledForm>
  );
}

export default LoginForm;
