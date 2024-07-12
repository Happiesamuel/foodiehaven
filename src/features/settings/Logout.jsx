import styled from "styled-components";
import Modal from "../../context/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useLogout } from "../authentication/useLogout";
import HeadSettings from "./HeadSettings";

function Logout() {
  const StyledLogout = styled.div`
    & p {
      color: var(--color-ash-text);
      margin-left: 20px;
      cursor: pointer;
    }
  `;
  const { logout } = useLogout();

  return (
    <StyledLogout>
      <HeadSettings>Session</HeadSettings>
      <Modal>
        <Modal.Open name="logout">
          <p>Log out foodie haven?</p>
        </Modal.Open>
        <Modal.Window opens="logout">
          <ConfirmDelete
            onDelete={() => logout()}
            subject="Are you sure you want to logout?"
          />
        </Modal.Window>
      </Modal>
    </StyledLogout>
  );
}

export default Logout;
