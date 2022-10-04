import {useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pdp from './ProductDetails';


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

  // let navigate = useNavigate();


  return (
    <Row xs={2} md={5} className="g-4">
      {/* 'products &&' is a condition meaning: do if products  != null */}
      {products && products.map((product, i) => (
        <Col key={product.id} >
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              {/*  <Button onClick={()=>{
                navigate("/pdp")
              }}> 
                 Show more</Button> */}
              <Link to={"/pdp:id"}>Show more</Link> 
            </Card.Body>

      

          </Card>

         </Col>
      ))}
    </Row>

  );
}

export default HomeAllGridCards;