import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <Form>
        <h3>Welcome✌️</h3>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="Label">Email address</Form.Label>
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
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        Register
      </Button>{' '}
      </div>
    </Form>
  );
}

export default Register;