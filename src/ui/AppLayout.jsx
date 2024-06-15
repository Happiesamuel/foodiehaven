import { useSearchQuery } from "../features/hooks/useSearchQuery";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled, { css } from "styled-components";
import SidebarMenu from "./SidebarMenu";
import { useMenu } from "../context/MenuContext";
import Search from "../pages/Search";
import Spinner from "./Spinner";
import Error from "./Error";
import { useBookmark } from "../features/bookmark/useBookmark";

function AppLayout() {
  const StyledAppLayout = styled.div`
    display: grid;
    transition: all 0.5s;
    ${({ width }) =>
      width < 768 &&
      css`
        grid-template-columns: 4rem 1fr;
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
    background: #f2efe8;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    padding: 20px 30px;
    height: 100%;
  `;
  const { width } = useMenu();
  const { result, isSearching, error } = useSearchQuery();
  const { bookmark, isLoading } = useBookmark();
  console.log(bookmark, isLoading);
  return (
    <StyledAppLayout width={width}>
      <Header />
      {width < 768 ? <SidebarMenu /> : <Sidebar />}
      <Body>
        {result ? (
          <Search />
        ) : isSearching ? (
          <Spinner />
        ) : error ? (
          <Error error={error} />
        ) : (
          <Outlet />
        )}
      </Body>
    </StyledAppLayout>
  );
}

export default AppLayout;
