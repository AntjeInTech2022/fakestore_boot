import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useParams } from 'react-router-dom'


function Pdp() {

  console.log('useParams',useParams()); // not working
  let {id} = useParams();



  return (
    
    <Card key={id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://picsum.photos/200/300" />
    <Card.Body>
    <h2> Product - {id}</h2>
      <Card.Title>product.title</Card.Title>
      <Card.Text>
      product.description
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
    )};

export default Pdp;
