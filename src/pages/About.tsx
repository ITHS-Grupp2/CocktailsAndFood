import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../assets/people.json";
import { PageTracker } from "../services/PageHistoryService";

export const About = () => {
  const itpRows = [];
  const devRows = [];

  function GetPersonCard(
    firstName: string,
    lastName: string,
    nickName: string,
    imgsrc: string
  ) {
    return (
      <Card
        style={{
          overflow: "hidden",
          padding: "0px",
          height: "385px",
        }}>
        <Card.Img
          src={imgsrc}
          variant="top"
          className="cardImage"
          alt="Picture of a team member"
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
            <p>
              <i style={{fontSize:"80%",fontWeight:"300"}}>{nickName}</i>
            </p>
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }

  for (let i = 0; i < data.developers.length; i++) {
    devRows.push(
      <Col>
        {GetPersonCard(
          data.developers[i].firstName,
          data.developers[i].lastName,
          data.developers[i].nickName,
          data.developers[i].img
        )}
      </Col>
    );
  }
  for (let i = 0; i < data.projectLeaders.length; i++) {
    itpRows.push(
      <Col>
        {GetPersonCard(
          data.projectLeaders[i].firstName,
          data.projectLeaders[i].lastName,
          data.projectLeaders[i].nickName,
          data.projectLeaders[i].img
        )}
      </Col>
    );
  }
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <div className="headerSmaller first">
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            About Us
          </h1>
        </div>

        <div className="aboutUsBox">
          Hello there fiddling sizzle nizzlers. We are the crazy dev-team
          creating this insane burger-site just for your hungry needs.
          <br />
          <br />
          We can do backflips.
        </div>

        <div className="headerSmaller second" style={{ width: "100%" }}>
          <h4>Project Leaders</h4>
        </div>
        <Container style={{ textAlign: "center" }}>
          <Row
            lg={4}
            md={3}
            xs={2}
            className="g-3 p-2 justify-content-center text-start">
            {itpRows}
          </Row>
          <div className="headerSmaller second">
            <h4>Developers</h4>
          </div>

          <Row
            lg={4}
            md={3}
            xs={2}
            className="g-3 p-2 justify-content-center text-start">
            {devRows}
          </Row>
        </Container>
      </div>
    </>
  );
};
