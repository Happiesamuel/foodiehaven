import PropTypes from "prop-types";
import StyledLayout from "../../ui/StyledLayout";
import styled from "styled-components";

function EventContainer({ data, render }) {
  const StyledEventContainer = styled(StyledLayout)`
    margin-top: 30px;
  `;
  return <StyledEventContainer>{data.map(render)}</StyledEventContainer>;
}
EventContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};

export default EventContainer;
