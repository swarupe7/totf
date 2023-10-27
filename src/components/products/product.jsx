import React from "react";
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./styles.css";

const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} style={{width:"378px",height:"252px"}} />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>
            <p>{props.cardDec}</p>
          </Card.Text>
          <div className="product-actions" >
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
