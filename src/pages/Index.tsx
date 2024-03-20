import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";

export const Index = () => {
  return (
    <>
      <h3>Våra Populära Burgare</h3>
      <Container className="m-2">
        <Row md={3} xs={2} className="g-3">
          <Col>
            <Card>Burgare 1</Card>
          </Col>
          <Col>
            <Card> Burgare 2</Card>
          </Col>
          <Col>
            <Card>Burgare 3</Card>
          </Col>
          <Col>
            <Card>Burgare 4</Card>
          </Col>
          <Col>
            <Card>Burgare 5</Card>
          </Col>
          <Col>
            <Card>Burgare 6</Card>
          </Col>
        </Row>
      </Container>
      <Container className="m-2">
        <Placeholder
          bg="primary"
          className="d-flex justify-content-center my-2">
          <h4>Veckans Cocktails</h4>
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
    </>
  );
};
