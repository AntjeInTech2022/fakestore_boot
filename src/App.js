import React from 'react'
import './App.css';
import TabFun from './components/TabBar/Tabs.js';
import Footer from './components/Footer/Footer.js';
import NavOffCanvas from './components/NavBar/NavOffCanvas';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WomenCat from './pages/WomenCategory';
import MenCat from './pages/MenCategory';
import JeweleryCat from './pages/JeweleryCategory';
//import GridCards from './components/GridCards/GridCards';
//import ProductDetails from './pages/ProductDetails';



const App = () => {

  return (
    <Router>
    <div className='App'>
      <NavOffCanvas/>
      <h1>Greatest selection of fake stuff</h1>
        <p>Fake it til you make it</p>
      <div className="container mb-3">
      <TabFun/> 
      
      <Routes>
        {/* <Route path='/' element={<GridCards/>}/> */}
        <Route path='/women' element={<WomenCat/>}/>
        {/* <Route path='/women/:womenId' element={<ProductDetails/>}/> */}
        <Route path='/men' element={<MenCat/>}/>
        <Route path='/jewelery' element={<JeweleryCat/>}/>
      </Routes>
      </div>
      <Footer/>  
    </div>
    </Router>
  );
}

export default App;