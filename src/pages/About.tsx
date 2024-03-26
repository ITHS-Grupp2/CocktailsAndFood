import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../assets/people.json";

export const About = () => {
  function Test(firstName: string, lastName: string, imgsrc: string) {
    return (
      <Card
        style={{
          overflow: "hidden",
          padding: "0px",
        }}>
        <Card.Img
          src={imgsrc}
          variant="top"
          style={{
            objectFit: "cover",
            height: "250px",
            width: "auto",
          }}></Card.Img>
        <Card.Body>
          <Card.Title>
            <p>
              {firstName}
              <span> </span>
              {lastName}
            </p>
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
  const itpRows = [];

  const devRows = [];
  for (let i = 0; i < data.developers.length; i++) {
    devRows.push(
      <Col>
        {Test(
          data.developers[i].firstName,
          data.developers[i].lastName,
          data.developers[i].img
        )}
      </Col>
    );
  }
  for (let i = 0; i < data.projectLeaders.length; i++) {
    itpRows.push(
      <Col>
        {Test(
          data.projectLeaders[i].firstName,
          data.projectLeaders[i].lastName,
          data.projectLeaders[i].img
        )}
      </Col>
    );
  }
  return (
    <Container>
      <h1>About</h1>
      <Container className="align-items-center">
        <h4>Project Leaders</h4>
        <Row lg={4} md={3} xs={2} className="g-3 p-2">
          {itpRows}
        </Row>
        <Row>
          <h4>Developers</h4>
        </Row>

        <Row lg={4} md={3} xs={2} className="g-3 p-2">
          {devRows}
        </Row>
      </Container>
    </Container>
  );
};
