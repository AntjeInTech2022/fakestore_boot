import Container from 'react-bootstrap/Container';
import { Form, Navbar, Button } from 'react-bootstrap';


// user context
import {useContext} from "react";
import { AuthContext, UserContext, UserAuth } from "../../context/authContext";




function NavContext() {

   const { isLoggedIn, handleSwitchOnOff, user, setUser } = useContext(AuthContext)
  // const { isLoggedIn, handleSwitchOnOff, user } = useContext(UserAuth)
  const login = () => {
    setUser({name:"Tester"});
    console.log('user logged in')
  }

  const logout = () => {
    setUser(null);
    console.log('user logged out')
  }


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
             `Signed in as: ${user.user_name}`
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;