import styled from "styled-components";
import Navbar from "../ui/Navbar";
import Toogle from "../ui/Toogle";
import Footer from "../ui/footer/Footer";
import Container from "../ui/Container";

import EventDetails from "../features/events/EventDetails";
import { Button } from "../ui/Button";
import P from "../ui/P";
import Head from "../ui/Head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { device } from "../mediaSizes";

function Event() {
  const StyledEvent = styled.div`
    background: var(--color-applayout);
    height: 100%;
  `;
  const Events = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 50px;
    & h1 {
      color: var(--color-deep-text);
      font-weight: bold;
      font-size: 30px;
    }
    & p {
      color: var(--color-deep-text);
      font-size: 15px;
      width: 100%;
      line-height: 1.5;

      @media (${device.tablet}) {
        width: 70%;
      }
    }
  `;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledEvent>
      <Navbar />
      <Container data-aos="fade-up">
        <P>our services</P>
        <Head>WHAT WE OFFER</Head>
        <P type="black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ni,
          veniam mol <br /> plump shrimp tender calamari
        </P>
        <EventDetails />
        <Events>
          <h1>
            Only The Freshest <br /> Ingredients
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            veritatis beatae vero eaque odit nihil, incidunt aut earum quam
            accusantium excepturi in. Dolores, numquam provident! Atque
            inventore excepturi eveniet nisi.
          </p>
          <div>
            <Button type="primary" size="medium">
              BROWSE OR ORDER A RECIPE
            </Button>
          </div>
        </Events>
      </Container>
      <Toogle />
      <Footer />
    </StyledEvent>
  );
}

export default Event;
