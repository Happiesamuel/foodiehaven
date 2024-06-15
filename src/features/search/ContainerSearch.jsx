import PropTypes from "prop-types";
import StyledLayout from "../../ui/StyledLayout";
function ContainerSearch({ data, render }) {
  return <StyledLayout>{data.map(render)}</StyledLayout>;
}
ContainerSearch.propTypes = {
  data: PropTypes,
  render: PropTypes,
};

export default ContainerSearch;
