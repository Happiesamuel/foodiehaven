import PropTypes from "prop-types";
import styled from "styled-components";
function InstructionsContainer({ data, render, title }) {
  const StyledInstructionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  const Head = styled.h1`
    font-size: 20px;
    padding-bottom: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    background: linear-gradient(to bottom right, #4ade80, #039235);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
  return (
    <div>
      <Head>Steps on how to make {title}</Head>
      <StyledInstructionsContainer>
        {data.map(render)}
      </StyledInstructionsContainer>
    </div>
  );
}

export default InstructionsContainer;

InstructionsContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
  title: PropTypes,
};
