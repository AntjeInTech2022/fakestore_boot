import {React, useContext, useState, useEffect}  from 'react'
import { doc, getDoc, setDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";
import { ProductsContext } from "../context/dataContext";
import { Col, Row, Button, Card, OverlayTrigger, Tooltip, Placeholder}  from 'react-bootstrap';
import { BsTrash} from "react-icons/bs";
import '../App.css';

// https://firebase.google.com/docs/firestore/query-data/queries?authuser=0&hl=en#collection-group-query
// https://firebase.google.com/docs/firestore/data-model#hierarchical-data
// https://stackoverflow.com/questions/46639058/firebase-cloud-firestore-invalid-collection-reference-collection-references-m

function ReadWishlist() {

    const {user} = useContext(AuthContext)
    const {products} = useContext(ProductsContext)
    const [items, setItems] = useState(null) 
    

  //FETCH Wishlist items from firestore
const getItems = async () => {


const docRef = doc(db, "users", user.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const {wishlist} =  docSnap.data();
  console.log("wishlist:", wishlist);
  setItems(wishlist);
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  const userDocRef = doc(db, "users", user.uid);
  setDoc(userDocRef, {wishlist:[]})
}


}

// 2 DOs:
// move getItems to a authcontext.js
// or create a local state wishlist

useEffect(() => {
  user && getItems()
  }, [user])

  const getProductById = (pid) => {
        const product = products.find(product => {
        return product.id === pid})
        console.log('product', product)
        return product
  };

  const renderTooltipCart = (props) => (
    <Tooltip id="button-tooltip2" {...props}>
      Remove from saved items
    </Tooltip>
  );
  


  return (
    <Row xs={1} md={4} className="g-4">
  {items && items.map((item, i) => {
   const product = getProductById(item.id)
  //  return (<Col key={item.id}>
  //   {/* <p>Product id: {item.id}</p> */}
  //   <p>Product title: {product.title}</p>
  //   <p>Price: {product.price}</p>
  //   </Col>)
    return (
      <Col key={item.id} >
      <Card>
        <Card.Img className="Image" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.price} €</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="success">Add to shopping cart</Button>
          <OverlayTrigger
                placement="top"
                overlay={renderTooltipCart}>
                <Button variant="danger" className="BsTrashBTN"><BsTrash className="BsTrash"/></Button>
              </OverlayTrigger>
        </Card.Body>
      </Card>
     </Col>
    )
  })} 
     <p aria-hidden="true">
          <Placeholder xs={12} bg="white" />
        </p>
    </Row> 
  )
}

export default ReadWishlist;