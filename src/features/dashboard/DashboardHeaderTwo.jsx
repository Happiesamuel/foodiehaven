import styled from "styled-components";
import Img from "../../assets/images/spice2.png";
import { Button } from "../../ui/Button";
import { FaShoppingCart } from "react-icons/fa";
import { device } from "../../mediaSizes";

function DashboardHeaderTwo() {
  const StyledDashboardHeaderTwo = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-dashboard-header);
    border-radius: 15px;
    padding: 0px 20px;
    /* height: 180px; */

    width: 100%;
    @media ${device.laptop} {
      width: 100%;
      padding: 0 20px;
      height: 250px;
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
    justify-content: end;
    align-items: center;
    width: 50%;
    height: 180px;
    @media ${device.laptop} {
      height: 250px;
    }

    & img {
      width: 200px;
      height: 100%;

      @media ${device.laptop} {
        width: 350px;
      }
    }
  `;
  return (
    <StyledDashboardHeaderTwo>
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
    </StyledDashboardHeaderTwo>
  );
}

export default DashboardHeaderTwo;
