import PropTypes from "prop-types";
import styled from "styled-components";

function Empty({ title, svg, message }) {
  const StyledEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    padding: 15px 0;
    & h1,
    p {
      color: var(--color-ash-text);
    }
    & svg {
      font-size: 60px;
      background: #fff;
      border-radius: 100%;
      padding: 10px;
    }
    & span {
      background: linear-gradient(to bottom right, #4ade80, #039235);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  const capitilizeTitle = title.at(0).toUpperCase() + title.slice(1);
  return (
    <StyledEmpty>
      <div>{svg}</div>
      <h1>
        Your <span>{capitilizeTitle} </span>is Empty :)
      </h1>
      <div style={{ textAlign: "center" }}>
        <p>{`Looks like you haven't added anything to your ${title} yet!`}</p>
        <p>{message}</p>
      </div>
    </StyledEmpty>
  );
}
Empty.propTypes = {
  title: PropTypes,
  svg: PropTypes,
  message: PropTypes,
};

export default Empty;
