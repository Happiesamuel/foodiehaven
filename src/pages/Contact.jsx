import styled, { css } from "styled-components";
import Navbar from "../ui/Navbar";
import Toogle from "../ui/Toogle";
import Footer from "../ui/footer/Footer";
import Container from "../ui/Container";
import ContactInfo from "../features/contact/ContactInfo";
import ContactMessage from "../features/contact/ContactMessage";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { device } from "../mediaSizes";

function Contact() {
  const StyledContact = styled.div`
    background: var(--color-applayout);
    height: 100%;
  `;
  const InfoContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin: 30px 0;

    @media (${device.tablet}) {
      flex-direction: row;

      justify-content: space-evenly;
      align-items: center;
    }
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const InfoContent = styled.div``;
  const P = styled.p`
    font-size: 13px;
    ${({ type }) =>
      type
        ? css`
            color: #cc971b;
          `
        : css`
            color: var(--color-ash-text);
          `}
  `;
  const Head = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    color: var(--color-deep-text);
    @media (${device.laptop}) {
      font-size: 30px;
    }
    & span {
      background: linear-gradient(to bottom right, #4ade80, #039235);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  return (
    <StyledContact>
      <Navbar />
      <Container data-aos="fade-up">
        <Head>
          <span>Contact </span> The <span>Team</span>
        </Head>
        <InfoContact>
          <ContactInfo />
          <Content>
            <ContactMessage svg={<FaRegEnvelope />} title="CHAT TO US">
              <InfoContent>
                <P>Our friendly team is here to help</P>
                <P type="colored">odionsamuel2005@gmail.com</P>
              </InfoContent>
            </ContactMessage>
            <ContactMessage svg={<BsTelephone />} title="PHONE">
              <InfoContent>
                <P>Mon-Fri from 8am to 5pm</P>
                <P type="colored">+234 906 541 6113</P>
              </InfoContent>
            </ContactMessage>
            <ContactMessage
              svg={<FaWhatsapp />}
              title="SEND A MESSAGE ON WHATSAPP"
            >
              <InfoContent>
                <P>Always active and online</P>
                <P type="colored">+234 906 541 6113</P>
              </InfoContent>
            </ContactMessage>
            <ContactMessage svg={<CiLocationOn />} title="OFFICE">
              <InfoContent>
                <P>Come say hello at our office HQ.</P>
                <P>121 Rock Street, 21 Avenue</P>
                <P>Nigeria,Lagos state</P>
              </InfoContent>
            </ContactMessage>
          </Content>
        </InfoContact>
      </Container>
      <Toogle />
      <Footer />
    </StyledContact>
  );
}

export default Contact;
