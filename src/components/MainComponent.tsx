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

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FoodAPI } from "../API/FoodAPI";
import { Link } from "react-router-dom";

// Function to group items into arrays of given size
const groupItems = (arr, size) => {
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
        //<Row key={index} md={3} xs={2} lg={3} className="g-3">
        <div
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
                <Link to="/productinfoview">
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
        //</Row>
      ))}
    </Container>
  );
}
