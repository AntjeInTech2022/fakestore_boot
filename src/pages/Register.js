import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
import "../App.css";

// FIREBASE
import { AuthContext } from "../context/authContext";

function Register() {
  // states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // functions
  // TS2339: Property 'createUser' does not exist on type '{}'.
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const success = await signInWithGoogle();
      console.log("Google user logged in successfully");
      if (success === true) {
        navigate("/account");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // so that page does not reload
    setError("");
    try {
      const success = await createUser(email, password);
      console.log("new user created successfully");
      if (success === true) {
        navigate("/account");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
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
          Remember use a fake e-mail but with a valid LTD (.com, .net, .org,
          etc).
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
        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>{" "}
      </div>
      <Form.Text className="text-muted">
        Already have an account? <Link to="/login">Login here. </Link>
      </Form.Text>
      <hr></hr>
      <div className="d-grid gap-2">
        <Form.Label>Or use your Google account to sign in:</Form.Label>
        <Button variant="outline-primary" onClick={handleGoogleSignIn}>
          Sign in with <FcGoogle />
          oogle
        </Button>
      </div>
    </Form>
  );
}

export default Register;
