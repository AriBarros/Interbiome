import "./Card.css";
import React from "react";
import Card from "react-bootstrap/Card";

function CardItem({ cardText, tagText, srcImage, colorText, misc=false }) {
  return (
    <Card className={`${misc ? "card-misc" : "card-product"}`}>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
      {!misc && <Card.Footer
        className="card-product__footer"
        style={{ backgroundColor: colorText }}
      >
        <h4>{tagText}</h4>
      </Card.Footer>}
    </Card>
  );
}

export default CardItem;
