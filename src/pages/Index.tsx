import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";

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
          <Container>
            <Row md={3} xs={2} lg={3} className="g-3">
              <MainComponent />
            </Row>
          </Container>
          <Container className="m-2">
            <Placeholder
              bg="primary"
              className="d-flex justify-content-center my-2"
            >
              <h4>Cocktails:</h4>
            </Placeholder>
          </Container>
        </Col>
        <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col>
      </Row>
      <Container>
        <DrinkCarousel />
      </Container>
    </>
  );
};
