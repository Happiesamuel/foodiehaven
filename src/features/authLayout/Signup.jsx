import { Link } from "react-router-dom";
import styled from "styled-components";
import SignupForm from "./SignupForm";
import { TypeAnimation } from "react-type-animation";

function Signup() {
  const StyledSignup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  `;
  const Sign = styled.div`
    font-size: 14px;
    color: #fff;
    & a {
      color: #cc971b;
      font-weight: 900;
    }
  `;
  const Head = styled.h2`
    font-family: "Outfit", sans-serif;
    color: #fff;
  `;

  return (
    <StyledSignup>
      <div>
        <Head>Create an account!</Head>
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
      <SignupForm />
      <Sign>
        <span>{"Already have an account?"} </span>
        <Link to="/login">Sign in here</Link>
      </Sign>
    </StyledSignup>
  );
}

export default Signup;
