import { React, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import {Button, Placeholder, Form} from "react-bootstrap";

function ProductReview() {

       // PRODUCT REVIEWS
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
      // user: user.email,
  };
  console.log("commentObj", commentObj); //ok
}

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} placeholder="Leave a product review" 
    type="text" 
    value={comment} 
    onChange={handleComment}/>
     <Placeholder xs={12} bg="white" />
    <Button onClick={sendComment} variant="outline-primary">Submit review</Button>
</Form.Group>


  )
}

export default ProductReview