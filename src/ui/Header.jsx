import styled from "styled-components";
import HeaderSearch from "./HeaderSearch";
import User from "./User";
import { useMenu } from "../context/MenuContext";
import { useDarkmode } from "../context/DarkmodeContext";

function Header() {
  const StyledHeader = styled.header`
    background: var(--color-header);
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
  const { setDarkmode } = useDarkmode();
  return (
    <StyledHeader>
      <div onClick={() => setDarkmode()}>samuel</div>
      <Head>Foodie Haven</Head>
      <HeaderSearch />
      {width > 768 && <User />}
    </StyledHeader>
  );
}

export default Header;
