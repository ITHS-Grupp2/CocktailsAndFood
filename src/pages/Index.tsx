import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";

export const Index = () => {
  return (
    <>
      <h3>Most popular burgers</h3>
      <Container className="m-2">
        <Row md={3} xs={2} className="g-3">
          <Col>
            <Card>Burger 1</Card>
          </Col>
          <Col>
            <Card>Burger 2</Card>
          </Col>
          <Col>
            <Card>Burger 3</Card>
          </Col>
          <Col>
            <Card>Burger 4</Card>
          </Col>
          <Col>
            <Card>Burger 5</Card>
          </Col>
          <Col>
            <Card>Burger 6</Card>
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
      <div></div>
    </>
  );
};
