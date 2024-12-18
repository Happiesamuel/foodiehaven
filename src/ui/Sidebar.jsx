import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/images/food2.png";
import { useSearch } from "../context/SearchResultContext";
import { device } from "../mediaSizes";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
// import { sidebars } from "../helper";

function Sidebar() {
  const StyledSidebar = styled.aside`
    grid-area: sidebar;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: var(--color-sidebar);
  `;
  const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    line-height: 3;
    text-align: center;
    height: 80%;
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
        @media ${device.tablet} {
          font-size: 20px;
        }
      }
      & div {
        display: none;
        @media ${device.tablet} {
          display: none;
        }
        @media ${device.desktop} {
          display: block;
        }
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
    height: 120px;

    @media ${device.tablet} {
      width: 100%;
      height: 100%;
      padding: 15px 0;
    }

    @media ${device.laptop} {
      width: 40%;
      height: 100%;
      padding: 23px 0;
    }
    scale: 0.7;
    padding: 0 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    & img {
      @media ${device.tablet} {
        width: 50px;
        /* width: 80px; */
      }
    }
  `;
  const { setSearchData } = useSearch();
  const navigate = useNavigate();
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadWrap onClick={() => navigate("/dashboard")}>
          <img src={LogoImg} onClick={() => navigate("/dashboard")} />
        </HeadWrap>
      </div>
      <Ul>
        {sidebars.map((sidebar) => (
          <Li key={sidebar.route} onClick={() => setSearchData("")}>
            <NavLink to={sidebar.route}>
              {sidebar.svg}
              <div>{sidebar.title}</div>
            </NavLink>
          </Li>
        ))}
      </Ul>
    </StyledSidebar>
  );
}

export default Sidebar;
