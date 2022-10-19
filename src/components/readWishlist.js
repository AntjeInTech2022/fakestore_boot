import {React, useContext}  from 'react'
import { doc, collection, query, where, getDocs, collectionGroup, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";
import { Col, Row} from 'react-bootstrap';

function ReadWishlist({product}) {

    const {user} = useContext(AuthContext)

// Get all documents in a collection:
const q = query(collection(db, "users", user.uid, 'wishlist'), where(user.uid, "==", user.id));

const querySnapshot = getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

// Collection Group: requires an index
// https://firebase.google.com/docs/firestore/query-data/queries?authuser=0&hl=en#collection-group-query

// const items = query(collectionGroup(db, 'wishlist'), where(user.uid, '==',  user.uid));
// const querySnapshot = getDocs(items);
// querySnapshot.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data());
// });



//   return (
//     <Row>
//   {items && items.map((item, i) => (
//           <Col key={item.id}>
//           <p>Product id: {item.id}</p>
//           <p>Product title: {item.title}</p>
//           </Col>
//         ))}
//     </Row> 
//   )
}

export default ReadWishlist;