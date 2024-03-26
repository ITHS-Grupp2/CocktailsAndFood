import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

type Cocktail = {
  url: string;
  name: string;
  price: number;
};

const cocktailUrl: Cocktail[] = [
  {
    url: "https://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
    name: "Lemon Shot",
    price: 12,
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg",
    name: "Gin & Soda",
    price: 8,
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg",
    name: "Tom Collins",
    price: 7,
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    name: "Negroni",
    price: 9,
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
    name: "Gin Fizz",
    price: 11,
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
    name: "Vodka Martini",
    price: 15,
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
        centerMode={true}
        autoPlaySpeed={2000}
      >
        {cocktailUrl.map((imageUrl, index) => {
          return (
            <div key={index}>
              <Link to="/drinkselect">
                <img
                  src={imageUrl.url}
                  style={{
                    width: "250px",
                    height: "250px",
                  }}
                />
              </Link>
              <h3>{`${imageUrl.name}`}</h3>
              <p>{`${imageUrl.price}$`}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DrinkCarousel;
