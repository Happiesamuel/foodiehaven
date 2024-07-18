import styled from "styled-components";
import HeaderSearch from "./HeaderSearch";
import User from "./User";
import { useMenu } from "../context/MenuContext";
import Modal from "../context/Modal";
import { device } from "../mediaSizes";
import ProtectedRoute from "./ProtectedRoute";

function Header() {
  const StyledHeader = styled.header`
    background: var(--color-header);
    color: #fff;
    grid-area: header;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    gap: 10px;
    @media ${device.tablet} {
      padding: 0 30px;
    }
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
  return (
    <StyledHeader>
      <Modal>
        <Head>Foodie Haven</Head>
        <HeaderSearch />
        {width > 768 && (
          <ProtectedRoute>
            {" "}
            <User />
          </ProtectedRoute>
        )}
      </Modal>
    </StyledHeader>
  );
}

export default Header;
