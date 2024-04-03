import { NavigationPath, NavigationButton } from "./NavigationButton";

// export type ProductType = "Cocktail" | "Main" | "Sides";

export type ProductInfoData = {
  id: string;
  productType: string;
  title: string;
  imgSrc: string;
  ingredients: string[];
  information: string;
  price: number;
  navigationPath: NavigationPath;
};

export const ProductInfo = (data: ProductInfoData) => {
  return (
    <>
      <div className="center-page-items">
        <div>
          <div className="center-page-items">
            <h2>{data?.title}</h2>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="mx-4">
              <img
                src={
                  data.imgSrc === ""
                    ? "https://placehold.co/400x400"
                    : data.imgSrc
                }
                style={{ width: "400px", height: "400px" }}
              ></img>
            </div>
            <div className="d-flex flex-column p-2 m-2 justify-content-between">
              <div>
                <p>
                  <strong>Ingredients</strong>
                  <br />
                  {data.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </p>
              </div>
              <div>
                <p>
                  <strong>More Information</strong>
                  <br />
                  {data?.information}
                </p>
              </div>
              <div>
                <NavigationButton
                  price={data?.price}
                  navigationPath={data.navigationPath}
                  id={data.id}
                ></NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
