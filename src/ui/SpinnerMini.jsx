import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 1.5s infinite linear;
  color: var(--color-spinner-mini);
`;

export default SpinnerMini;
