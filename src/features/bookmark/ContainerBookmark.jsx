import PropTypes from "prop-types";
function ContainerBookmark({ data, render }) {
  return <div>{data.map(render)}</div>;
}
ContainerBookmark.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerBookmark;
