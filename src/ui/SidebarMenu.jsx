import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function SidebarMenu() {
  const StyledSidebar = styled.aside`
    grid-area: sidebar;
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background: var(--color-sidebar);
  `;
  const Ul = styled.ul`
    display: flex;
    line-height: 3;
    text-align: center;
    gap: 2px;
  `;
  const Li = styled.li`
    & a {
      padding: 15px 15px;
      margin-top: 5px;
      color: var(--color-text);
      display: flex;
      gap: 10px;
      align-items: center;
      transition: all 0.5s;
      font-weight: bold;
      margin-bottom: 8px;
      & svg {
        font-size: 20px;

        color: var(--color-svg-link);
      }
      &.active {
        background: var(--color-svg-link);
        border-radius: 5px;
        & svg {
          color: #fff;
          font-size: 18px;
        }
      }
      &:not(.active):hover {
        background-color: var(--color-link-hover);
      }
    }
  `;
  const sidebars = [
    {
      route: "/dashboard",
      title: "Dashboard",
      svg: <MdDashboard />,
    },
    {
      route: "/bookmark",
      title: "Bookmarks",
      svg: <FaBookmark />,
    },
    {
      route: "/cart",
      title: "Cart",
      svg: <FaShoppingCart />,
    },
    {
      route: "/orders",
      title: "Orders",
      svg: <MdLibraryBooks />,
    },
    {
      route: "/settings",
      title: "Settings",
      svg: <IoSettings />,
    },
  ];
  return (
    <StyledSidebar>
      <Ul>
        {sidebars.map((sidebar) => (
          <Li key={sidebar.route}>
            <NavLink to={sidebar.route}>{sidebar.svg}</NavLink>
          </Li>
        ))}
      </Ul>
    </StyledSidebar>
  );
}

export default SidebarMenu;
