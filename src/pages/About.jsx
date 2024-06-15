import styled from "styled-components";
import Navbar from "../ui/Navbar";

import Container from "../ui/Container";
import Head from "../ui/Head";
import P from "../ui/P";
import AboutDetails from "../features/about/AboutDetails";
import Footer from "../ui/footer/Footer";
import Toogle from "../ui/Toogle";

function About() {
  const StyledAbout = styled.section`
    background: #f2efe8;
    height: 100%;
  `;

  return (
    <StyledAbout>
      <Navbar />
      <Container>
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
