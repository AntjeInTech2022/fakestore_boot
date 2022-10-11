import Container from 'react-bootstrap/Container';
import { Form, Navbar } from 'react-bootstrap';


// name context
import {useContext} from "react";
// import { AuthContext } from "../context/authContext";






function NavContext() {

  // const { user } = useContext(AuthContext)

  // const handleSwitchOnOff = (e) => {
	// 	setIsLoggedIn(true)
	// 	setIsLoggedIn(e.target.value)
  // }



  return (
    <Navbar>
      <Container>
      <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Test mode on / off"
        // value={false}
        // onChange={handleSwitchOnOff}
      />
      </Form>
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             Signed in as: <a href="/login">Tester</a> 
            {/* Signed in as: <a href="/login">{user}</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;