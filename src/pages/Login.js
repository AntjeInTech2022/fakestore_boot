import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import {useState } from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
// import { AuthContext } from '../context/authContext';


function Login() {
  const [key, setKey] = useState(true);
  let navigate = useNavigate();

  // const { login } = useContext(AuthContext)
	// const [email, setEmail] = useState("")
	// const [password, setPassword] = useState("")

	// const handleEmailChange = (e) => {
	// 	setEmail(e.target.value)
	// }

	// const handlePasswordChange = (e) => {
	// 	console.log(password)
	// 	setPassword(e.target.value)
	// }

	// const handleLogin = (e) => {
	// 	e.preventDefault()
	// 	login(email, password)
	// }

  return (
    
    <Form onSelect={(k) => setKey(k)}>
      <h3>Welcome back ✌️</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        // value={email}
        // onChange={handleEmailChange}
        />

        <Form.Text className="text-muted">
        Demo email: fake@fakestore.com
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control 
        type="password" 
        placeholder="Password" 
        // value={password}
        // onChange={handlePasswordChange}
        />

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
      <hr></hr>
      <Placeholder xs={12} bg="white" />
        <h6>New here?</h6>
        <div className="d-grid gap-2">  
        <Button onClick={()=>navigate("/register")} variant="outline-primary" type="submit">
        Register
      </Button>
      </div>
       <p aria-hidden="true">
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
        <Placeholder xs={12} bg="white" />
      </p>
    </Form>
     
  );
}

export default Login;