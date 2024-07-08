import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled, { css } from "styled-components";
import SidebarMenu from "./SidebarMenu";
import { useMenu } from "../context/MenuContext";

import Search from "../pages/Search";
import { device } from "../mediaSizes";

function AppLayout() {
  const StyledAppLayout = styled.div`
    display: grid;
    transition: all 0.5s;
    ${({ width }) =>
      width < 768 &&
      css`
        grid-template-columns: 3rem 1fr;
      `}
    ${({ width }) =>
      width > 768 &&
      css`
        grid-template-columns: 16rem 1fr;
      `}
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header  header"
      "sidebar content";
    height: 100vh;
  `;
  const Body = styled.div`
    background: var(--color-applayout);
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    padding: 20px 10px;
    @media (${device.laptop}) {
      padding: 20px 30px;
    }
    height: 100%;
  `;
  const { width } = useMenu();
  const [searchParams] = useSearchParams();

  const searchData = searchParams.get("search");
  return (
    <StyledAppLayout width={width}>
      <Header />
      {width < 768 ? <SidebarMenu /> : <Sidebar />}
      <Body>{searchData ? <Search /> : <Outlet />}</Body>
    </StyledAppLayout>
  );
}
export default AppLayout;
