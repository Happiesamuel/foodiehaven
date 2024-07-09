import styled from "styled-components";
import Navbar from "../ui/Navbar";
import Container from "../ui/Container";
import P from "../ui/P";
import Head from "../ui/Head";

import CustomerDetails from "../features/customer/CustomerDetails";
import Footer from "../ui/footer/Footer";
import Toogle from "../ui/Toogle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Customer() {
  const StyledCustomer = styled.div`
    background: var(--color-applayout);
    height: 100%;
  `;
  const Custom = styled.div`
    padding: 50px 0;
  `;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledCustomer data-aos="fade-up">
      <Navbar />
      <Container>
        <P>our customer says</P>
        <Head>Customers says</Head>
        <P type="black">
          Discover culnary delights with our diverse menu selection curved{" "}
          <br /> to taste every potato salvory classics
        </P>
        <Custom>
          <CustomerDetails />
        </Custom>
      </Container>
      <Toogle />
      <Footer />
    </StyledCustomer>
  );
}

export default Customer;
