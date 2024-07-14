import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../mediaSizes";
import DashboardHeaderOne from "./DashboardHeaderOne";
import DashboardHeaderTwo from "./DashboardHeaderTwo";
import DashboardHeaderThree from "./DashboardHeaderThree";

function DashboardSlide() {
  const StyledDashboardSlide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    justify-content: space-between;
    width: 100%;

    @media ${device.laptop} {
      width: 65%;
    }
  `;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <StyledDashboardSlide className="slider-container">
      <Slider {...settings}>
        <DashboardHeaderOne />
        <DashboardHeaderTwo />
        <DashboardHeaderThree />
      </Slider>
    </StyledDashboardSlide>
  );
}
function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "red",
        position: "absolute",
        left: "90%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
SamplePrevArrow.propTypes = {
  className: PropTypes,
  style: PropTypes,
  onClick: PropTypes,
};
SampleNextArrow.propTypes = {
  className: PropTypes,
  style: PropTypes,
  onClick: PropTypes,
};
export default DashboardSlide;
