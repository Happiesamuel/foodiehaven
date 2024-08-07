import PropTypes from "prop-types";
import GridDashboardLayout from "../GridDashboardLayout";
function ContainerTrend({ data, render }) {
  return <GridDashboardLayout>{data.map(render)}</GridDashboardLayout>;
}
ContainerTrend.propTypes = {
  data: PropTypes,
  render: PropTypes,
};
export default ContainerTrend;
