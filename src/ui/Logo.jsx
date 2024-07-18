import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../mediaSizes";
import { useNavigate } from "react-router-dom";
function Logo({ img }) {
  const StyledImg = styled.img`
    width: 40px;
    @media ${device.tablet} {
      width: 50px;
    }
    cursor: pointer;
  `;
  const navigate = useNavigate();
  return <StyledImg onClick={() => navigate("/")} src={img} />;
}

Logo.propTypes = {
  img: PropTypes,
};
export default Logo;
