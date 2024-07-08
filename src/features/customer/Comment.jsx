import PropTypes from "prop-types";
import StyledRecipeLayout from "../../ui/StyledRecipeLayout";
import RatedStar from "../../ui/RatedStar";
import styled from "styled-components";
function Comment({ comment }) {
  const Description = styled.div`
    font-size: 13px;
    font-style: italic;
    color: var(--color-deep-text);

    text-align: left;
  `;
  const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const UserImage = styled.img`
    width: 50px;
    height: 50px;
  `;
  const UserBio = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
  `;
  const Username = styled.h4`
    font-size: bold;
    color: var(--color-deep-text);
  `;
  const City = styled.p`
    font-size: 10px;
    color: var(--color-deep-text);
  `;
  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    left: 50px;
    top: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `;
  const { city, description, firstName, lastName, image, photo, rating } =
    comment;
  // console.log(comment);
  return (
    <StyledRecipeLayout overflow="hidden">
      <RatedStar rating={rating} />
      <Description>{description}</Description>
      <User>
        <UserInfo>
          <UserImage src={image} />
          <UserBio>
            <Username>
              {firstName}
              <span> {lastName}</span>
            </Username>
            <City>{city}</City>
          </UserBio>
        </UserInfo>
        <Image src={photo} />
      </User>
    </StyledRecipeLayout>
  );
}
Comment.propTypes = {
  comment: PropTypes,
};
export default Comment;
