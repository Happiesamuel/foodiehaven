import img from "../../assets/images/spice.png";
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

function HomeContent1() {
  return (
    <StyledHomeContent>
      <ImageWrap>
        <Image src={img} />
      </ImageWrap>
      <Container>
        <P font="bold">Hot & special food</P>
        <Spice>SPICE GRILLED CHICKEN</Spice>
        <P font="light">
          Delight your taste buds with our zesty <br /> lemon infused chicken
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

export default HomeContent1;
