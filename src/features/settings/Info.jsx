import styled from "styled-components";
import img from "../../assets/images/def.png";
import FormLayout from "./FormLayout";
import { useUser } from "../authentication/useUser";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { Button } from "../../ui/Button";
import { useUpdateUser } from "./useUpdataUser";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";
import HeadSettings from "./HeadSettings";
import { useDarkmode } from "../../context/DarkmodeContext";
import { device } from "../../mediaSizes";
import Undefined from "../../ui/Undefined";

function Info() {
  const StyledInfo = styled.div``;
  const ImageProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & img {
      width: 100px;
      height: 100px;

      border-radius: 100%;
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
    gap: 10px;
    margin: 0 20px;
  `;
  const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    & form {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 20px;
      @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  `;
  const FileInput = styled.input.attrs({ type: "file" })`
    font-size: 15px;
    border-radius: var(--border-radius-sm);

    &::file-selector-button {
      font: inherit;
      font-weight: 500;
      padding: 0.4rem 1rem;
      margin-right: 1.2rem;
      border-radius: 30px;
      border: none;
      color: #fff;
      background-color: var(--color-foodie-border);
      cursor: pointer;
      transition: color 0.2s, background-color 0.2s;

      &:hover {
        background-color: var(--color-sidebar);
        color: #000;
      }
    }
  `;
  const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    & h1 {
      background-color: var(--color-sidebar);

      color: var(--color-ash-text);
      border-radius: 10px;
      padding: 5px 15px;
      font-size: 18px;
      @media ${device.tablet} {
        font-size: 25px;
        padding: 3px 20px;
      }
    }
  `;
  const { user, isLoading, status } = useUser();
  const [file, setFile] = useState(null);
  const { updateUser } = useUpdateUser();
  const { isDarkmode } = useDarkmode();
  if (isLoading) return <Spinner />;
  if (user === undefined) return <Undefined />;
  const { username, email, avatar } =
    user.user_metadata || user.user.user_metadata;

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;
    const data = { avatar: file };

    updateUser(data, {
      onSuccess: () => {
        toast.success(`You've successfull updated your avatar`);
      },
    });
  }
  return (
    <StyledInfo>
      <ImageProfile>
        <img src={!avatar ? img : avatar} />
      </ImageProfile>
      <Profile>
        <h1>Update your profile</h1>
        <Edit>
          <FormLayout title="Username" value={username} />
          <FormLayout title="Email" value={email} />
          <FormLayout title="Password" value="" />
        </Edit>
      </Profile>

      <Avatar>
        <HeadSettings>Update your avatar</HeadSettings>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div>
            <Button type={!isDarkmode ? "primary" : "secondary"} size="medium">
              {status === "pending" ? <SpinnerMini /> : "Submit"}
            </Button>
          </div>
        </form>
      </Avatar>
    </StyledInfo>
  );
}

export default Info;
