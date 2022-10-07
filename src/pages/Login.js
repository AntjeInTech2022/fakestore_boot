import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import {useState } from 'react'


function Login() {
  const [key, setKey] = useState(true);
  let navigate = useNavigate();

  return (
    
    <Form onSelect={(k) => setKey(k)}>
      <h3>Welcome back ✌️</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Demo email: fake@fakestore.com
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        Demo pw: 123456
        
        </Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" disabled/>
      </Form.Group> */}
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        Login
      </Button>{' '}
      </div>
      <Form.Text className="text-muted">
       Forgot password?
        </Form.Text>
        {/* <p aria-hidden="true">
        <Placeholder xs={12} bg="light" />
      </p> */}
      <hr></hr>
        <h6>New here?</h6>
        <div className="d-grid gap-2">  
        <Button onClick={()=>navigate("/register")} variant="outline-primary" type="submit">
        Register
      </Button>
      </div>
    </Form>
     
  );
}

export default Login;