import PropTypes from "prop-types";
import StyledLayout from "../../ui/StyledLayout";

function CommentLayout({ render, data }) {
  return <StyledLayout type="customer">{data.map(render)}</StyledLayout>;
}
CommentLayout.propTypes = {
  render: PropTypes,
  data: PropTypes,
};
export default CommentLayout;
