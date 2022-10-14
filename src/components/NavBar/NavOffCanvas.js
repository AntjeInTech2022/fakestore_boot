import {Container, Nav, Navbar,Button, Offcanvas} from 'react-bootstrap';
import { AuthContext } from "../../context/authContext";
import {useContext} from "react";
// import "../../App.css";


function NavOffCanvas() {

  const {user, setUser } = useContext(AuthContext)

  const login = () => {
    setUser({name:"Tester"});
    console.log('user logged in')
  }

  const logout = () => {
    setUser(null);
    console.log('user logged out')
  }




  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} variant="dark" bg="dark" expand={expand} className="mb-3">
          <Container fluid="md">
         
            <Navbar.Brand href="/" className='fs-3'>Fake Store</Navbar.Brand>
            

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
                  <Nav.Link href="/register">Register</Nav.Link>
                  {user ? (
        <Button onClick={logout}>Logout</Button>
      ): (
        <Button onClick={login}>Login</Button>
      )
      }
                  <Nav.Link href="/account">Your Account</Nav.Link>
                  {/* <Nav.Link href="/alert"> Warenkorb <BsCart/></Nav.Link> */}
                  {/* <Nav.Link href="/alert"> Saved items <BsBookmark/></Nav.Link>  */}
                  {/* <Nav.Link href="/chat">Chat </Nav.Link> */}
                  <Nav.Link href="#action2">About</Nav.Link>
                  {/* <Nav.Link href="https://github.com/AntjeInTech2022/fakestore_boot" target="_blank"> Github <BsGithub/></Nav.Link>
                  <Nav.Link href="https://fakestoreapi.com/docs" target="_blank">API</Nav.Link> */}
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