import { React, useState, useContext, useEffect } from "react";
import {Button,OverlayTrigger,Tooltip} from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
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
    //what do we want to store? 
    const wishListObj = {
        id: product.id,
        title: product.title,
    };
    console.log("wishListObj", wishListObj); //ok

    try {
        const wishlistRef = doc(db, "users", user.uid);
        //Add a new item to the "wishlist" array field.
        await updateDoc(wishlistRef, {
            wishlist: arrayUnion(wishListObj)
        });

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
