import styled from "styled-components";
import img from "../../assets/images/def.png";
import { FiEdit } from "react-icons/fi";
import FormLayout from "./FormLayout";
import { useUser } from "../authentication/useUser";
import Spinner from "../../ui/Spinner";

function Info() {
  const StyledInfo = styled.div``;
  const ImageProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & img {
      width: 150px;
    }
    & svg {
      position: absolute;
      top: 75%;
      z-index: 1;
      background: #fff;
      border-radius: 100%;
      font-size: 40px;
      padding: 10px;
      left: 52%;
      cursor: pointer;
    }
  `;
  const Edit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  console.log(user);
  const { username, email, avatar } =
    user.user_metadata || user.user.user_metadata;
  console.log(avatar, user);
  return (
    <StyledInfo>
      <ImageProfile>
        <img src={img} />
        <FiEdit />
      </ImageProfile>
      <Edit>
        <FormLayout title="Username" value={username} />
        <FormLayout title="Email" value={email} />
        <FormLayout title="Password" value="" />
      </Edit>
    </StyledInfo>
  );
}

export default Info;
