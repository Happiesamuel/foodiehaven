import Spinner from "../../../ui/Spinner";
import useAboutFood from "../../about/useAboutFood";
import PropTypes from "prop-types";
import ContainerTrend from "./ContainerTrend";
import TrendRow from "./TrendRow";
import { SLICE_MULTIPLE, SLICE_TO } from "../../../helper";

function TrendContainer({ show }) {
  const { aboutData: TrendData, isLoadingAbout: isLoadingTrend } =
    useAboutFood();
  if (isLoadingTrend) return <Spinner />;
  const recipies = TrendData.map((data) => {
    return {
      name: data.name,
      image: data.image,
      cuisine: data.cuisine,
      id: data.id,
    };
  });
  const sliceComments = Math.floor(Math.random() * SLICE_MULTIPLE) + 1;

  const filteredRecipies = show
    ? recipies.slice(sliceComments, sliceComments + SLICE_TO)
    : recipies.slice(sliceComments, sliceComments + SLICE_TO - 4);
  // console.log(filteredRecipies);
  return (
    <ContainerTrend
      data={filteredRecipies}
      render={(recipe) => <TrendRow recipe={recipe} key={recipe.id} />}
    />
  );
}
TrendContainer.propTypes = {
  show: PropTypes,
};
export default TrendContainer;
