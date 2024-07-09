import styled from "styled-components";
import Navbar from "../ui/Navbar";

import Container from "../ui/Container";
import Head from "../ui/Head";
import P from "../ui/P";
import AboutDetails from "../features/about/AboutDetails";
import Footer from "../ui/footer/Footer";
import Toogle from "../ui/Toogle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  const StyledAbout = styled.section`
    background: var(--color-applayout);
    height: 100%;
  `;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledAbout>
      <Navbar />
      <Container data-aos="fade-up">
        <P>our special menu</P>
        <Head>popular dishes</Head>
        <P type="black">
          Induluge in a culinary masterpiece with our gourmet seafood risotto{" "}
          <br /> plump shrimp tender calamari
        </P>
        <AboutDetails />
      </Container>
      <Toogle />
      <Footer />
    </StyledAbout>
  );
}

export default About;
