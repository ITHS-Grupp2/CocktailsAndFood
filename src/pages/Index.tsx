import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";
import { VideoFriesComponent } from "../components/VideoFriesComponent";

export const Index = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            gridColumn: "1",
            width: "300px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <VideoFriesComponent />
        </div>
        <div style={{ gridColumn: "2" }}>
          <div
            className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm mb-5"
            style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
          >
            <h1 className="text-center" style={{ marginBottom: "0px" }}>
              Most popular burgers
            </h1>
          </div>
          <div className="center-page-items mx-4">
            <Row>
              <Col md="auto">
                <Container>
                  <div
                    style={{
                      margin: "0",
                    }}
                  >
                    <MainComponent />
                  </div>
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
