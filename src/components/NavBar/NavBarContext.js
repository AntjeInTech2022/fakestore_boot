import Container from 'react-bootstrap/Container';
import { Form, Navbar } from 'react-bootstrap';


// user context
import {useContext} from "react";
import { AuthContext } from "../../context/authContext";



function NavContext() {

  const { isLoggedIn, handleSwitchOnOff, user } = useContext(AuthContext)


  return (
    <Navbar>
      <Container>
      <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Test login on / off"
        value={isLoggedIn}
        onChange={handleSwitchOnOff}
      />
      </Form>
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
{/* && if */}
{/* ?: if else */}
            {isLoggedIn&&
             `Signed in as: ${user.fname}`
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;