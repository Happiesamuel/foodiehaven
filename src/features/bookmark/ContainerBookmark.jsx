import PropTypes from "prop-types";
import Menu from "../../context/Menu";
function ContainerBookmark({ data, render }) {
  // document.addEventListener("scrollend", function () {
  //   console.log("a");
  // });
  return (
    <Menu>
      <div>{data.map(render)}</div>
    </Menu>
  );
}
ContainerBookmark.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerBookmark;
