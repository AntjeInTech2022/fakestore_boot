import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/AntjeInTech2022/fakestore_boot" target="_blank">Github</Nav.Link>
            <Nav.Link href="https://fakestoreapi.com/docs" target="_blank">API</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Footer;
