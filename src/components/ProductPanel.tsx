import { Card, Col, Container, Row } from "react-bootstrap";
import { NavigationButton } from "./NavigationButton"

// A function that creates cards based on the amount of sides and adds a button that navigates to drink
export const ProductPanel = (props:{panelLabel:string, labels:string[]}) => {
    const rows = [];
    for (let i = 0; i < props.labels.length; i++) {
      rows.push(
        <Col>
          <Card>Side {i} {props.labels[i]}</Card>
        </Col>
      );
    }
  
    return (
      <>
        <h3>{props.panelLabel}</h3>
        <Container className="m-2">
          {
            <Row md={5} xs={3} className="g-3">
              {rows}
            </Row>
          }
        </Container>
        <NavigationButton navigationPath="/drinkselect"></NavigationButton>
      </>
    );
}