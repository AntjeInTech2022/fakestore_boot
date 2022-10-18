import {React, useContext, useState, useEffect} from 'react'
import { AuthContext } from "../context/authContext";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {db} from "../context/firebase"



function ViewChat() {
    
    const {user, setUser, logOut} = useContext(AuthContext);
    const [message, setMessage] =useState("")
    console.log('user', user)
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
const getMessages = async () => {
  console.log('db', db)

  const querySnapshot = await getDocs(collection(db, "chat"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}

    const sendMessage = async() => {
    //what do we want to store? text + time + user
    const messageObj = {
        text: message,
        date: new Date(), //creates the current date
        user: user.email,
    };
    console.log("messageObj", messageObj); //ok
    // Cloud Firestore creates collections and documents implicitly the first time you add data 
    // to the document. You do not need to explicitly create collections or documents.
    try {
        const docRef = await addDoc(collection(db, "chat"), messageObj);
        console.log("Document written with ID: ", docRef.id);
 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    // const readMessages = () => {

    // }
    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
useEffect(() => {
getMessages()
}, [])

	return (
        
        <div>
        <input type="text" value={message} onChange={handleMessage}/>
        <button onClick={sendMessage}>Send</button>
        </div>
	)
}

export default ViewChat