import { SLICE_MULTIPLE } from "../../../helper";
import Spinner from "../../../ui/Spinner";
import useAboutFood from "../../about/useAboutFood";
import DiscountContainer from "./DiscountContainer";
import DiscountRow from "./DiscountRow";

function DiscountDetails() {
  const { aboutData: discountData, isLoadingAbout: isLoadingDiscount } =
    useAboutFood();
  if (isLoadingDiscount) return <Spinner />;
  const sliceDiscount = Math.floor(Math.random() * SLICE_MULTIPLE) + 1;

  const data = discountData.slice(sliceDiscount, sliceDiscount + 4);
  const discounts = data.map((discount) => {
    return {
      title: discount.name,
      price: Math.random() * 75 + 1,
      servings: discount.servings,
      image: discount.image,
      available: Math.floor(Math.random() * 15) + 1,
      id: discount.id,
      rate: Math.floor(Math.random() * 74) + 1,
    };
  });
  return (
    <DiscountContainer
      data={discounts}
      render={(discount) => (
        <DiscountRow discount={discount} key={discount.id} />
      )}
    />
  );
}

export default DiscountDetails;
