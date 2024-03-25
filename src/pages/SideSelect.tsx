import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ProductPanel } from "../components/ProductPanel";

const testLabels = ["Card 1", "Card 2", "Card-e-mom", "Card 4", "Card Test", "Another Card"];

export const SideSelect = () => {
  return (
    <>
      <ProductPanel panelLabel="Select sides" labels={testLabels}/>
    </>
  );
};
