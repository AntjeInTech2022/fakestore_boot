import {useEffect, useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { BsBookmark, BsCartPlus  } from "react-icons/bs";
import '../App.css';
import Banner from '../components/Banner/Banner';
//context
import { ProductsContext } from '../context/dataContext';



function AllProducts() {
  const { products } = useContext(ProductsContext)

  // Fetch data
//   let api = `https://fakestoreapi.com/products`;

//   const [products, setProducts] = useState(null)
//   useEffect(() => {
//     (async function () {
// let data = await fetch(api);
// let response = await data.json()
// setProducts(response)
// console.log('response', response)
//     })();
//   },[]);

  // Button routing
    let navigate = useNavigate();

  // Tooltips
    const renderTooltipBookmark = (props) => (
      <Tooltip id="button-tooltip1" {...props}>
        Save item to favorites
      </Tooltip>
    );

    const renderTooltipCart = (props) => (
      <Tooltip id="button-tooltip2" {...props}>
        Add to cart
      </Tooltip>
    );


  return (
  
    <Row xs={1} md={4} className="g-4">
      {/* 'products &&' is a condition meaning: do if products  != null */}
      {products && products.map((product, i) => (
        <Col key={product.id} >
          {/* <Link className='text-link' to={`/product/${product.id}`}> */}
          <Card>
         {/* <Card.Header as="h6" > */}
          {/* </Card.Header>  */}
            <Card.Img className="Image" variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
              <Card.Text className="text-truncate">{product.description}</Card.Text>
              <Button onClick={()=>navigate(`/product/${product.id}`)} variant="danger">Show more</Button>
              
              <OverlayTrigger
                placement="top"
                // delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipBookmark}>
                <Button variant="successwhite"><BsBookmark className='bookmark'/></Button>
              </OverlayTrigger>

                <OverlayTrigger
                placement="top"
                // delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipCart}>
                <Button variant="white"><BsCartPlus className="BsCartPlus"/></Button>
              </OverlayTrigger>
              
              
              
            {/* <Link to={`/product/${product.id}`}>Show /product/${product.id}</Link>  */}
            </Card.Body>
            {/* <Card.Footer>
          <small className="text-muted"> Rating: {product.rating.rate}</small>
        </Card.Footer> */}
          </Card>
          {/* </Link> */}
         </Col>
         
      ))}
    </Row>

  );
}

export default AllProducts;