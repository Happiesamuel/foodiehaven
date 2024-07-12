import img from "../../assets/images/spice.png";
import { Button } from "../../ui/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useUser } from "../authentication/useUser";

import {
  Container,
  Image,
  ImageWrap,
  P,
  Spice,
  StyledHomeContent,
} from "./HomeContentStyle";
import { useNavigate } from "react-router-dom";

function HomeContent1() {
  const { user } = useUser();
  const navigate = useNavigate();

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

export default HomeContent1;
