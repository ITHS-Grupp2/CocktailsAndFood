import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hamburgerPic from "../img/hamburger.jpeg";

function FoodComponent() {
  const cardStyle = {
    width: "15rem",
    height: "20rem",
    backgroundImage: `url(${hamburgerPic})`,
    backgroundSize: "cover",
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title>Hamburger</Card.Title>
        <Card.Text>20 kr</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodComponent;
