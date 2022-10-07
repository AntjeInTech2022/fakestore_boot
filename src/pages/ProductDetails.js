import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Figure from 'react-bootstrap/Figure';
import { BsBookmark, BsCartPlus } from "react-icons/bs";
import Form from 'react-bootstrap/Form';

import '../App.css';

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
<Container fluid>
<Stack gap={3}>
      <div>
      <Figure key={product.id}>
      <Figure.Image
        width={342}
        height={489.03}
        alt="171x180"
        src={product.image} 
      />
    </Figure>
    {/* <Figure.Caption>
    <BsBookmark className='bookmark'/>
      </Figure.Caption> */}
      </div>

      <div>
      <Card key={product.id}>
    <Card.Body>
       <Card.Title>{product.title}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
       <Card.Text>{product.description}</Card.Text>
       <>
       <Form.Select className="SelectSize" aria-label="Choose Size" disabled>
      <option>Choose Size</option>
      <option value="1">Small</option>
      <option value="2">Medium</option>
      <option value="3">Large</option>
    </Form.Select>
    </>
       <Button variant="danger">Add to cart</Button><BsBookmark className='bookmark'/>
              <BsCartPlus className="BsCartPlus"/> 
    </Card.Body>
     {/* <Card.Footer className="text-muted">Product rating: {product.rating.rate} / 5</Card.Footer> */}
  </Card>
      </div>

      <div>
      </div>
   
    
    </Stack>
</Container>:

  //    <Container fluid="md">
  //    <Row>
  //      <Col key={product.id}> 
  //      <Card.Body>
  //      <Card.Img src={product.image} />
  //   </Card.Body>
  //   </Col>
  //      <Col><Card key={product.id}>
  //   <Card.Body>
  //     <Card.Title>{product.title}</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
  //     <Card.Text>{product.description}</Card.Text>
  //     <Button variant="primary">Add to cart</Button>
  //   </Card.Body>
  //   <Card.Footer className="text-muted">Product rating: {product.rating.rate}</Card.Footer>
  // </Card></Col>
  //    </Row>
  //  </Container>:

  //   <Card key={product.id} style={{ width: '18rem' }}>
  //   {/* <Card.Img top width="100%" variant="top" src={product.image} /> */}
  //   <Card.Body>
  //     <Card.Title>{product.title}</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
  //     <Card.Text>{product.description}</Card.Text>
  //     <Button variant="primary">Add to cart</Button>
  //   </Card.Body>
  //   <Card.Footer className="text-muted">Product rating: {product.rating.rate}</Card.Footer>
  // </Card>:
  <p>not found</p>
  );
}

export default ProductDetails;
