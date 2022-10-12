import {Col, Form, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import {useState, useContext} from 'react'

function Register() {

  const { register } = useContext(AuthContext)
	const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

  const handleFirstNameChange = (e) => {
		setFName(e.target.value)
	}

  const handleLastNameChange = (e) => {
		setLName(e.target.value)
	}

  const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}

	const handleRegister = (e) => {
		e.preventDefault()
		register(fname, lname, email, password)
	}


  return (
    <Form>
        <h3>Welcome✌️</h3>
      <Row>
        <Col>
          <Form.Control placeholder="First name"
          value={fname}
          onChange={handleFirstNameChange} />
          
        </Col>
        <Col>
          <Form.Control placeholder="Last name" 
           value={lname}
           onChange={handleLastNameChange} 
           />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label className="Label">Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={handleEmailChange}
        />
        
        <Form.Text className="text-muted">
        Remember use a fake e-mail but with a valid LTD (.com, .net, .org, etc).
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange} 
        />

        <Form.Text className="text-muted">
        The password should be at least 6 characters.
        </Form.Text>

      </Form.Group>
      <div className="d-grid gap-2">
      <Button 
      variant="primary" 
      type="submit" 
      onClick={handleRegister}
      >
        Register
      </Button>{' '}
      </div>
      <Form.Text className="text-muted">
        Already have an account? <Link to="/login">Login here. </Link>
        </Form.Text>
    </Form>
  );
}

export default Register;