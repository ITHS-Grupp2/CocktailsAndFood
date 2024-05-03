import { Container, Row, Col } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";
import { PageTracker } from "../services/PageHistoryService";

export const Index = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <div className="headerSmaller, first" style={{ margin: "30px 0px" }}>
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            Most Popular Burgers
          </h1>
        </div>

        <div className="center-page-items">
          <MainComponent />
          <Container className="headerSmaller, second">
            <h2 style={{ marginBottom: "0px" }}>Drinks of the Month!</h2>
          </Container>
          <Container style={{ marginTop: "30px" }}>
            <DrinkCarousel />
          </Container>
        </div>
      </div>
    </>
  );
};
