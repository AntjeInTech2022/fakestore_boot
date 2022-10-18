import { React, useEffect, useState, useContext } from "react";
import {Button, Placeholder} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import Stack from 'react-bootstrap/Stack';
import Figure from 'react-bootstrap/Figure';
import { BsBookmark, BsCartPlus } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { AuthContext } from "../context/authContext";
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

     // Product Review
    const {user} = useContext(AuthContext);
    const [comment, setComment] =useState("")

    const handleComment = (e) => {
      setComment(e.target.value);
  };

  const sendComment = async() => {
  //what do we want to store? text + time + user
  const commentObj = {
      text: comment,
      date: new Date(), //creates the current date
      user: user.email,
  };
  console.log("commentObj", commentObj); //ok

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

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
        <Form.Control as="textarea" rows={3} placeholder="Leave a product review" 
        type="text" 
        value={comment} 
        onChange={handleComment}/>
    </Form.Group>

    <Button onClick={sendComment} variant="outline-primary">Submit review</Button>
   
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
}}

export default ProductDetails;
