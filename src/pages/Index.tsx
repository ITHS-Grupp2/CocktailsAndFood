import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";

export const Index = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
        style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
      >
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Most popular burgers
        </h1>
      </div>

      <div className="center-page-items">
        <Row>
          {/* <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col> */}
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
          {/* <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col> */}
        </Row>
        <Container>
          <DrinkCarousel />
        </Container>
      </div>
    </>
  );
};
