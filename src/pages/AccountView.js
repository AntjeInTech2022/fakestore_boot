import {React,useContext} from 'react'
// import { UserAuth } from '../context/authContext2';
import { AuthContext } from '../context/authContext';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function AccountView() {
    
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await logOut(user);
            navigate('/');
            console.log('User logged out')
        } catch (e) {
            console.log(e.message)
        }
    }

  return (
    <div>Your Fake Store Account
        <hr/>
        <p>User name: {user && user.name}</p>
        <p>User email: {user && user.email}</p>
        
    <Button onClick={handleLogout} variant="outline-primary" type="submit">Sign out</Button>
    </div>
  )
}

export default AccountView