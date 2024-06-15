import { NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import LogoImg from "../assets/images/logos.png";
import { Button } from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { device } from "../mediaSizes";
import { useToogle } from "../context/ToogleContext";

function Navbar() {
  const bcg = window.location.pathname;
  const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: 0.8fr 0.55fr;
    align-items: center;
    width: 100%;
    font-family: "Outfit", sans-serif;
    text-transform: uppercase;
    padding: 15px 10px;
    position: relative;
    @media ${device.tablet} {
      padding: 15px 50px;
    }
    @media ${device.laptop} {
      grid-template-columns: 1.3fr 0.8fr 0.4fr;
      padding: 15px 50px;
    }
    @media ${device.desktop} {
      grid-template-columns: 1fr 0.8fr 0.3fr;
      padding: 15px 100px;
    }

    ${({ fixed }) =>
      fixed.length > 1 &&
      css`
        position: fixed;
        z-index: 2;
      `}

    background: ${({ bcg }) => bcg};
  `;
  const PageNav = styled.ul`
    height: 100vh;
    background: #cc971b;
    line-height: 30px;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 20px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    visibility: hidden;
    opacity: 0;

    ${({ show }) =>
      show &&
      css`
        visibility: visible;
        opacity: 100;
      `}

    @media ${device.laptop} {
      visibility: visible;
      opacity: 100;
      background-color: transparent;
      height: auto;
      position: static;
      display: flex;
      flex-direction: row;
    }
  `;
  const Link = styled(NavLink)`
    color: white;
    letter-spacing: 2px;
    font-size: 14px;
    transition: all 0.5s;
    font-weight: bold;
    &:hover,
    &:active:link,
    &.active {
      color: #039235;
    }
  `;
  const NavButtons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
    @media ${device.laptop} {
      justify-content: center;
    }
  `;
  const { isShowToogle, show } = useToogle();
  const navigate = useNavigate();
  return (
    <StyledNav fixed={bcg} bcg={bcg.length > 1 ? "#cc971b" : "transparent"}>
      <PageNav show={isShowToogle}>
        <li>
          <Link onClick={() => show()} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => show()} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => show()} to="/customer">
            Customer
          </Link>
        </li>
        <li>
          <Link onClick={() => show()} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </PageNav>
      <Logo img={LogoImg} />
      <NavButtons>
        <Button type="primary" size="small">
          <FaShoppingCart />
        </Button>
        <Button onClick={() => navigate("/login")} type="danger" size="medium">
          Log in
        </Button>
      </NavButtons>
    </StyledNav>
  );
}

export default Navbar;
