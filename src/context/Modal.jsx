import { cloneElement, createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const ModalContext = createContext();
function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");
  const close = () => setOpenModal("");
  const handleOpen = setOpenModal;
  return (
    <ModalContext.Provider value={{ handleOpen, openModal, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ name, children }) {
  const { handleOpen, openModal } = useContext(ModalContext);
  console.log(openModal);
  return <div onClick={() => handleOpen(name)}>{children}</div>;
}
function Window({ opens, children }) {
  const StyledWindow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 40%;
    left: 20%;
    right: 20%;
    z-index: 1000;
    transition: all 0.5s;
  `;
  const Overlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  `;
  const { openModal, close } = useContext(ModalContext);
  if (openModal !== opens) return null;
  else
    return (
      <Overlay onClick={close}>
        {" "}
        <StyledWindow>{cloneElement(children, { close: close })}</StyledWindow>
      </Overlay>
    );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.propTypes = {
  children: PropTypes,
};
Open.propTypes = {
  children: PropTypes,
  name: PropTypes,
};
Window.propTypes = {
  children: PropTypes,
  opens: PropTypes,
};
export default Modal;
