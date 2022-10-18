import { React, useState, useContext, useEffect } from "react";
import {Button,OverlayTrigger,Tooltip} from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";



function WishlistBTN({product}) {

  // Tooltip
  const renderTooltipBookmark = (props) => (
    <Tooltip id="button-tooltip1" {...props}>
      Save item to favorites
    </Tooltip>
  );

  const {user} = useContext(AuthContext)

  const add2Wishlist = async () => {
    //what do we want to store? product_id + time + user
    const wishListObj = {
        item: product.id,
        title: product.title,
        date: new Date(), //creates the current date
        // user: user.email,
    };
    console.log("wishListObj", wishListObj); //ok
    try {
        // setDoc
        // + update data 
        //+ id=user.id, 
        // create emty wishlist for evrey user after registration
        // Add a new document in collection "wishlist":
        // https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0
        await setDoc(doc(db, "wishlist", user.uid), wishListObj);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

  

  return (
    <OverlayTrigger placement="top" overlay={renderTooltipBookmark}>
      <Button onClick={add2Wishlist} variant="successwhite">
        <BsBookmark className="bookmark" />
      </Button>
    </OverlayTrigger>

    // <Button onClick={add2Wishlist} variant="successwhite"><BsBookmark className='bookmark'/></Button>
  );
}

export default WishlistBTN;
