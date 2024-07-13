import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../mediaSizes";
function DashboardOverall({ title, svg, value }) {
  const StyledDashboardOverall = styled.div`
    background: var(--color-sidebar);
    padding: 10px 10px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 165px;
    & svg {
      color: var(--color-icon-svg);
      font-size: 20px;
      background: var(--color-background-svg);
      padding: 5px;
      border-radius: 100%;
      @media ${device.laptop} {
        font-size: 35px;
        padding: 5px;
      }
    }
    & div {
      display: flex;
      justify-content: space-evenly;
      gap: 5px;
      align-items: center;
      @media ${device.tablet} {
        gap: 10px;
      }
    }
    & p,
    h6 {
      color: var(--color-ash-text);
    }
    & h6 {
      font-size: 18px;
      font-weight: 900;
      @media ${device.laptop} {
        font-size: 35px;
      }
    }
    & p {
      font-size: 11px;
      font-weight: 200;
      text-align: center;
      @media ${device.laptop} {
        font-size: 18px;
      }
    }
  `;
  return (
    <StyledDashboardOverall>
      <div>
        <div>{svg}</div>
        <h6>{value}</h6>
      </div>
      <p>{title}</p>
    </StyledDashboardOverall>
  );
}
DashboardOverall.propTypes = {
  title: PropTypes,
  svg: PropTypes,
  value: PropTypes,
};
export default DashboardOverall;
