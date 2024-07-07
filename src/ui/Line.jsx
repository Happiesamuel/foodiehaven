import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  & div {
    background: #d4d4d4;
    width: 80%;
    height: 2px;
    border-radius: 30px;
  }
`;
export default Line;
