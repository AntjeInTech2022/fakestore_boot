import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Pdp() {

    let id=useParams();
    console.log('productId', productId)

    let api = `https://fakestoreapi.com/products/${id}`;

  

    useEffect(() => {
      (async function () {
    let data = await fetch(api);
    let response = await data.json()
    setProducts(response)
    console.log('response', response)
      })();
    },[]);


  return (
    products && products.map((product, i) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    ))


export default Pdp

