import styled from "styled-components";
import StyledGridFooter from "../StyledGridFooter";
import PropTypes from "prop-types";
function FooterBody({ second, third }) {
  const P = styled.p`
    text-align: left;
    margin-bottom: 10px;
  `;
  return (
    <StyledGridFooter>
      <P>{second}</P>
      <P>{third}</P>
    </StyledGridFooter>
  );
}
FooterBody.propTypes = {
  second: PropTypes,
  third: PropTypes,
};

export default FooterBody;
