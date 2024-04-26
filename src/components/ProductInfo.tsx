import { useContext } from "react";
import {
  addToCart,
  CartContext,
  CartDispatchContext,
  findQuantity,
} from "./CartContext";
import { NavigationPath, NavigationButton } from "./NavigationButton";
import { CartQuantity } from "./CartQuantity";
import { GetIcon } from "./Icons";

export type ProductInfoData = {
  id: string;
  productType: string;
  title: string;
  motivation?: string;
  imgSrc: string;
  ingredients: string[];
  information: string;
  price: number;
  navigationPath: NavigationPath;
  percentage?: number;
  quantity: number;
};

// A generic info page that takes in parameter data with type ProductInfoData and displays a specific product
export const ProductInfo = (data: ProductInfoData) => {
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  return (
    <>
      <div className="center-page-items">
        <div>
          {/* <div className="center-page-items">
            <h2 style={{ color: "white" }}>{data?.title}</h2>
          </div> */}
          <div className="d-flex flex-row justify-content-center">
            <div className="mx-4">
              <img
                src={
                  data.imgSrc === ""
                    ? "https://placehold.co/400x400"
                    : data.imgSrc
                }
                alt={`${data.title}`}
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "20px",
                }}
              ></img>
            </div>
            <div className="d-flex flex-column p-2 m-2 justify-content-between w-25">
              <div>
                <p style={{ color: "white" }}>
                  <strong>Ingredients</strong>
                  <br />
                  {data.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </p>
              </div>
              <div>
                <p style={{ color: "white" }}>
                  <strong>More Information</strong>
                  <br />
                  <p>{data?.information}</p>
                  {/*If the product has the type motivation and percentage then it will display that data*/}
                  {data?.motivation != null ? (
                    <div>
                      <p>{data?.motivation}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.percentage != null ? (
                    <div>
                      <h4>Alcohol Percentage: {data?.percentage}%</h4>
                    </div>
                  ) : (
                    <></>
                  )}
                </p>
              </div>
              <div>
                {findQuantity(state, data.id) === 0 ? (
                  <button
                    style={{ height: "40px" }}
                    onClick={() => addToCart(dispatch, data)}
                  >
                    {GetIcon("Cart", "white", "Medium")} ${data.price}
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CartQuantity
                      cartProduct={
                        state.cartProducts.find(
                          (product) => product.id === data.id
                        ) || {
                          id: "",
                          title: "",
                          price: 0,
                          img: "",
                          quantity: 0,
                        }
                      }
                    />
                    <NavigationButton
                      navigationPath={data.navigationPath}
                    ></NavigationButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
