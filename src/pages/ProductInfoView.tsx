import { SingleFoodAPI } from "../API/FoodAPI";
import { ProductInfo } from "../components/ProductInfo";

export const ProductInfoView = () => {
  const matID = "65fd96c529f983c33c7ec9c2";
  const singleCourse = SingleFoodAPI(matID);
  return (
    <>
      <div
          className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
          style={{ fontFamily: "Arial, sans-serif", height: "100px" }}>
          <h1
              className="text-center"
              style={{ marginBottom: "0px" }}>
              Product Info
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
      />
    </>
  );
};
