import Spinner from "../../../ui/Spinner";
import useAboutFood from "../../about/useAboutFood";
import PropTypes from "prop-types";
import ContainerTrend from "./ContainerTrend";
import TrendRow from "./TrendRow";

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
  const filteredRecipies = show
    ? recipies.slice(10, 30)
    : recipies.slice(10, 20);
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
