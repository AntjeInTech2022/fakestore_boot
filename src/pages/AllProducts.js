import {useEffect, useState, useContext } from 'react'

import { Button, OverlayTrigger, Tooltip, Card, Col, Row, Placeholder } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { BsBookmark, BsCartPlus  } from "react-icons/bs";
import '../App.css';

//context
import { ProductsContext } from '../context/dataContext';
import WishlistBTN from '../components/add2WishlistBTN';



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
    // const renderTooltipBookmark = (props) => (
    //   <Tooltip id="button-tooltip1" {...props}>
    //     Save item to favorites
    //   </Tooltip>
    // );

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
              
              {/* <OverlayTrigger
                placement="top"
                overlay={renderTooltipBookmark}> */}
                {/* <Button onClick={add2Wishlist} variant="successwhite"><BsBookmark className='bookmark'/></Button> */}
             <WishlistBTN product={product}/>
               {/* </OverlayTrigger>  */}

                <OverlayTrigger
                placement="top"
              
                overlay={renderTooltipCart}>
                <Button variant="white"><BsCartPlus className="BsCartPlus"/></Button>
              </OverlayTrigger>
              
       
            </Card.Body>

          </Card>
     
         </Col>
          
      ))}
      <p aria-hidden="true">
          <Placeholder xs={12} bg="white" />
        </p>
    </Row>
    
   

  );
}

export default AllProducts;