import {useNavigate} from 'react-router-dom';
import {useState, useContext } from 'react'
import {Placeholder,Button, Form} from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import { BsGoogle} from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import '../App.css';

import {useAuth} from '../context/authContext';




function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {logIn, signInWithGoogle} = useContext(AuthContext)

  const handleGoogleSignIn =  async (event) => {
    event.preventDefault();
    setError('')
    try{
      const success =  await signInWithGoogle ();
      console.log('Google user logged in successfully')
      if (success === true) {
        navigate('/account')
      }
        
    }catch(error){
      setError(error.message)
      console.log(error.message)
    }
  }


const handleLogin =  async (event) => {
  event.preventDefault();
  setError('')
  try{
    const success = await logIn (email, password);
      console.log('User logged in successfully')
      if (success === true) {
        navigate('/account')
      }
      
  }catch(error){
    setError(error.message)
    console.log(error.message)
  }
}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}



  return (
    

      <Form>
      <h3>Welcome back ✌️</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        onChange={handleEmail}
        value={email}
        />

        {/* <Form.Text className="text-muted">
        Demo email: fake@fakestore.com
        
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control 
        // type="password" 
        value={password}
        placeholder="Password" 
        onChange={handlePassword}
        />

        {/* <Form.Text className="text-muted">
        Demo pw: 123456
        
        </Form.Text> */}
      </Form.Group>
  
      <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
      </div>

      <Form.Text className="text-muted">
       Forgot password?
        </Form.Text>
      <hr></hr>
      <div className="d-grid gap-2">
      <Button variant="outline-primary" onClick={handleGoogleSignIn}>
          Sign in with <FcGoogle/>oogle
      </Button>
      <hr></hr>
      </div>
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