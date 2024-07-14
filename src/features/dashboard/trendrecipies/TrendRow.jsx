import PropTypes from "prop-types";
import styled from "styled-components";

function TrendRow({ recipe }) {
  const StyledTrendRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;
    cursor: pointer;
    background: var(--color-image);
    transition: all 0.5s;

    border-radius: 10px;

    & div {
      display: flex;
      justify-content: center;
    }
    & img {
      width: 90%;
      border-radius: 20px;
      padding-top: 10px;
    }
    & p {
      text-align: center;
      color: var(--color-deep-text);
      color: #fff;
      font-weight: bold;
      padding: 10px 8px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    & main {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.75);
      overflow: hidden;
      height: 0;
      transition: 0.5s ease;
      border-radius: 10px;

      & h1 {
        width: 100%;
        text-align: center;
        margin-top: 50%;
        color: #fff;
        position: absolute;
        transform: rotate(-5deg) skewX(-5deg);
        font-family: "Akaya Kanadaka", system-ui;
      }
    }
    &:hover main {
      height: 100%;
    }
  `;
  const { image, name, cuisine } = recipe;
  return (
    <StyledTrendRow>
      <div>
        <img src={image} />
      </div>
      <p>{name}</p>

      <main>
        <h1>{cuisine}</h1>
      </main>
    </StyledTrendRow>
  );
}
TrendRow.propTypes = {
  recipe: PropTypes,
};
export default TrendRow;
