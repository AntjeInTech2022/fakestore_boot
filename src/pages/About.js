import React from 'react'
import {Placeholder} from 'react-bootstrap'

function About() {
  return (
<div>
<h3>About this project</h3>
<p>This project was part of the Code Academy Berlin Full-Stack Web Developer Bootcamp. The project consisted in building a free-of-choice Single Page Application with React JS using Firebase to create a login feature and to store information into a database.</p>
<ul>
  <li>API used: https://fakestoreapi.com/</li>
  <li>CSS framework used: Bootstrap React</li>
</ul>
<h3>Learning goals:</h3>
<ul>
<li>Create and configure a React project</li>
<li>Understand the component hierarchy in React</li>
<li>Create a navigation between pages using the React Router</li>
<li>Use of global store (Context Hook)</li>
<li>Use Firebase to create a registration / login feature by email and password</li>
<li>Optional: signin using Google OAuth</li>
<li>Use Firebase Cloud Firestore functionality to create a chat room feature or something alike</li>
</ul>
<h3>Requirements:</h3>
<ul>
<li>API providing a list and detailed endpoints</li>
<li>Design mobile first</li>
<li>Single Page Application (using a modern JS Framework)</li>
</ul>
<h3>Additional features implemented:</h3>
<ul>
<li>Protected Routes</li>
<li>Save favourites to a Wishlist (by writing, reading and deleting documents in Firestore)</li>
</ul>
<p aria-hidden="true">
          <Placeholder xs={12} bg="white" />
          <Placeholder xs={12} bg="white" />
          <Placeholder xs={12} bg="white" />
        </p>



</div>

    

    

  )
}

export default About;