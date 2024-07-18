import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../mediaSizes";
function Logo({ img }) {
  const StyledImg = styled.img`
    width: 40px;
    @media ${device.tablet} {
      width: 50px;
    }
    cursor: pointer;
  `;
  return <StyledImg src={img} />;
}

Logo.propTypes = {
  img: PropTypes,
};
export default Logo;
