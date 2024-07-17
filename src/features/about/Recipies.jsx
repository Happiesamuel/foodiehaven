import PropTypes from "prop-types";

import StyledLayout from "../../ui/StyledLayout";
function Recipies({ render, data }) {
  return <StyledLayout type="about">{data.map(render)}</StyledLayout>;
}
Recipies.propTypes = {
  data: PropTypes,
  render: PropTypes,
};

export default Recipies;
