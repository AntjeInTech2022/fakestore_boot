import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="bottom">
        <Container>
          <Navbar.Brand href="#home">Fake Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Github</Nav.Link>
            <Nav.Link href="#features">API</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Footer;