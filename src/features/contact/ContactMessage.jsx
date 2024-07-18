import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../mediaSizes";

function ContactMessage({ svg, title, children }) {
  const StyledContactMessage = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    text-align: left;
    margin-top: 10px;
    @media (${device.tablet}) {
      margin-top: 0px;
      gap: 50px;
    }
    & div {
      gap: 10px;
      display: flex;
      flex-direction: column;
    }

    & h6 {
      font-size: 12px;
      color: var(--color-deep-text);
    }
  `;
  const Svg = styled.div`
    border-radius: 300px;
    background-color: var(--color-foodie-border);
    color: #fff;

    & svg {
      font-size: 50px;
      font-weight: bold;
      padding: 10px;
    }
  `;
  return (
    <StyledContactMessage>
      <Svg>{svg}</Svg>
      <div>
        <h6>{title}</h6>
        {children}
      </div>
    </StyledContactMessage>
  );
}
ContactMessage.propTypes = {
  svg: PropTypes,
  title: PropTypes,
  children: PropTypes,
};
export default ContactMessage;
