import { Container } from "react-bootstrap";
import { MainComponent } from "../components/MainComponent";
import DrinkCarousel from "../components/DrinkCarousel";
import { PageTracker } from "../services/PageHistoryService";

export const Index = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <div className="headerSmaller first">
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            Most Popular Burgers
          </h1>
        </div>

        <div className="center-page-items">
          <MainComponent />
          <div className="headerSmaller second" style={{ width: "100%" }}>
            <h2 style={{ marginBottom: "0px" }}>Drinks of the Month!</h2>
          </div>
          <Container style={{ marginTop: "30px" }}>
            <DrinkCarousel />
          </Container>
        </div>
      </div>
    </>
  );
};
