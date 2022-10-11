import {Container, Nav, Navbar, Button, Badge} from 'react-bootstrap';
import {BsCartPlus} from "react-icons/bs";
import "../../App.css";


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
            <Button variant="dark">
                <BsCartPlus/> 
                {/* <Badge bg="secondary">0</Badge>
                <span className="visually-hidden">items in cart</span> */}
                </Button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Footer;
