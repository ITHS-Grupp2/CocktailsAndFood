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
          <div className="headerSmaller" style={{ margin: "30px 0px" }}>
            <h1 className="text-center" style={{ marginBottom: "0px" }}>
              Most Popular Burgers
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
              </Col>
            </Row>
            <Container className="headerSmaller">
              <h2>Drinks of the Month</h2>
            </Container>
            <Container style={{ marginTop: "30px" }}>
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
