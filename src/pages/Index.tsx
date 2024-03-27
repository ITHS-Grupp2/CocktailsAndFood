import { Container, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";
import { VideoFriesComponent } from "../components/VideoFriesComponent";

export const Index = () => {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}>
        <div
          style={{
            gridColumn: "1",
            width: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <VideoFriesComponent />
        </div>
        <div style={{ gridColumn: "2" }}>
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
              <Col md="auto">
                <Container>
                  <Row md={3} xs={2} lg={3} className="g-3">
                    <MainComponent />
                  </Row>
                </Container>
                <Container className="m-2">
                  <h4>Cocktails:</h4>
                </Container>
              </Col>
            </Row>
            <Container>
              <DrinkCarousel />
            </Container>
          </div>
        </div>
        <div style={{ gridColumn: "3" }}>
          <VideoFriesComponent />
        </div>
      </div>
    </>
  );
};
