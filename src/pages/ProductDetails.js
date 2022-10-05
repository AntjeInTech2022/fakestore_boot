import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import {useParams, useSearchParams } from 'react-router-dom'


function Pdp() {

  // let api = `https://fakestoreapi.com/products/1`;

  // const [products, setProducts] = useState(null)
//   useEffect(() => {
//     (async function () {
// let data = await fetch(api);
// let response = await data.json()
// // setProducts(response)
// console.log('response', response)
//     })();
//   },[]);


  return (
  
  //   <Card key={product.id} style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={response.image} />
  //   <Card.Body>
  //     <Card.Title>{response.title}</Card.Title>
  //     <Card.Text>{response.description}</Card.Text>
  //     <Button variant="primary">Add to cart</Button> 
  //   </Card.Body>
  // </Card>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
<Card.Body>
  <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
  <Card.Text>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</Card.Text>
  <Button variant="primary">Add to cart</Button> 
</Card.Body>
</Card>

  );
}
  
   

export default Pdp;
