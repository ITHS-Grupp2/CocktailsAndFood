import { SingleFoodAPI } from "../API/FoodAPI";
import { ProductInfo } from "../components/ProductInfo";

export const ProductInfoView = () => {
  const matID = "65fd96c529f983c33c7ec9c2";
  const singleCourse = SingleFoodAPI(matID);
  return (
    <>
      <h1>Product Info</h1>
      <ProductInfo
        
        id={singleCourse?._id}
        
        productType={singleCourse?.categories[0]}
        
        title={singleCourse?.title}
        
        imgSrc={singleCourse?.imageUrl}
        
        ingredients={singleCourse.ingredients}
        
        information={singleCourse?.description}
        
        price={singleCourse?.price}
      
        navigationPath="/sideselect"/>
    </>
  );
};
