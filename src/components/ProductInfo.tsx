import { Container, Col, Row } from "react-bootstrap";
import { NavigationPath, NavigationButton } from "./NavigationButton";

// export type ProductType = "Cocktail" | "Main" | "Sides";

export type ProductInfoData = {
  id: string;
  productType: string;
  title: string;
  imgSrc: string;
  ingredients: string[];
  information: string;
  price: number;
  navigationPath: NavigationPath;
};

export const ProductInfo = (data: ProductInfoData) => {
  return (
    <>
      <h2>{data?.title}</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={
                data.imgSrc === "" ? "https://placehold.co/400x400" : data.imgSrc
                
              }  style={{ width: "400px", height: "400px" }}></img>
            <Row>
              <Col>
                <span>Price: {data?.price} $</span>
              </Col>
              <Col>
                <NavigationButton
                  navigationPath={data.navigationPath}
                  id={data.id}></NavigationButton>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <p>
                <strong>Ingredients</strong>
                <br />
                {data.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </p>
            </Row>
            <Row>
              <p>
                <strong>More Information</strong>
                <br />
                {data?.information}
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
