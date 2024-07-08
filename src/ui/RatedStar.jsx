import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";

function RatedStar({ rating }) {
  const StyledRatedStar = styled.div`
    display: flex;
    color: #cc971b;
    padding: 5px;
    & span {
      color: var(--color-ash-text);

      padding-left: 5px;
      font-weight: 500;
    }
  `;
  const star = Array.from({ length: Math.round(rating) }, (v, i) => i + 1);
  return (
    <StyledRatedStar>
      {star.map((x) => (
        <FaStar key={x} />
      ))}
      <span>{rating + "%"}</span>
    </StyledRatedStar>
  );
}
RatedStar.propTypes = {
  rating: PropTypes,
};

export default RatedStar;
