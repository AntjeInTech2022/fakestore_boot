import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsChat, BsCart, BsGithub, BsFillCollectionFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function NavOffCanvas() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
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
                  Menue
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="#action2">Your Account</Nav.Link>
                  <Nav.Link href="#action2"> Warenkorb <BsCart/></Nav.Link>
                  <Nav.Link href="#action2"> Github <BsGithub/></Nav.Link>
                  <Nav.Link href="https://fakestoreapi.com/docs">API <BsFillCollectionFill/></Nav.Link>
                  <NavDropdown
                    title="Contact"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Chat <BsChat/></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      E-Mail
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Phone
                    </NavDropdown.Item>
                  </NavDropdown>
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