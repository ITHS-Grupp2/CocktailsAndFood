import { Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { Link } from "react-router-dom";

// Function to group items into arrays of given size
const groupItems = (arr: MainResponse[], size: number) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

// Main component to render food items
export function MainComponent() {
  const mainCourses = FoodAPI("main");
  const groupedMainCourses = groupItems(mainCourses, 3); // Group main courses into arrays of 3

  return (
    <div style={{paddingBottom:"20px"}}>
      {groupedMainCourses.map((group, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flex: "0 0 33.3333%",
            justifyContent: "space-evenly",
      
          }}>
          {group.map((course, innerIndex) => (
            <Col key={innerIndex} style={{ margin: "0.5rem" }}>
              <Card
                className="shadow"
                style={{
                  width: "300px",
                  overflow: "hidden",
                  padding: "0px",
                  margin: "5px",
                }}>
                <Link to={`/productinfoview/${course._id}`}>
                  <div style={{ overflow: "hidden" }}>
                    <img
                      className="cardImage"
                      src={course.imageUrl}
                      alt={`${course.title}`}
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
                  style={{ padding: "0px 10px", height: "3rem" }}>
                  <Card.Title className="d-flex justify-content-between align-items-baseline mt-2">
                    <span className="fs-5">{course.title}</span>
                    <span
                      className="text-muted"
                      style={{ minWidth: "4rem", textAlign: "right" }}>
                      ${course.price}
                    </span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      ))}
      </div>
  );
}
