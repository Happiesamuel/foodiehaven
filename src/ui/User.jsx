import { IoLogOutOutline } from "react-icons/io5";
import img from "../assets/images/def.png";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import SpinnerMini from "./SpinnerMini";
import Modal from "../context/Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useLogout } from "../features/authentication/useLogout";

function User() {
  const StyledUser = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    & h1 {
      font-size: 12px;
    }
    & img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
    & svg {
    }
  `;
  const { user, isLoading } = useUser();
  const { logout } = useLogout();

  if (isLoading) return <SpinnerMini />;
  if (!user) return;
  const { username, avatar } = user?.user_metadata || user.user.user_metadata;
  return (
    <StyledUser>
      <img src={!avatar ? img : avatar} />
      <h1>{username}</h1>

      <Modal>
        <Modal.Open name="logout">
          <IoLogOutOutline />
        </Modal.Open>
        <Modal.Window opens="logout">
          <ConfirmDelete
            onDelete={() => logout()}
            subject="Are you sure you want to logout?"
          />
        </Modal.Window>
      </Modal>
    </StyledUser>
  );
}

export default User;
