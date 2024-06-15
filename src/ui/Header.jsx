import styled from "styled-components";
import HeaderSearch from "./HeaderSearch";
import User from "./User";
import { useMenu } from "../context/MenuContext";

function Header() {
  const StyledHeader = styled.header`
    background: linear-gradient(to bottom right, #4ade80, #039235);
    color: #fff;
    grid-area: header;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
  `;
  const Head = styled.h3`
    font-family: "Akaya Kanadaka", system-ui;
    font-weight: 900;
    font-style: normal;
    text-align: center;
    color: white;
    font-size: 20px;
  `;
  const { width } = useMenu();
  return (
    <StyledHeader>
      <Head>Foodie Haven</Head>

      <HeaderSearch />
      {width > 768 && <User />}
    </StyledHeader>
  );
}

export default Header;
