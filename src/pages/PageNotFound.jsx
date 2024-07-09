import styled from "styled-components";
import Img from "../assets/images/error.png";
import Navbar from "../ui/Navbar";
import Footer from "../ui/footer/Footer";
import { Button } from "../ui/Button";
import { useDarkmode } from "../context/DarkmodeContext";
import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";

function PageNotFound() {
  const StyledPageNotFound = styled.div`
    background: var(--color-applayout);
    height: 100%;
  `;
  const Containers = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 30px 30px 30px;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 0 20px 20px 20px;
    & h5 {
      color: var(--color-deep-text);
      font-size: 25px;
    }
    & h6 {
      font-weight: 200;
      font-size: 24px;
    }
    & h6,
    p {
      color: var(--color-ash-text);
      font-size: 20px;
    }
  `;
  const Image = styled.img`
    width: 40%;
  `;
  const { isDarkmode } = useDarkmode();
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <Navbar />
      <Containers>
        <Image src={Img} />
        <Content>
          <h5>Ooops...</h5>
          <h6>Page not found</h6>
          <p>
            {
              "The page you are looking for doesn't exist or another error occured."
            }
          </p>
          <div>
            <Button
              size="medium"
              type={isDarkmode ? "primary" : "secondary"}
              onClick={() => navigate(-1)}
            >
              Back to previous page
            </Button>
          </div>
        </Content>
      </Containers>
      <Footer />
    </StyledPageNotFound>
  );
}

export default PageNotFound;
