import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../../../ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { LuAlarmClock } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
function SimilarDetails({ result }) {
  const StyledSimilarDetails = styled.div`
    /* width: 60%; */
    /* background: #f2efe8; */
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    & svg {
      color: #039235;
    }
    & span {
      font-size: 12px;
    }
    & a {
      color: #fff;
    }
  `;
  const Title = styled.div`
    font-weight: bold;
    font-size: 12px;
  `;
  const navigate = useNavigate();
  const { title, sourceUrl, readyInMinutes, servings, id } = result;
  console.log(title, sourceUrl, readyInMinutes, servings);

  return (
    <StyledSimilarDetails>
      <Title>{title}</Title>
      <ButtonContainer>
        <div>
          <LuAlarmClock />
          <span> {readyInMinutes} mins</span>
        </div>
        <div>
          <SlPeople />
          <span> {servings} servings</span>
        </div>
      </ButtonContainer>
      <ButtonContainer>
        <Button
          type="primary"
          size="small"
          onClick={() => navigate(`/recipe/${id}`)}
        >
          View recipe
        </Button>
        <Button type="secondary" size="small">
          <Link to={sourceUrl}> Check website</Link>
        </Button>
      </ButtonContainer>
    </StyledSimilarDetails>
  );
}
SimilarDetails.propTypes = {
  result: PropTypes,
};
export default SimilarDetails;
