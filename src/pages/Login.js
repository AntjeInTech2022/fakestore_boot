import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Placeholder from 'react-bootstrap/Placeholder';


function Login() {
  return (
    
    <Form>
      <h3>Welcome back ✌️</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Remember use a fake e-mail but with a valid LTD (.com, .net, .org, etc).
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        The password should be at least 6 characters.
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
        <p aria-hidden="true">
        <Placeholder xs={12} bg="light" />
      </p>
        <h6>New here?</h6>
        <div className="d-grid gap-2">  
        <Button variant="outline-primary" type="submit">
        Register
      </Button>
      </div>
    </Form>
     
  );
}

export default Login;