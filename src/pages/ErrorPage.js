import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorPage() {
  const [show, setShow] = useState(true);
  const [key, setKey] = useState(true);
  let navigate = useNavigate();

  return (
    <Alert variant="danger">
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
      Change this and that and try again. Duis mollis, est non commodo
      luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      Cras mattis consectetur purus sit amet fermentum.
    </p>
    <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => navigate("/")} variant="outline-danger">
            Go back to main menue
          </Button>
        </div>
  </Alert>
  )
}

export default ErrorPage