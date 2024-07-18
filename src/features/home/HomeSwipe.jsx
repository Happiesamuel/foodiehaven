import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import HomeContent1 from "./HomeContent1";
import HomeContent2 from "./HomeContent2";
import HomeContent3 from "./HomeContent3";

function HomeSwipe() {
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
    <div className="slider-container">
      <Slider {...settings}>
        <HomeContent1 />
        <HomeContent2 />
        <HomeContent3 />
      </Slider>
    </div>
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
export default HomeSwipe;
