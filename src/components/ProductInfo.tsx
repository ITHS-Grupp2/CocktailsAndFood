import { Container, Col, Row, Button } from "react-bootstrap";


export const ProductInfo = () => {
  return (
    <>
      <h2>Product Name</h2>
      <Container>
        <Row>
          <Col>
            <img src="https://placehold.co/400x400"></img>
            <Row>
              <Col>
                <span>Price: 200 $</span>
              </Col>
              <Col>
                <Button>Add to Cart</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <p>
                <strong>Ingredients</strong>
                <br />
                Here's room for all the ingredients
              </p>
            </Row>
            <Row>
              <p>
                <strong>More Information</strong>
                <br />
                Information about the burger goes here.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
