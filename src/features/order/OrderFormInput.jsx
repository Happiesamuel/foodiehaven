import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../mediaSizes";

function OrderFormInput({ children, label, error }) {
  const StyledOrderFormInput = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 0.9fr 1fr;
    gap: 10px;
    align-items: center;
    @media (${device.laptop}) {
      grid-template-columns: 0.25fr 0.9fr 0.5fr;
      gap: 20px;
    }
    & label {
      font-weight: 400;
      font-size: 16px;
      color: var(--color-ash-text);
      @media (${device.laptop}) {
        font-size: 20px;
      }
    }

    & input {
      outline: none;
      border: none;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      border-radius: 10px;
      padding: 8px 14px;
      color: var(--color-deep-text);
      font-size: 15px;
      font-weight: 400;
      border: 1px solid #d3d0d0;
      transition: all 0.5s;
      &:focus {
        border: 2px solid #d1a84a;
      }
    }
    & p {
      font-size: 14px;
      color: #e31818;
    }
  `;
  return (
    <StyledOrderFormInput>
      <label>{label}</label>
      {children}
      <p>{error}</p>
    </StyledOrderFormInput>
  );
}
OrderFormInput.propTypes = {
  children: PropTypes,
  error: PropTypes,
  label: PropTypes,
  type: PropTypes,
};
export default OrderFormInput;
