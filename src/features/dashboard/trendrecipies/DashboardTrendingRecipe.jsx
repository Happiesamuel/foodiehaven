import styled from "styled-components";
import TrendContainer from "./TrendContainer";
import { useState } from "react";

function DashboardTrendingRecipe() {
  const StyledDashboardTrendingRecipe = styled.div`
    margin-top: 15px;
  `;
  const TrendingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      font-size: 18px;
      color: var(--color-deep-text);
    }
    & p {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-ash-text);
      padding: 5px;
      border: 1px solid var(--color-ash-text);
      border-radius: 5px;
      cursor: pointer;
      scale: 1;
      transition: all 0.5s;
      &:hover {
        scale: 1.1;
      }
    }
  `;
  const [show, setShow] = useState(false);
  return (
    <StyledDashboardTrendingRecipe>
      <TrendingContainer>
        <h1>Trending Recipies</h1>
        <p onClick={() => setShow(!show)}>{!show ? "SEE ALL" : "SEE LESS"}</p>
      </TrendingContainer>
      <TrendContainer show={show} />
    </StyledDashboardTrendingRecipe>
  );
}

export default DashboardTrendingRecipe;
