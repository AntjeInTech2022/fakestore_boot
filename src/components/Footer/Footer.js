import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fake Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Delivery</Nav.Link>
            <Nav.Link href="#features">Payment Options</Nav.Link>
            <Nav.Link href="#pricing">Terms and Conditions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Footer;