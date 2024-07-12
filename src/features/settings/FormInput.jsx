import PropTypes from "prop-types";
import styled from "styled-components";

function FormInput({ children, label, error }) {
  const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;

    & label {
      color: var(--color-deep-text);
      padding-bottom: 10px;
    }

    & div {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      border-radius: 10px;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      border: 1px solid #d3d0d0;
      margin-bottom: 5px;
      background-color: var(--color-input);

      & input {
        outline: none;
        border: none;
        font-size: 15px;
        font-weight: 500;
        width: 80%;
        background-color: var(--color-input);
      }
      &input,
      p {
        padding: 5px 0;
        cursor: pointer;
      }
      & p {
        color: #1e293b;
      }
    }
    & h6 {
      font-size: 15px;
      font-weight: 300;
      color: #e31818;
      padding-left: 10px;
      font-style: italic;
    }
  `;
  return (
    <StyledFormInput>
      <label>{label}</label>
      <div>{children}</div>
      <h6>{error}</h6>
    </StyledFormInput>
  );
}

FormInput.propTypes = {
  children: PropTypes,
  label: PropTypes,
  error: PropTypes,
};
export default FormInput;
