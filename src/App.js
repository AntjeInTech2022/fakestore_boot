import React from 'react'
import './App.css';
import GridCards from './components/GridCards/GridCards.js';
//import NavBar from './components/NavBar/Navbar.js';
import TabFun from './components/TabBar/TabFun.js';
import Footer from './components/Footer/Footer.js';
import NavOffCanvas from './components/NavBar/NavOffCanvas';
//import { Routes, Route } from "react-router-dom";



//npm i -D react-router-dom
//https://fakestoreapi.com/docs
//https://fakestoreapi.com/products


const App = () => {

  return (
    <div className='App'>
      <NavOffCanvas/>
      <h1>Greatest selection of fake stuff</h1>
        <p>Fake it til you make it</p>
      <div className="container mb-3">
      <TabFun/> 
      <GridCards/>  
      </div>
      <Footer/>  
    </div>
  );
}

export default App;