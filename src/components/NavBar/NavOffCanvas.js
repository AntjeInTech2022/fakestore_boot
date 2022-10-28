import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

function NavOffCanvas() {
  const { user, setUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    setUser(null);
    console.log("user logged out");
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          bg="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid="md">
            <Link className="text-link" to="/">
              <Navbar.Brand className="fs-3">Fake Store</Navbar.Brand>
            </Link>

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
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{ gap: ".5rem" }}
                >
                  <Navbar.Text>
                    {user && `Signed in as: ${user.email}`}
                  </Navbar.Text>
                  <div>
                    {user ? (
                      <Button onClick={handleLogout}>Logout</Button>
                    ) : (
                      <Button onClick={() => navigate("/login")}>Login</Button>
                    )}
                  </div>
                  <div>
                    {/* <Button style={{ width: "3em", height: "3em" }}> */}
                    {/* <Button
                      className="shoppingCartBTN"
                      variant="outline-primary"
                    >
                      <BsCartPlus />
                    </Button> */}
                  </div>
                  {user ? (
                    <Nav.Link>
                      <Link className="text-link" to="/account">
                        Your Account
                      </Link>
                    </Nav.Link>
                  ) : (
                    <Nav.Link>
                      <Link className="text-link" to="/register">
                        Register
                      </Link>
                    </Nav.Link>
                  )}

                  <Nav.Link>
                    <Link className="text-link" to="/about">
                      About
                    </Link>
                  </Nav.Link>
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
