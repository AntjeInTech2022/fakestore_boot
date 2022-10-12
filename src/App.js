import {React, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// COMPONENTS
//import TabFun from './components/TabBar/Tabs.js';
import Footer from './components/Footer/Footer.js';
import NavOffCanvas from './components/NavBar/NavOffCanvas';
import ContainerFluid from './components/Banner/Banner';

// PAGES
import WomenCat from './pages/WomenCategory';
import MenCat from './pages/MenCategory';
import JeweleryCat from './pages/JeweleryCategory';
import ErrorPage from './pages/ErrorPage';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginRequiredAlert from './pages/LoginRequired';
import ViewChat from './pages/Chat';
//import UserProfile from './pages/UserProfile';

// testing
import BannerMen from './components/Banner/BannerMen';
import NavContext from './components/NavBar/NavBarContext';

//context
import {ProductsContextProvider} from './context/dataContext';
import { AuthContextProvider } from './context/authContext';

// FIREBASE
import {onSnapshot} from "@firebase/firestore";
import db from "./firebase";

const App = () => {

  useEffect(() => {
    onSnapshot();
  })

  return (
    <Router>
    <ProductsContextProvider>
    <AuthContextProvider> 
    <div className='App'>
    {/* <UserNameContext.Provider value="Test User"> */}
      <NavOffCanvas/>
      <NavContext/>
      {/* </UserNameContext.Provider> */}
      {/* <ContainerFluid/> */}
      <div className="container mb-3">
      {/* <TabFun/>  */}
      <Routes>
         <Route path='/' element={<><ContainerFluid/><AllProducts/></>}/> 
          <Route path='/product/:id' element={<ProductDetails/>}/> 
         
         <Route path='/women' element={<WomenCat/>}/> 
        <Route path='/men' element={<><BannerMen/><MenCat/></>}/>
        <Route path='/jewelery' element={<JeweleryCat/>}/>

         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         {/* <Route path='/profile' element={<UserProfile/>}/> */}
         <Route path='/chat' element={<ViewChat/>}/>
         <Route path='/alert' element={<LoginRequiredAlert/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </div>


      <Footer/>  
    </div>
    </AuthContextProvider>
 </ProductsContextProvider>
    </Router>
  );
}

export default App;