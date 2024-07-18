import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { device } from "../../mediaSizes";
function EventRow({ event }) {
  const StyledEventRow = styled.div`
    background: var(--color-sidebar);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
    border-radius: 10px;
    @media (${device.tablet}) {
      padding: 20px 30px;
    }
    & h4 {
      font-weight: bold;
      color: var(--color-deep-text);
      font-size: 16px;
      letter-spacing: 1px;
    }
    & p {
      color: var(--color-ash-text);
      font-size: 14px;
      line-height: 1.5;
    }
    & .link {
      color: #e31818;
    }
    & svg {
      color: var(--color-foodie-border);
      font-size: 30px;
    }
  `;
  useEffect(() => {
    AOS.init();
  }, []);
  const { svg, title, link, message } = event;
  return (
    <StyledEventRow>
      <div>{svg}</div>
      <h4>{title}</h4>
      <p>{message}</p>
      <p className="link">{link}</p>
    </StyledEventRow>
  );
}
EventRow.propTypes = {
  event: PropTypes,
};
export default EventRow;
