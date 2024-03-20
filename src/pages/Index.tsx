import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";
import FoodComponent from "../components/FoodComponent";

export const Index = () => {
  return (
    <>
      <h3>Most popular burgers</h3>
      <Row>
        <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col>
        <Col md="auto">
          <Container className="m-2">
            <Row md={3} xs={2} className="g-3">
              <Col>
                <FoodComponent />
              </Col>
              <Col>
                <FoodComponent />
              </Col>
              <Col>
                <FoodComponent />
              </Col>
              <Col>
                <FoodComponent />
              </Col>
              <Col>
                <FoodComponent />
              </Col>
              <Col>
                <FoodComponent />
              </Col>
            </Row>
          </Container>
          <Container className="m-2">
            <Placeholder
              bg="primary"
              className="d-flex justify-content-center my-2"
            >
              <h4>Cocktails of the week</h4>
            </Placeholder>
            <Row xs={2} md={3} className="g-3">
              <Col>
                <Card>Cocktail 1</Card>
              </Col>
              <Col>
                <Card>Cocktail 2</Card>
              </Col>
              <Col>
                <Card>Cocktail 3</Card>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col>
      </Row>
    </>
  );
};
