import { React, useEffect, useState} from "react";
import {Button, Placeholder, Form, Stack,Figure, Card, Container, CloseButton} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { BsBookmark, BsCartPlus } from "react-icons/bs";
import ProductReview from "../components/ProductReview";
import '../App.css';

function ProductDetails() {
  
  // Data Fetching
    let { id } = useParams();
    let api = `https://fakestoreapi.com/products/${id}`;
  
  const [product, setProduct] = useState();

  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let response = await data.json();
      setProduct(response);
      console.log("response", response);
    })();
  }, []);

    // Button routing
    let navigate = useNavigate();




  return (

     product ?
<Container fluid>

<Stack gap={3}> 

<div className="closebtn_div">

<CloseButton onClick={()=>navigate("/")}/>
</div>

      <div>
      <Figure key={product.id}>
      <Figure.Image
        width={250}
        height={250}
        alt="171x180"
        src={product.image} 
      />

    </Figure>
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

    <Placeholder xs={12} bg="white" />
 <ProductReview/>
 
    </Card.Body>    
  </Card>

  <p aria-hidden="true">
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
      </p>
      </div>

      <div>
      </div>
   
    
    </Stack>
</Container>: <p>not found</p>
  );
}

export default ProductDetails;
