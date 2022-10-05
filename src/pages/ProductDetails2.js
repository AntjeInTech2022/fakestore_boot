import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductDetails2() {

  return (
    <Card style={{ width: '18rem' }} className="text-center">
    <Card.Img variant="top" src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
    <Card.Body>
      <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">109.95 €</Card.Subtitle>
      <Card.Text>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</Card.Text>
      <Button variant="primary">Add to cart</Button> 
    </Card.Body>
    <Card.Footer className="text-muted">Rating: 3.9</Card.Footer>
  </Card>);
}

export default ProductDetails2;
