import {React, useContext, useState, useEffect} from 'react'
import { AuthContext } from "../context/authContext";
import { collection, addDoc, getDocs, query, where, onSnapshot  } from "firebase/firestore"; 
import {db} from "../context/firebase"



function ViewChat() {
    
    const {user} = useContext(AuthContext);
    const [message, setMessage] = useState("");
    const [textMessages, setTextMessages] = useState(null);
    // console.log('user', user)
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    //GET MESSAGES
  const getMessages = async () => {
  console.log('db', db)

  const querySnapshot = await getDocs(collection(db, "chat"));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
useEffect(() => {
  getMessages()
  }, [])


    //SEND MESSAGES
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
        readMessages();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    //READ MESSAGES
    const readMessages = async () => {
      const q = query(collection(db, "chat"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        setTextMessages(messages);
      });
    // const querySnapshot = await getDocs(collection(db, "chat"));
    // const messages = [];
    // querySnapshot.forEach((doc) => {
    //   // console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(doc.id);
    //   console.log(doc.data());
    //   messages.push(doc.data())
    // }); 
    // setTextMessage(messages);
  };

    useEffect(() => {
      readMessages();
      }, []);



	return (
        
        <div>
          {textMessages && 
            textMessages.map((text) => (
            <div>
              {/* ERROR: Problem with toString: */}
              {/* <p>Date: {text.date.toString()}</p> */}
              {/* <p>Date: {text.date}</p> */}
              <p>Sender: {text.user}</p> 
              <p>Message: {text.text}</p>
            </div>
          ))}
        <input type="text" value={message} onChange={handleMessage}/>
        <button onClick={sendMessage}>Send message</button>
        </div>
	);
};

export default ViewChat