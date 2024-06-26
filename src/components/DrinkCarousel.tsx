import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Cocktail } from "../API/CocktailFetch";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Adapts the amount of cocktails shown in the carousel
// depending on the screens resolution.
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const cocktailUrl: Cocktail[] = [
  {
    img: "https://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
    name: "Lemon Shot",
    id: "",
    instructions: "",
    ingredients: [],
  },
  {
    img: "https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg",
    name: "Gin & Soda",
    id: "",
    instructions: "",
    ingredients: [],
  },
  {
    img: "https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg",
    name: "Tom Collins",
    id: "",
    instructions: "",
    ingredients: [],
  },
  {
    img: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    name: "Negroni",
    id: "",
    instructions: "",
    ingredients: [],
  },
  {
    img: "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
    name: "Gin Fizz",
    id: "",
    instructions: "",
    ingredients: [],
  },
  {
    img: "https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
    name: "Vodka Martini",
    id: "",
    instructions: "",
    ingredients: [],
  },
];

// Component to render a carousel with Cocktails
const DrinkCarousel = () => {
  return (
    <div
      className="parent"
      style={{
        width: "100%",
        height: "418.95px",
      }}
    >
      {/* React-multi-carousel properties to define how the carousel works */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        infinite={true}
        partialVisible={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        autoPlaySpeed={1900}
      >
        {/* Loops the cocktail array to show Cards */}
        {cocktailUrl.map((imageUrl, index) => {
          return (
            <div
              key={index}
              style={{
                display: "wrap",
                flexWrap: "nowrap",
                flex: "0 0 33.3333%",
                justifyContent: "space-evenly",
              }}
            >
              <Col style={{ margin: "0.5rem" }}>
                <Card
                  className="shadow"
                  style={{
                    width: "290px",
                    overflow: "hidden",
                    padding: "0px",
                    margin: "5px",
                  }}
                >
                  {/* Makes every cocktail click-able and navigates to the DrinkSelect-page */}
                  <Link to="/drinkselect" onClick={() => localStorage.clear()}>
                    <div style={{ overflow: "hidden" }}>
                      <img
                        className="cardImage"
                        src={imageUrl.img}
                        alt={`${imageUrl.name}`}
                        style={{
                          objectFit: "cover",
                          height: "300px",
                          width: "300px",
                        }}
                      />
                    </div>
                  </Link>
                  <Card.Body
                    className="d-flex flex-column mb-2"
                    style={{ padding: "0px 10px", height: "3rem" }}
                  >
                    <Card.Title className="d-flex justify-content-between align-items-baseline mt-3 fontBrown">
                      <span className="fs-5">{imageUrl.name}</span>
                      <span
                        className="fontBrown align-self-end"
                        style={{ minWidth: "4rem", textAlign: "right" }}
                      >
                        $9
                      </span>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default DrinkCarousel;
