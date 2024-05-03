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

const ingredientList = (ingredients: string[]) => {

  return (
    <>
      <p>
        <strong>Ingredients</strong>
        <br />
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>
    </>
  );
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
          <div className="d-flex flex-row justify-content-left">
            <div className="mx-1">
              <img
                src={
                  data.imgSrc === ""
                    ? "https://placehold.co/400x400"
                    : data.imgSrc
                }
                alt={`${data.title}`}
                style={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "20px",
                  marginRight: "10px",
                }}></img>
            </div>
            <div
              style={{ margin: "4px 4px 0px 4px", padding: "4px 4px 0px 4px" }}
              className="d-flex flex-column justify-content-between w-75">
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
                    <div className="beef-brown">
                      <h5>Alcohol Percentage: {data?.percentage}%</h5>
                    </div>
                  ) : (
                    <></>
                  )}
                </p>
              </div>
              <div style={{}}>
                {findQuantity(state, data.id) === 0 ? (
                  <div>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        height: "80px",
                        fontSize: "2rem",
                      }}
                      className="addToCartButton"
                      onClick={() => addToCart(dispatch, data)}>
                      {GetIcon("Cart", "Large")} ${data.price}.00
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        marginRight: "5px",
                        fontSize: "2.5rem",
                      }}>
                      <CartQuantity
                        radius="Standalone"
                        data={{
                          cartProduct: state.cartProducts.find(
                            (product) => product.id === data.id
                          ) || {
                            id: "",
                            title: "",
                            price: 0,
                            img: "",
                            quantity: 0,
                          },
                        }}
                      />
                    </div>
                    <div style={{ height: "80px", width: "50%" }}>
                      <NavigationButton
                        navigationPath={data.navigationPath}
                        productData={data}></NavigationButton>
                    </div>
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
