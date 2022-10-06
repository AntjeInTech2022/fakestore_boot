import {useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'




function AllProducts() {

  let api = `https://fakestoreapi.com/products`;

  const [products, setProducts] = useState(null)
  useEffect(() => {
    (async function () {
let data = await fetch(api);
let response = await data.json()
setProducts(response)
console.log('response', response)
    })();
  },[]);




  return (
    <Row xs={2} md={5} className="g-4">
      {/* 'products &&' is a condition meaning: do if products  != null */}
      {products && products.map((product, i) => (
        <Col key={product.id} >
          <Link className='text-link' to={`/product/${product.id}`}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className='text-truncate'>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
              <Card.Text className='text-truncate'>{product.description}</Card.Text>
              <Button to={`/product/${product.id}`} variant="danger">Show more</Button>
            {/* <Link to={`/product/${product.id}`}>Show /product/${product.id}</Link>  */}
            </Card.Body>
          </Card>
          </Link>
         </Col>
         
      ))}
    </Row>
    

  );
}

export default AllProducts;