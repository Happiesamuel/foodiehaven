import img from "../../assets/images/spice3.png";
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

function HomeContent3() {
  return (
    <StyledHomeContent>
      <ImageWrap>
        <Image src={img} />
      </ImageWrap>
      <Container>
        <P font="bold">Hot & special food</P>
        <Spice>FRIED RICE SAUSE</Spice>
        <P font="light">
          Enjoy and calm your taste with our <br /> fried sauce rice
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

export default HomeContent3;
