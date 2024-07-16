import PropTypes from "prop-types";
import GridDashboardLayout from "../GridDashboardLayout";

function DiscountContainer({ data, render }) {
  return <GridDashboardLayout>{data.map(render)}</GridDashboardLayout>;
}
DiscountContainer.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default DiscountContainer;
