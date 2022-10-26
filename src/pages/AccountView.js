import {useEffect,useContext, useState} from 'react'
// import { UserAuth } from '../context/authContext2';
import { AuthContext } from '../context/authContext';
import {Button, Form, Placeholder} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import ReadWishlist from '../components/readWishlist';


function AccountView() {
    
    const {user, logOut, showUserInfoInConsole, updateName} = useContext(AuthContext)
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    // const [photo, setPhoto] = useState('');

    // const handleLogout = async() => {
    //     try {
    //         await logOut(user);
    //         navigate('/');
    //         console.log('User logged out')
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }

    const handleName = (e) => {
        setName(e.target.value)
    }


    const handleNameUpdate =  async (event) => {
      event.preventDefault();
      setError('')
      try{
        await updateName(name);
        console.log('User has submitted username')
        setName(name)
          
      }catch(error){
        setError(error.message)
        console.log(error.message)
      }
    }
      
    //2DO: add render component 'UserName':
    // <p>Username: {user && user.displayName}</p>
    useEffect(() => {
      updateName();
    },[name]);
      

  return (
    <div> <h3>Your account</h3>
        <hr/>
        <p>Email: {user && user.email}</p>
        <hr/>
        <p>Username: {user && user.displayName}</p>
        <Form.Label className="Label">Enter / change your username</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        value={name}
        onChange={handleName}
        />
        <div className="d-grid gap-2">
        <Placeholder xs={12} bg="white" />
      <Button variant="outline-primary" onClick={handleNameUpdate}>
      Submit username 
      </Button>
      <hr/>
      <Button onClick={showUserInfoInConsole} variant="outline-primary">
      Show my profile information in console.log 
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