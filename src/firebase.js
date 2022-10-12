// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeaB18xbTzCPBSFPWMSGn6DQnXfNTbmec",
  authDomain: "fakestore-60a63.firebaseapp.com",
  projectId: "fakestore-60a63",
  storageBucket: "fakestore-60a63.appspot.com",
  messagingSenderId: "864806621718",
  appId: "1:864806621718:web:b2824f9337a655c3dcdb37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
// const auth = getAuth(app)
// const db = getFirestore(app)

// Detect auth state
// onAuthStateChanged(auth, user => {
//   if(user !== null) {
//     console.log('logged in')
//   } else {
//     console.log('no user')
//   }
// });
