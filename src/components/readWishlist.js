import {React, useContext, useState, useEffect}  from 'react'
import { doc, collection, query, where, getDocs, collectionGroup, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";
import { Col, Row} from 'react-bootstrap';

// https://firebase.google.com/docs/firestore/query-data/queries?authuser=0&hl=en#collection-group-query
// https://firebase.google.com/docs/firestore/data-model#hierarchical-data
// https://stackoverflow.com/questions/46639058/firebase-cloud-firestore-invalid-collection-reference-collection-references-m

function ReadWishlist({products}) {

    const {user} = useContext(AuthContext)
    const [items, setItems] = useState('') 
    

  //FETCH Wishlist items from firestore
  const getItems = async () => {

   

// Query wishlist
const collectionReference = collection(db,"users",user.uid,"wishlist")
const q = query(collectionReference, where(user.uid, "==", user.uid))

const querySnapshot = await getDocs(q);
const items = [];
querySnapshot.forEach((doc) => {
  items.push(doc.data());
  console.log(doc.id, " => ", doc.data());
});
setItems(items);
}

useEffect(() => {
  getItems()
  }, [])



  // return (
  //   <Row>
  // {items && items.map((item, i) => (
  //         <Col key={item.id}>
  //         <p>Product id: {item.id}</p>
  //         <p>Product title: {item.title}</p>
  //         </Col>
  //       ))}
  //   </Row> 
  // )
}

export default ReadWishlist;