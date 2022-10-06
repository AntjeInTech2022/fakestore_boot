import React from 'react'
import './App.css';
import TabFun from './components/TabBar/Tabs.js';
import Footer from './components/Footer/Footer.js';
import NavOffCanvas from './components/NavBar/NavOffCanvas';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// nested routes OR pages?
import WomenCat from './pages/WomenCategory';
import MenCat from './pages/MenCategory';
import JeweleryCat from './pages/JeweleryCategory';
import ErrorPage from './pages/ErrorPage';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import ProductDetails2 from './pages/ProductDetails';



const App = () => {

  return (
    <Router>
    <div className='App'>
      <NavOffCanvas/>
      <h1>Greatest selection of fake stuff</h1>
        <p>Fake it till you make it</p>
      <div className="container mb-3">
      <TabFun/> 
    
      <Routes>
         <Route path='/' element={<AllProducts/>}/> 
          <Route path='/pdp/:id' element={<ProductDetails/>}/> 
           

         <Route path='/women' element={<WomenCat/>}/> 
         {/* <Route path='/women/:id' element={<Pdp/>}/>  */}

        <Route path='/men' element={<MenCat/>}/>
         {/* <Route path='/men/pdp/:id' element={<Pdp/>}/> */}

        <Route path='/jewelery' element={<JeweleryCat/>}/>
         {/* <Route path='/jewelery/pdp:id' element={<Pdp/>}/>  */}
         
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

      </div>
      <Footer/>  
    </div>
    </Router>
  );
}

export default App;