// import Card from "react-bootstrap/Card";
// import { FoodAPI } from "../API/FoodAPI";
// import { Link } from "react-router-dom";

// // En funktion som hämtar alla huvudrätter och populerar data-variabeln med dessa.
// export function MainComponent() {
//   const mainCourses = FoodAPI("main");
//   return (
//     <>
//       {mainCourses.map((course, index) => (
//         <Card
//           key={index}
//           className="shadow"
//           style={{
//             width: "300px",
//             overflow: "hidden",
//             padding: "0px",
//             margin: "5px"
//           }}>

//           <Link to="/productinfoview">
//             <Card.Img
//               variant="top"
//               src={course.imageUrl}
//               style={{
//                 objectFit: "cover",
//                 height: "300px",
//                 width: "300px",
//               }}
//             />
//           </Link>

//           <Card.Body
//             className="d-flex flex-column mb-2"
//             style={{ padding: "0px 10px", height: "3rem" }}>

//             <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
//               <span className="fs-5">{course.title}</span>
//               <span
//                 className="text-muted align-self-end"
//                 style={{ minWidth: "4rem", textAlign: "right" }}>
//                 ${course.price}
//               </span>
//             </Card.Title>

//           </Card.Body>

//         </Card>
//       ))}
//     </>
//   );
// }

// MAT IDS:
/*
Gluten Free Burger With Bacon + 65fd96c529f983c33c7ec9c2
Greasy Burger + 65fd96f229f983c33c7eca00
Chicken Burger + 65fd976a29f983c33c7eca37
Olive Burger + 65fd978129f983c33c7eca55
Spicy Chicken Burger + 65fd97b729f983c33c7eca9e
Healthy Burger with Salad + 65fd98ca29f983c33c7ece4a


*/
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { Link } from "react-router-dom";

// Function to group items into arrays of given size
const groupItems = (arr:MainResponse[], size:number) => {
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
    <Container>
      {groupedMainCourses.map((group, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flex: "0 0 33.3333%",
            justifyContent: "space-evenly",
          }}
        >
          {group.map((course, innerIndex) => (
            <Col key={innerIndex} style={{ margin: "25px" }}>
              <Card
                className="shadow"
                style={{
                  width: "300px",
                  overflow: "hidden",
                  padding: "0px",
                  margin: "5px",
                }}
              >
                <Link to={`/productinfoview/${course._id}`}>
                  <Card.Img
                    variant="top"
                    src={course.imageUrl}
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "300px",
                    }}
                  />
                </Link>
                <Card.Body
                  className="d-flex flex-column mb-2"
                  style={{ padding: "0px 10px", height: "3rem" }}
                >
                  <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-5">{course.title}</span>
                    <span
                      className="text-muted align-self-end"
                      style={{ minWidth: "4rem", textAlign: "right" }}
                    >
                      ${course.price}
                    </span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      ))}
    </Container>
  );
}
