import {React,useContext, useState} from 'react'
// import { UserAuth } from '../context/authContext2';
import { AuthContext } from '../context/authContext';
import {Button, Form, Placeholder} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import ReadWishlist from '../components/readWishlist';


function AccountView() {
    
    const {user, logOut, updateProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const [name, setName] = useState('');
    // const [photo, setPhoto] = useState('');
    // const [error, setError] = useState('')



    const handleLogout = async() => {
        try {
            await logOut(user);
            navigate('/');
            console.log('User logged out')
        } catch (e) {
            console.log(e.message)
        }
    }

    const handleName = (e) => {
        setName(e.target.value)
    }


    // const handleUpdate =  async (event) => {
    //     event.preventDefault();
    //     setError('')
    //     try{
    //         await updateProfile(name);
    //         console.log('new username is',name)
    //     }catch(error){
    //       setError(error.message)
    //       console.log(error.message)
    //     }
    //   }
      
          
      

  return (
    <div> <h3>Your account</h3>
        <hr/>
        <p>Email: {user && user.email}</p>
        <p>Username: {user && user.name}</p>
        <hr/>
        <Form.Label className="Label">Enter your username</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        value={name}
        onChange={handleName}
        />
        <div className="d-grid gap-2">
        <Placeholder xs={12} bg="white" />
      {/* <Button variant="primary" onClick={handleUpdate}> */}
      <Button variant="primary">
        Add username
      </Button>
      </div>
        <hr/>
        <h4>Saved Items</h4>
        <ReadWishlist/>
        <p aria-hidden="true">
          <Placeholder xs={12} bg="white" />
          <Placeholder xs={12} bg="white" />
          <Placeholder xs={12} bg="white" />
        </p>
    {/* <Button onClick={handleLogout} variant="outline-primary">Sign out</Button> */}
    </div>
  )
}

export default AccountView