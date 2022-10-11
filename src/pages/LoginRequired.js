import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function LoginRequiredAlert() {
//   const [show, setShow] = useState(true);
//   const [key, setKey] = useState(true);
  let navigate = useNavigate();

  return (
    <Alert variant="warning">
    <Alert.Heading>Oh snap!</Alert.Heading>
    <p>To access this section you must log in to your account. </p>
    <Alert.Link href="/login"> Click here to login / register.</Alert.Link>
    
  </Alert>
  )
}

export default LoginRequiredAlert