import styled from "styled-components";
import img from "../assets/images/im.jpg";
import Navbar from "../ui/Navbar";
import HomeSwipe from "../features/home/HomeSwipe";
import Toogle from "../ui/Toogle";
import { useUser } from "../features/authentication/useUser";
import Preloader from "../ui/Preloader";

function Home() {
  const StyledHome = styled.header`
    height: 100vh;
    width: 100%;
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
  const { isLoading } = useUser();
  if (isLoading) return <Preloader />;
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
