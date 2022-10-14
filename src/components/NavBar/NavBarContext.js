
import Container from 'react-bootstrap/Container';
import { Form, Navbar, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import {useContext} from "react";


function NavContext() {

  //  const { isLoggedIn, handleSwitchOnOff, user, setUser } = useContext(AuthContext)

   const {user, setUser} = useContext(AuthContext)


  
  // const login = () => {
  //   setUser({displayName:"Tester"});
  //   console.log('user logged in')
  // }

  const logout = () => {
    setUser(null);
    console.log('user logged out')
  }


  return (
    <Navbar>
      <Container>
      <Form>

      
      {/* <Form.Check 
        type="switch"
        id="custom-switch"
        label="Test login on / off"
        value={isLoggedIn}
        onChange={handleSwitchOnOff}
      /> */}
      </Form>
    
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
{/* && if */}
{/* ?: if else */}
            {/* {isLoggedIn&&
             `Signed in as: ${user.email}`
            } */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;