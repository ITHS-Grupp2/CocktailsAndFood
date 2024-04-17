import { Card, Container } from "react-bootstrap";
import { Cocktail, price } from "../API/CocktailFetch";
import { NavigationButton, NavigationPath } from "./NavigationButton";
import { GetPercentage } from "../services/CocktailInfoService";
import { ProductInfoData } from "./ProductInfo";

export type CocktailInfoData = {
  id: string;
  price: number;
  navigationPath: NavigationPath;
  cocktail: Cocktail;
};

// Kommer användas för att skicka info till varukorgen //RE
const convertToProductInfoData = (cocktail: Cocktail): ProductInfoData => {
  return {
    id: cocktail.id,
    productType: "drink",
    title: cocktail.name,
    imgSrc: cocktail.img,
    ingredients: cocktail.ingredients,
    information: cocktail.instructions,
    price: price,
    navigationPath: "/drinkselect",
    quantity: 1,
  };
};

export const CocktailMiniComponent = (data: { cocktail: Cocktail }) => {
  return (
    <Container>
      <Card
        className="shadow"
        style={{
          width: "300px",
          overflow: "hidden",
          padding: "0px",
          margin: "5px",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <img
            className="cardImage"
            src={data.cocktail.img}
            alt={`${data.cocktail.name}`}
            style={{
              objectFit: "cover",
              height: "300px",
              width: "300px",
            }}
          />
        </div>
        <Card.Body
          className="d-flex flex-column mb-2"
          style={{ padding: "0px 10px" }}
        >
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
            <span className="fs-5">{data.cocktail.name}</span>
          </Card.Title>
          <Card.Subtitle>
            <p>
              <i>Alcohol Percentage: {GetPercentage(data.cocktail.id)}%</i>
            </p>
          </Card.Subtitle>
        </Card.Body>
        <NavigationButton
          productInfo={convertToProductInfoData(data.cocktail)}
          price={price}
          navigationPath="/shoppingcart"
        ></NavigationButton>
      </Card>
    </Container>
  );
};
