import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hamburgerPic from "../img/hamburger.jpeg";
import hamburgerPic2 from "../img/maxBild2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// OBS gör komponenten klickbar, med en länk till produktsidan när vi kommit så långt
function FoodComponent() {
  return (
    <Card className="h-100" style={{ width: "15rem", overflow: "hidden" }}>
      <Card.Img
        variant="top"
        src={hamburgerPic2}
        style={{
          objectFit: "cover",
          width: "120%",
          marginLeft: "-13%",
        }}
      />
      <Card.Body
        className="d-flex flex-column mb-2"
        style={{ padding: "0px 10px" }}
      >
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
          <span className="fs-5">Baconburgare utan bacon</span>
          {/* Spannet kan inte ha för lång text utan mellanrum, då "väller" det ut */}
          <span
            className="text-muted align-self-end"
            style={{ minWidth: "4rem", textAlign: "right" }}
          >
            100 kr
          </span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export function FoodContainer() {
  return (
    <div
      id="food-grid"
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <FoodComponent />
      <FoodComponent />
      <FoodComponent />
      <FoodComponent />
      <FoodComponent />
      <FoodComponent />
    </div>
  );
}

export default FoodContainer;
