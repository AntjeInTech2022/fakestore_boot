import {Form, Button} from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import {useState, useContext} from 'react'

// FIREBASE
import { AuthContext } from '../context/authContext';
// import {UserAuth} from '../context/authContext2'


function Register() {

  // states
const [displayName, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

 // functions
const {createUser} = useContext(AuthContext)
const navigate = useNavigate();



	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}

	const handleRegister =  async (e) => {
		e.preventDefault() // so that page does not reload
    setError('')
    try{
        await createUser(email, password);
        console.log('new user created successfully')
        navigate('/account')
        // setIsLoggedIn(true)
    }catch(error){
      setError(error.message)
      console.log(error.message)
    }

	};


  return (
    <Form>
        <h3>Welcome✌️</h3>

      <Form.Group className="mb-3" controlId="formBasicEmail">

     

        <Form.Label className="Label">Enter your email address</Form.Label>
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
        <Form.Label>Choose a password</Form.Label>
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
};

export default Register;