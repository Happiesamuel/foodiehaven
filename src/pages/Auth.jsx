import { Outlet } from "react-router-dom";
import styled from "styled-components";
import log from "../assets/images/log.jpg";
function Auth() {
  const StyledAuth = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;

    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${log}) no-repeat;
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(20px);
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    height: 90%;
  `;
  const Content = styled.div`
    padding-top: 50px;
  `;
  const Head = styled.h3`
    font-family: "Akaya Kanadaka", system-ui;
    font-weight: 900;
    font-style: normal;
    text-align: center;
    color: #cc971b;
    font-size: 30px;
  `;

  return (
    <StyledAuth img={log}>
      <Content>
        <Head>Foodie Haven</Head>
        <Container>
          <Outlet />
        </Container>
      </Content>
    </StyledAuth>
  );
}

export default Auth;
