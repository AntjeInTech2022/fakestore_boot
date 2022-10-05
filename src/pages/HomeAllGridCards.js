import {useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'




function HomeAllGridCards() {

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
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <p className='text-truncate'>{product.description}</p>
              {/* <Button onClick={()=> setSearchParams({pdp:'1'})}>Show more</Button>  */}
              <Link to={"/pdp:id"}>Show more</Link> 
            </Card.Body>
          </Card>
         </Col>
      ))}
    </Row>

  );
}

export default HomeAllGridCards;