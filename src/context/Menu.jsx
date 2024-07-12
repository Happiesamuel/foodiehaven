import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled, { css } from "styled-components";
const MenuContext = createContext();
function Menu({ children }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [position, setPosition] = useState(null);
  // console.log(position);
  const handleOpen = setOpenMenu;
  const close = () => setOpenMenu(null);
  return (
    <MenuContext.Provider
      value={{ handleOpen, openMenu, setPosition, position, close }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toogle({ id }) {
  const { handleOpen, openMenu, setPosition, close } = useContext(MenuContext);
  function handleClick(e) {
    e.stopPropagation();
    // console.log(e);
    const rect = e.target.closest("div").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.height + rect.y + 8,
    });
    handleOpen(() => (id === openMenu || openMenu === "" ? close() : id));
  }
  return (
    <BsThreeDotsVertical
      style={{ color: "var(--color-deep-text)" }}
      onClick={handleClick}
    />
  );
}
function Button({ children, onClick, disabled }) {
  const StyledButton = styled.button`
    border: none;
    padding: 10px;
    font-weight: bold;
    background-color: var(--color-sidebar);
    color: var(--color-deep-text);
    transform: all 0.5s;
    cursor: pointer;
  `;
  function click() {
    onClick?.();
  }
  return (
    <StyledButton disabled={disabled} onClick={click}>
      {children}
    </StyledButton>
  );
}
function List({ children, id }) {
  const { position } = useContext(MenuContext);
  // console.log(position);
  const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.5s;
    ${({ top }) =>
      top &&
      css`
        top: ${top}px;
      `}
    ${({ right }) =>
      right &&
      css`
        right: ${right}px;
      `}
  `;

  const { openMenu } = useContext(MenuContext);

  if (openMenu !== id) return;
  return createPortal(
    <StyledList right={position.x} top={position.y}>
      {children}
    </StyledList>,
    document.body
  );
}

Menu.Toogle = Toogle;
Menu.List = List;
Menu.Button = Button;
Menu.propTypes = {
  children: PropTypes,
};
List.propTypes = {
  children: PropTypes,
  id: PropTypes,
};
Toogle.propTypes = {
  children: PropTypes,
  id: PropTypes,
};
Button.propTypes = {
  children: PropTypes,
  id: PropTypes,
  onClick: PropTypes,
  disabled: PropTypes,
};
export default Menu;
