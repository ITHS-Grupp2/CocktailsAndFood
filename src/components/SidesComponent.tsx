import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FoodAPI } from "../API/FoodAPI";

// En funktion som hämtar alla sides och populerar data-variabeln med dessa.
export const SidesComponent = () => {
  const sides = FoodAPI("sides");
  return (
    <Container>
      <h2>Select sides</h2>
      <Row>
        {sides.map((sides, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={sides.imageUrl} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                  <span className="fs-5 ">{sides.title} </span>
                  <span
                    className="text-muted align-self-end"
                    style={{ minWidth: "4rem", textAlign: "right" }}
                  >
                    ${sides.price}
                  </span>
                </Card.Title>
              </Card.Body>
            </Card>
            <Button className="mt-2">Add to cart</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
