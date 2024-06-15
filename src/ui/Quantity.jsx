import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";

import { FaMinus, FaPlus } from "react-icons/fa";
function Quantity({ count, setCount }) {
  const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `;
  const P = styled.p`
    font-size: 15px;
    background: #a8a29e;
    padding: 5px 10px;
    color: #fff;
  `;
  function handleIncreaseCount() {
    setCount((i) => i + 1);
  }
  function handleDereaseCount() {
    setCount((i) => (count <= 1 ? count : i - 1));
  }

  return (
    <ContainerButton>
      <Button
        disabled={count <= 1}
        type="primary"
        size="button"
        onClick={() => handleDereaseCount()}
      >
        <FaMinus />
      </Button>

      <P>{count}</P>
      <Button
        type="primary"
        size="button"
        onClick={() => handleIncreaseCount()}
      >
        <FaPlus />
      </Button>
    </ContainerButton>
  );
}
Quantity.propTypes = {
  count: PropTypes,
  setCount: PropTypes,
};
export default Quantity;
