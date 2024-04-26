import { useParams } from "react-router-dom";
import { SingleFoodAPI } from "../API/FoodAPI";
import { ProductInfo } from "../components/ProductInfo";
import { PageTracker } from "../services/PageHistoryService";

export const ProductInfoView = () => {
  const { mealId } = useParams();
  const id = mealId ?? "";
  const singleCourse = SingleFoodAPI(id);

  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <div className="headerSmaller" style={{ margin: "30px 0px" }}>
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            {singleCourse.title}
          </h1>
        </div>
        <ProductInfo
          id={singleCourse?._id}
          productType={singleCourse?.categories[0]}
          title={singleCourse?.title}
          imgSrc={singleCourse?.imageUrl}
          ingredients={singleCourse.ingredients}
          information={singleCourse?.description}
          price={singleCourse?.price}
          navigationPath="/sideselect"
          quantity={1}
        />
      </div>
    </>
  );
};
