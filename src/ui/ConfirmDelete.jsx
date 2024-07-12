import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { device } from "../mediaSizes";
function ConfirmDelete({ title, close, onDelete, type, subject }) {
  const StyledConfirmDelete = styled.div`
    background-color: var(--color-sidebar);
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (${device.laptop}) {
      width: 400px;
      padding: 30px;
    }
    & p {
      font-size: 15px;
      font-weight: bold;
      line-height: 1.5;
      color: var(--color-deep-text);
    }
  `;
  const Buts = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  `;
  return (
    <StyledConfirmDelete>
      {subject ? (
        <p>{subject}</p>
      ) : (
        <p>
          Are you sure you want to delete {title} from your {type} ?
        </p>
      )}
      <Buts>
        <Button type="danger" size="medium" onClick={close}>
          Cancel
        </Button>
        <Button type="primary" size="medium" onClick={onDelete}>
          Yes
        </Button>
      </Buts>
    </StyledConfirmDelete>
  );
}
ConfirmDelete.propTypes = {
  title: PropTypes,
  close: PropTypes,
  onDelete: PropTypes,
  type: PropTypes,
  subject: PropTypes,
};

export default ConfirmDelete;
