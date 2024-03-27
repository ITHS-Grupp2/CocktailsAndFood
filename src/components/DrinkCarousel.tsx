import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Cocktail } from "../API/CocktailFetch";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
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

const DrinkCarousel = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        infinite={true}
        partialVisible={false}
        transitionDuration={2000}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        centerMode={true}
        autoPlaySpeed={2000}
      >
        {cocktailUrl.map((imageUrl, index) => {
          return (
            <div
              key={index}
              style={{
                width: "70%",
              }}
            >
              {/* <Link to="/drinkselect">  */}
              <img
                src={imageUrl.img}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              {/* </Link> */}
              <h3>{`${imageUrl.name}`}</h3>
              <p>$9.99</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DrinkCarousel;
