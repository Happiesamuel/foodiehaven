import styled from "styled-components";
import StyledGridFooter from "../StyledGridFooter";

function FooterHead() {
  const Head = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 15px 0;
  `;
  return (
    <StyledGridFooter>
      <Head>Service</Head>
      <Head>Follow Us</Head>
    </StyledGridFooter>
  );
}

export default FooterHead;
