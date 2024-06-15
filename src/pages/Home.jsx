import styled from "styled-components";
// import PropTypes from "prop-types";
import img from "../assets/images/im.jpg";
import Navbar from "../ui/Navbar";
// import HomeContent from "../features/home/HomeContent";
import HomeSwipe from "../features/home/HomeSwipe";
import Toogle from "../ui/Toogle";
import { useEffect } from "react";

import { getCurrentUser } from "../features/authentication/userAuth";
// ${(props) => props.columns}
function Home() {
  const StyledHome = styled.header`
    height: 100vh;
    width: 100%;
    /* padding-bottom: 300px; */
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.5)
      ),
      url(${img}) no-repeat;
    background-size: cover;
    background-position: center;
  `;
  const Swipe = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  useEffect(function () {
    async function log() {
      // const a = await LoginApi({
      //   email: "sam@example.co",
      //   password: "tes",
      // });
      const a = await getCurrentUser();
      console.log(a);
    }
    log();
  }, []);
  return (
    <StyledHome>
      <Navbar />
      <Swipe>
        <div>
          <HomeSwipe />
        </div>
      </Swipe>
      <Toogle />
    </StyledHome>
  );
}

export default Home;
