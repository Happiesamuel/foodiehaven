import PropTypes from "prop-types";
import styled from "styled-components";
function Input({ label, type, input, error, disabled, value, onChange }) {
  const StyledInput = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    color: #fff;

    & label {
      font-size: 15px;
      font-weight: bold;
    }
    & input {
      border: none;
      border-bottom: 0.5px solid #fff;
      padding: 5px 10px;
      font-size: 15px;
      background: transparent;
      color: #fff;
      transition: all 0.5s;
      outline: none;
      &:focus {
        padding-top: 10px;
        background: transparent;
      }
    }
  `;
  const P = styled.p`
    font-size: 12px;
    color: #e31818;
    font-style: italic;
  `;
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        {...input}
        disabled={disabled}
      />

      {error && <P>{error}</P>}
    </StyledInput>
  );
}
Input.propTypes = {
  label: PropTypes,
  type: PropTypes,
  disabled: PropTypes,
  input: PropTypes,
  error: PropTypes,
  value: PropTypes,
  onChange: PropTypes,
};

export default Input;
