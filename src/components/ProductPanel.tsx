import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Button>Add to cart</Button>
      </>
    );
}