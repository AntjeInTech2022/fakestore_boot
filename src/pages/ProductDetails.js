import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function ProductDetails() {
  
    let { id } = useParams();
    let api = `https://fakestoreapi.com/products/${id}`;
  
  console.log(id)
  

  const [product, setProduct] = useState();

  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let response = await data.json();
      setProduct(response);
      console.log("response", response);
    })();
  }, []);

  return (

     product ?
    <Card key={product.id} style={{ width: '18rem' }}>
    {/* <Card.Img top width="100%" variant="top" src={product.image} /> */}
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
      <Card.Text>{product.description}</Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
    <Card.Footer className="text-muted">Rating: {product.rating.rate}</Card.Footer>
  </Card>:
  <p>not found</p>
  );
}

export default ProductDetails;
