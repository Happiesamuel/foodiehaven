import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../mediaSizes";

function AboutButton({ button, onClick, getId }) {
  const StyledAboutButton = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: ${({ active }) => (active ? "#049035" : "white")};
    color: ${({ active }) => (active ? "white" : "")};
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    transition: all 0.5s;
    display: inline;

    margin-left: 20px;
    @media ${device.tablet} {
      display: block;
    }
    & svg {
      position: relative;
      top: 2px;
      color: ${({ active }) => (active ? "white" : "#049035")};
    }
  `;
  return (
    <StyledAboutButton active={getId === button.id} onClick={onClick}>
      {button.svg}
      <span> {button.name}</span>
    </StyledAboutButton>
  );
}
AboutButton.propTypes = {
  button: PropTypes,
  onClick: PropTypes,
  getId: PropTypes,
};

export default AboutButton;
