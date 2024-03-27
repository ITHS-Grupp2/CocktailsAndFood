import { Card } from "react-bootstrap";
import { Cocktail, price } from "../API/CocktailFetch";
import { NavigationButton } from "./NavigationButton";

export const CocktailMiniComponent = (
  data: { cocktail: Cocktail}) => {
  return (
    <Card
          className="shadow"
          style={{
            width: "300px",
            overflow: "hidden",
            padding: "0px",
            margin: "5px"
          }}>
      <div  style={{overflow: "hidden",}}>
								<img
									className="cardImage"
									src={data.cocktail.img}
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
          {/* Spannet kan inte ha för lång text utan mellanrum, då "väller" det ut */}
          <span
            className="text-muted align-self-end"
            style={{ minWidth: "4rem", textAlign: "right" }}
          >
            ${price} 
          </span>
        </Card.Title>
      </Card.Body>
      <NavigationButton navigationPath="/shoppingcart"></NavigationButton>
    </Card>
  );
};
