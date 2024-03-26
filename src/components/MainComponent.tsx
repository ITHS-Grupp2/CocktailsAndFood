import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hamburgerPic from "../img/hamburger.jpeg";
import hamburgerPic2 from "../img/maxBild2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { MainResponse, MainAPI } from "./FoodAPI";
import { Link } from "react-router-dom";

// En funktion som hämtar alla huvudrätter och populerar data-variabeln med dessa.
export function MainComponent() {
  const [mainCourses, setMainCourses] = useState<MainResponse[]>([]);

  useEffect(() => {
    const fetchMainCourses = async () => {
      const data = await MainAPI();
      setMainCourses(data);
    };

    fetchMainCourses();
  }, []);

  return (
    <>
      {mainCourses.map((course, index) => (
        <Card
          key={index}
          className="h-100"
          style={{
            width: "15rem",
            overflow: "hidden",
          }}>
          <Link to="/productinfoview">
            <Card.Img
              variant="top"
              src={course.imageUrl}
              style={{
                objectFit: "cover",
                height: "200px",
              }}
            />{" "}
          </Link>
          <Card.Body
            className="d-flex flex-column mb-2  "
            style={{ padding: "0px 10px", height: "4rem" }}>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
              <span className="fs-5 ">{course.title}</span>
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
