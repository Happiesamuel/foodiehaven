import img from "../../assets/images/spice2.png";
import { Button } from "../../ui/Button";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  Image,
  ImageWrap,
  P,
  Spice,
  StyledHomeContent,
} from "./HomeContentStyle";

function HomeContent2() {
  return (
    <StyledHomeContent>
      <ImageWrap>
        <Image src={img} />
      </ImageWrap>
      <Container>
        <P font="bold">Hot & special food</P>
        <Spice>SPICY RICE & CHICKEN</Spice>
        <P font="light">
          Delight your taste buds with our spicy <br />
          rice with chicken served with soft chilled drink
        </P>
        <div>
          <Button type="primary" size="medium">
            <FaShoppingCart />
            <span> ORDER NOW</span>
          </Button>
        </div>
      </Container>
    </StyledHomeContent>
  );
}

export default HomeContent2;
