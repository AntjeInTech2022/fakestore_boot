
import Container from 'react-bootstrap/Container';
import { Form, Navbar, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import {useContext} from "react";


function NavContext() {


   const {handleSwitchOnOff} = useContext(AuthContext)



  return (
    <Navbar>
      <Container>
       {/* show if there is none signed in:  if (!user) */}
      <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Guest login"
        onChange={handleSwitchOnOff}
      />
      </Form>
    
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
{/* var && means if is true */}
{/* var? : if else */}
            {/* {user &&
             `Signed in as: ${user.email}`
            } */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;