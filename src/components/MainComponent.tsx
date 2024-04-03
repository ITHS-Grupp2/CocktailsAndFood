import Card from "react-bootstrap/Card";
import { FoodAPI } from "../API/FoodAPI";
import { Link } from "react-router-dom";

// En funktion som hämtar alla huvudrätter och populerar data-variabeln med dessa.
export function MainComponent() {
  const mainCourses = FoodAPI("main");
  return (
    <>
      {mainCourses.map((course, index) => (
        <Card
          key={index}
          className="shadow roundedStandard"
          style={{
            width: "300px",
            overflow: "hidden",
            padding: "0px",
            margin: "5px"
          }}>
          <div  style={{overflow: "hidden",}}>
            <Link to="/productinfoview">
              <img 
                className="cardImage"
                src={course.imageUrl}
                style={{
                  objectFit: "cover",
                  height: "300px",
                  width: "300px",
                }}
              />
            </Link>
          </div>
          <Card.Body
            className="d-flex flex-column mb-2 bg-light"
            style={{ padding: "0px 10px", height: "3rem" }}>

            <Card.Title className="d-flex justify-content-between align-items-baseline mb-2 p-1">
              <span className="fs-5">{course.title}</span>
              <span
                className="text-muted align-self-end"
                style={{ minWidth: "4rem", textAlign: "right" }}>
                ${course.price}
              </span>
            </Card.Title>

          </Card.Body>
          
        </Card>
        
      ))}
    </>
  );
}
