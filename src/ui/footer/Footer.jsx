import styled from "styled-components";
import FooterHead from "./FooterHead";
import FooterBody from "./FooterBody";
import { FaArrowRightLong } from "react-icons/fa6";
import { device } from "../../mediaSizes";

function Footer() {
  const StyledFooter = styled.footer`
    background: #378937;

    height: 100%;
    color: #fff;
    padding-top: 10px;
  `;
  const Footers = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    justify-content: space-between;
    margin: 15px 20px;
    @media ${device.laptop} {
      grid-template-columns: 1fr 0.5fr 0.4fr;
      margin: 15px 80px;
    }
  `;
  const Foot = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
  `;
  const Head = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 15px 0;
  `;
  const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s;
    background: #86eb86;
    padding: 6px 8px;
    border-radius: 7px;

    & input {
      border: none;
      background: transparent;
      color: #fff;
      &:focus {
        border: 1px solid red;
        offset: 2px;
      }
      &::placeholder {
        color: #fff;
      }
    }
  `;
  const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px 30px;
    gap: 10px;
    @media ${device.laptop} {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
  `;

  return (
    <StyledFooter>
      <Footers>
        <Foot>
          <Head>Food haven</Head>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            odio alias voluptas ipsum a maxime, consequuntur minus nesciunt sed
            illo dolore similique sequi vel. Commodi error fuga quidem sunt ut.
          </p>
        </Foot>
        <div>
          <FooterHead />
          <FooterBody second="Burger" third="Twitter" />
          <FooterBody second="Menu" third="Instagram" />
          <FooterBody second="Hot item's" third="Linked In" />
          <FooterBody second="About" third="Facebook" />
          <FooterBody second="Service" third="" />
        </div>
        <Foot>
          <Head>Suscribe For Updates</Head>
          <Inputs>
            <input placeholder="Enter your email..." type="text" />
            <FaArrowRightLong />
          </Inputs>
        </Foot>
      </Footers>
      <Context>
        <h2>Food Haven</h2>
        <p>Foodhaven.com@AllRightsReserve</p>
      </Context>
    </StyledFooter>
  );
}

export default Footer;
