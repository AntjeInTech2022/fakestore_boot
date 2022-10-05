// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {useParams} from 'react-router-dom'



// function ProductDetails() {

//   let api = `https://fakestoreapi.com/products/§{id}`;
//   let {id} = useParams();

//   const [products, setProducts] = useState()

//   useEffect(() => {
//     (async function () {
//     let data = await fetch(api);
//     let response = await data.json()
//     setProducts(response)
//     console.log('response', response)
//     })();
//   },[]);

  

//   return (
//     <Card key={product.id} style={{ width: '18rem' }} className="text-center">
//     <Card.Img variant="top" src={response.image} />
//     <Card.Body>
//       <Card.Title>{product.title}</Card.Title>
//       <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
//       <Card.Text>{product.description}</Card.Text>
//       <Button variant="primary">Add to cart</Button> 
//     </Card.Body>
//     <Card.Footer className="text-muted">Rating: {product.rating.rate}</Card.Footer>
//   </Card>);
// }

// export default ProductDetails;
