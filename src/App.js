import React from 'react'
import './App.css';
//import GridCards from './components/GridCards/GridCards.js';
//import NavBar from './components/NavBar/Navbar.js';
import TabFun from './components/TabBar/TabFun.js';
import Footer from './components/Footer/Footer.js';
import NavOffCanvas from './components/NavBar/NavOffCanvas';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WomenCat from './pages/WomenCategory';
import MenCat from './pages/MenCategory';
import JeweleryCat from './pages/JeweleryCategory';



const App = () => {

  return (
    <Router>
    <div className='App'>
      <NavOffCanvas/>
      <h1>Greatest selection of fake stuff</h1>
        <p>Fake it til you make it</p>
      <div className="container mb-3">
      <TabFun/> 
      <Switch>
        <Route path='/women' component={WomenCat}/>
        <Route path='/men' component={MenCat}/>
        <Route path='/jewelery' component={JeweleryCat}/>
      </Switch>
      </div>
      <Footer/>  
    </div>
    </Router>
  );
}

export default App;