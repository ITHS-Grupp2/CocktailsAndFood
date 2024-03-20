import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const ProductPanel = (props:{label:string}) => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(
        <Col>
          <Card>Side {i}</Card>
        </Col>
      );
    }
  
    return (
      <>
        <h3>{props.label}</h3>
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