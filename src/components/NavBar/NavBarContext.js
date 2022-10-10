import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useContext} from "react";
import { UserNameContext } from '../../App';

function NavContext() {

  const userName = useContext(UserNameContext);

  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle /> */}
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