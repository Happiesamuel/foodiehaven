import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/images/food2.png";
import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { useSearch } from "../context/SearchResultContext";
import { device } from "../mediaSizes";

function Sidebar() {
  const StyledSidebar = styled.aside`
    grid-area: sidebar;
    text-align: center;
    background: var(--color-sidebar);
  `;
  const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    line-height: 3;
    text-align: center;
    gap: 2px;
    padding-top: 30px;
  `;
  const Li = styled.li`
    & a {
      padding: 10px 20px;
      color: var(--color-text);
      display: flex;
      gap: 10px;
      align-items: center;
      transition: all 0.5s;
      font-weight: bold;
      & svg {
        color: var(--color-svg-link);
      }
      &.active {
        background: var(--color-svg-link);
        color: #fff;
        & svg {
          color: #fff;
        }
      }
      &:not(.active):hover {
        background-color: var(--color-link-hover);
        color: var(--color-hover-text);
        transition: none;
        & svg {
          color: var(--color-hover-text);
        }
      }
    }
  `;

  const HeadWrap = styled.div`
    border-radius: 100%;
    background: var(--color-foodie-logo);
    width: 120px;
    scale: 0.7;
    padding: 0 5px;
    text-align: center;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    & img {
      @media ${device.tablet} {
        width: 80px;
      }
    }
  `;
  const { setSearchData } = useSearch();
  const navigate = useNavigate();
  return (
    <StyledSidebar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadWrap onClick={() => navigate("/dashboard")}>
          <img src={LogoImg} onClick={() => navigate("/dashboard")} />
        </HeadWrap>
      </div>
      <Ul>
        <Li onClick={() => setSearchData("")}>
          <NavLink to="/dashboard">
            <MdDashboard />
            <div>Dashboard</div>
          </NavLink>
        </Li>
        <Li onClick={() => setSearchData("")}>
          <NavLink to="/bookmark">
            <FaBookmark />
            <div>Bookmarks</div>
          </NavLink>
        </Li>
        <Li onClick={() => setSearchData("")}>
          <NavLink to="/cart">
            <FaShoppingCart />

            <div>Cart</div>
          </NavLink>
        </Li>
        <Li onClick={() => setSearchData("")}>
          <NavLink to="/orders">
            <MdLibraryBooks />

            <div>Orders</div>
          </NavLink>
        </Li>
        <Li onClick={() => setSearchData("")}>
          <NavLink to="/settings">
            <IoSettings />
            <div>Profile Settings</div>
          </NavLink>
        </Li>
      </Ul>
    </StyledSidebar>
  );
}

export default Sidebar;
