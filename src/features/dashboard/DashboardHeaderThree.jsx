import styled from "styled-components";
import Img from "../../assets/images/dashboard_2.png";
import { Button } from "../../ui/Button";
import { FaShoppingCart } from "react-icons/fa";
import { device } from "../../mediaSizes";

function DashboardHeaderThree() {
  const StyledDashboardHeaderThree = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-dashboard-header);
    border-radius: 15px;
    padding: 15px 20px;
    width: 100%;
    @media ${device.laptop} {
      width: 100%;
      padding: 0 20px;
    }
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `;
  const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    & h1,
    p {
      color: #0f172a;
      font-weight: bold;
    }
    & h1 {
      font-size: 20px;
      padding-bottom: 10px;
      @media ${device.laptop} {
        font-size: 30px;
        padding-bottom: 15px;
      }
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 14px;
      @media ${device.laptop} {
        font-size: 15px;
        padding-bottom: 12px;
      }
    }
  `;
  const ImageContainer = styled.div`
    display: flex;
    justify-content: left;
    /* justify-content: flex-end; */
    width: 50%;
    height: 150px;
    @media ${device.laptop} {
      height: 250px;
    }

    & img {
      width: 300px;
      height: 100%;

      @media ${device.laptop} {
        width: 350px;
      }
    }
  `;
  return (
    <StyledDashboardHeaderThree>
      <Text>
        <h1>All Best recipies in one place</h1>
        <p>
          Delight your taste buds with our spicy <br />
          rice with chicken served with soft chilled drink
        </p>

        <div>
          <Button type="primary" size="medium">
            <span> ORDER NOW</span>
            <FaShoppingCart />
          </Button>
        </div>
      </Text>
      <ImageContainer>
        <img src={Img} />
      </ImageContainer>
    </StyledDashboardHeaderThree>
  );
}

export default DashboardHeaderThree;
