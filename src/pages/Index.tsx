import { Card, Container, Placeholder, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";

export const Index = () => {
  return (
    <>
<div
                className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
                style={{ fontFamily: "Arial, sans-serif", height: "100px" }}>
                <h1
                    className="text-center"
                    style={{ marginBottom: "0px" }}>
                    Most popular burgers
                </h1>
            </div>


    <div className="center-page-items">
      <Row >
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
        {/* <Col>
          <div className="h-100 bg-danger" style={{ width: "100px" }}>
            Film
          </div>
        </Col> */}
      </Row>
      </div>
    </>
  );
};
