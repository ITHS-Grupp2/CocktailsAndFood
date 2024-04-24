import { Container, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";
import { PageTracker } from "../services/PageHistoryService";

export const Index = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
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
          <h2 style={{ marginBottom: "0px" }}>Drinks of the Month</h2>
        </Container>
        <Container style={{ marginTop: "30px" }}>
          <DrinkCarousel />
        </Container>
      </div>
    </>
  );
};

// 1176 x 1530
