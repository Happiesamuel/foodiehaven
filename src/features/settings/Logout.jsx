import styled from "styled-components";
import Modal from "../../context/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useLogout } from "../authentication/useLogout";

function Logout() {
  const StyledLogout = styled.div`
    & h1 {
      background-color: var(--color-sidebar);
      font-size: 25px;
      color: var(--color-ash-text);
      padding: 3px 20px;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    & p {
      color: var(--color-ash-text);
      margin-left: 20px;
      cursor: pointer;
    }
  `;
  const { logout } = useLogout();

  return (
    <StyledLogout>
      <h1>Session</h1>
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
