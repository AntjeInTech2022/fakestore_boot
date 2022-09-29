import React from 'react'
import './App.css';
import GridCards from './components/GridCards/GridCards.js';
import NavBar from './components/NavBar/Navbar.js';
import TabFun from './components/TabBar/TabFun.js';
import Footer from './components/Footer/Footer.js';




// https://fakestoreapi.com/docs
//https://fakestoreapi.com/products


const App = () => {

  // console.log('local_json',data)

  return (
    <div className='App'>
      <NavBar/>
      <h1>Greatest selection of fake stuff</h1>
        <p>Fake it til you make it</p>
      <div className="container">
      <TabFun/> 
      <GridCards/>  
      </div>
      <Footer/>  
    </div>
  );
}

export default App;