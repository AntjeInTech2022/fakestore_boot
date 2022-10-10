import Container from 'react-bootstrap/Container';
import { Button, Navbar } from 'react-bootstrap';


// name context
import {useContext} from "react";
import { UserNameContext } from '../../App';



function NavContext() {

  const userName = useContext(UserNameContext);
  //console.log('username', userName)

  return (
    <Navbar>
      <Container>
      <Button variant="outline-primary">Test Modus on</Button>
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">{userName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;