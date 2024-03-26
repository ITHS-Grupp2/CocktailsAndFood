import React, { Component } from "react";
import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
import GinFizzImage from "../img/GinFizz.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DrinkCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg",
  },
  //Third image url
  {
    url: "https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg",
  },

  //Fourth image url

  {
    url: "https://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div key={index}>
              <img
                src={imageUrl.url}
                alt="movie"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img src={GinFizzImage} alt="GinFizz" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={GinFizzImage} alt="GinFizz" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={GinFizzImage} alt="GinFizz" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;

// interface ArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: React.MouseEventHandler<HTMLDivElement>;
//   onMouseEnter?: React.MouseEventHandler<HTMLDivElement>; // Add onMouseEnter event handler
// }

// function SampleNextArrow(props: ArrowProps) {
//   const { className, style, onMouseEnter } = props; // Change onClick to onMouseEnter
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onMouseEnter={onMouseEnter} // Change onClick to onMouseEnter
//     />
//   );
// }

// function SamplePrevArrow(props: ArrowProps) {
//   const { className, style, onMouseEnter } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onMouseEnter={onMouseEnter}
//     />
//   );
// }

// function DrinkCarousel() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="card">
//           <img src="../img/GinFizz.jpg" />
//         </div>
//         <div className="card">
//           <img src="./img/GinFizz.jpg" />
//         </div>
//         <div className="card">
//           <img src="./img/GinFizz.jpg" />
//         </div>
//         <div className="card">
//           <img src="./img/GinFizz.jpg" />
//         </div>
//         <div className="card">
//           <img src="./img/GinFizz.jpg" />
//         </div>
//         <div className="card">
//           <img src="../img/GinFizz.jpg" />
//         </div>
//       </Slider>
//     </div>
//   );
// }
