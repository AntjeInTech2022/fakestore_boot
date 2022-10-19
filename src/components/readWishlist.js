import {React, useContext}  from 'react'
import { collection, query, where, getDocs, collectionGroup } from "firebase/firestore";
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";

function ReadWishlist({product}) {

const {user} = useContext(AuthContext)
   
// Get all documents in a collection
const q = query(collection(db, "users", user.uid, 'wishlist'), where(user.uid, "==", user.uid));

const querySnapshot = getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

// Collection Group
// https://firebase.google.com/docs/firestore/query-data/queries?authuser=0&hl=en#collection-group-query
// const items = query(collectionGroup(db, 'wishlist'), where(user.uid, '==',  user.uid));
// const querySnapshot = getDocs(items);
// querySnapshot.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data());
// });


  return (
    <div> 
        {/* <p>Product id: {items && items.id}</p>
        <p>Product title: {items && items.title}</p> */}
    </div>
  )
}

export default ReadWishlist