import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import LoginForm from "./LoginForm";

function Login() {
  const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 50%;
  `;
  const Head = styled.h2`
    font-family: "Outfit", sans-serif;
    color: #fff;
  `;
  const Sign = styled.div`
    font-size: 14px;
    color: #fff;
    & a {
      color: #fff;
      font-weight: 900;
    }
  `;
  return (
    <StyledLogin>
      <div>
        <Head>Good to see you again!</Head>
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
      <LoginForm />
      <Sign>
        <span>{"Don't have an account? Sign up"} </span>
        <Link to="/signup">here </Link>
      </Sign>
    </StyledLogin>
  );
}

export default Login;
