import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsChat, BsCart, BsGithub, BsFillCollectionFill, BsBookmark} from "react-icons/bs";

//Context
// import { AuthContext } from './context/authContext';
import {useContext } from 'react';




function NavOffCanvas() {

  // const { user } = useContext(AuthContext)



  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} variant="dark" bg="dark" expand={expand} className="mb-3">
          <Container fluid>
         
            <Navbar.Brand href="/"className='fs-3'>Fake Store</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Navbar.Text>
            {/* Signed in as: <a href="/login">{user}</a>  */}
          </Navbar.Text>
                  <Nav.Link href="/login">Login / Register</Nav.Link>
                  <Nav.Link href="#action2">Your Account</Nav.Link>
                  <Nav.Link href="#action2"> Warenkorb <BsCart/></Nav.Link>
                  <Nav.Link href="#action2"> Saved items <BsBookmark/></Nav.Link> 
                  <Nav.Link href="#action2">Chat </Nav.Link>
                  <Nav.Link href="#action2"> About</Nav.Link>
                  <Nav.Link href="#action2"><BsGithub/> Github </Nav.Link>
                  <Nav.Link href="https://fakestoreapi.com/docs" target="_blank">API</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavOffCanvas;