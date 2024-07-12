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
import { useUser } from "../authentication/useUser";
import { useNavigate } from "react-router-dom";

function HomeContent3() {
  const { user } = useUser();
  const navigate = useNavigate();
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
          <Button
            onClick={() =>
              navigate(user?.role === "authenticated" ? "/cart" : "/login")
            }
            type="primary"
            size="medium"
          >
            <FaShoppingCart />
            <span> ORDER NOW</span>
          </Button>
        </div>
      </Container>
    </StyledHomeContent>
  );
}

export default HomeContent3;
