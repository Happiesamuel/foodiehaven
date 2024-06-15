import PropTypes from "prop-types";
import styled from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";
function Error({ error }) {
  const StyledError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 280px);
    & svg {
      color: #b3aaaa;
      border: 4px solid #b3aaaa;
      font-size: 80px;
      border-radius: 30%;
      /* padding: 10px; */
    }
  `;
  const P = styled.p`
    color: #b3aaaa;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -2px;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `;
  const Message = styled.div`
    color: #b3aaaa;
    font-weight: 500;
    font-size: 20px;
  `;
  return (
    <StyledError>
      <Content>
        <HiMiniXMark />
        <P>OOPS!</P>
        <Message> {error.message}</Message>
      </Content>
    </StyledError>
  );
}
Error.propTypes = {
  error: PropTypes,
};

export default Error;
