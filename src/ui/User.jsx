import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import img from "../assets/images/def.png";
import styled from "styled-components";
function User() {
  const StyledUser = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    & h1 {
      font-size: 20px;
    }
    & img {
      width: 30px;
    }
    & svg {
    }
  `;
  return (
    <StyledUser>
      <img src={img} />
      <FaRegUser />
      <h1>Hs</h1>
      <IoLogOutOutline />
    </StyledUser>
  );
}

export default User;
