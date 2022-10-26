import { useContext }  from 'react'
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import { BsTrash} from "react-icons/bs";
import {db} from "../context/firebase";
import { AuthContext } from "../context/authContext";


// https://firebase.google.com/docs/firestore/manage-data/delete-data
function RemoveItemFromWishlistBTN({ product, item }) {

  const {user} = useContext(AuthContext)
 

  const deleteItem = async () => {

    //which item do we want to remove from the wishlisz?
    // how can I access the index or create a pid upon creation?
    const wishListObj = {
      id: product.id,
      title: product.title,
    };

    const wishlistRef = doc(db, "users", user.uid);
    // Remove the 'item' on wishlist from the document
    await updateDoc(wishlistRef, {
      wishlist: deleteField(wishListObj),
    });
  };

  //2Do: FETCH updated Wishlist items from firestore
  // move getItems to a authcontext.js

    // Tooltip
    const renderTooltipDelete = (props) => (
        <Tooltip id="button-tooltip2" {...props}>
          Remove from saved items
        </Tooltip>
      );

  return <>
    <OverlayTrigger placement="top" overlay={renderTooltipDelete}>
        <Button onClick={deleteItem} variant="danger" className="BsTrashBTN"><BsTrash className="BsTrash"/></Button>
    </OverlayTrigger>
  </>;
}

export default RemoveItemFromWishlistBTN;
