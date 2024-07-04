import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function SidebarMenu() {
  const StyledSidebar = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f7fee7;
  `;
  const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    line-height: 3;
    text-align: center;
    gap: 2px;
  `;
  const Li = styled.li`
    & a {
      padding: 15px 15px;
      color: #222121;
      display: flex;
      gap: 10px;
      align-items: center;
      transition: all 0.5s;
      font-weight: bold;
      & svg {
        color: #039235;
      }
      &.active {
        background: #039235;
        color: #fff;
        & svg {
          color: #fff;
        }
      }
      &:not(.active):hover {
        background-color: #bbf7d0;
      }
    }
  `;

  return (
    <StyledSidebar>
      <Ul>
        <Li>
          <NavLink to="/dashboard">
            <MdDashboard />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/bookmark">
            <FaBookmark />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="cart">
            <FaShoppingCart />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/settings">
            <IoSettings />
          </NavLink>
        </Li>
      </Ul>
    </StyledSidebar>
  );
}

export default SidebarMenu;
