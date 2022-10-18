import { React, useState } from "react";
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Card,
  Col,
  Row,
  Placeholder,
} from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";

function WishlistBTN() {
  // Tooltips
  const renderTooltipBookmark = (props) => (
    <Tooltip id="button-tooltip1" {...props}>
      Save item to favorites
    </Tooltip>
  );

  const [item, setItem] = useState();

  const add2Wishlist = async () => {
    //what do we want to store? text + time + user
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
