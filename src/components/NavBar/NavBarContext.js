import Container from 'react-bootstrap/Container';
import { Button, Navbar } from 'react-bootstrap';


// name context
import {useContext} from "react";
// import { AuthContext } from '../../context/authContext';
// import { AuthContext } from '.../context/authContext';
// import { AuthContext } from '../context/authContext';
// import { AuthContext } from './context/authContext';
// import { AuthContext } from '/context/authContext';
// import { AuthContext } from 'context/authContext';
import {AuthContext} from authContext.js;



function NavContext() {

  const { user } = useContext(AuthContext)


  return (
    <Navbar>
      <Container>
      {/* <Button onClick={() => setValue('Tester')} variant="outline-primary">Activate Tester</Button> */}
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">{user}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContext;